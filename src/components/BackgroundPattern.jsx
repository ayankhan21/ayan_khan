import React, { useEffect, useRef } from 'react';

// Binary backdrop in the theme's ink colour. Kept faint so it never competes with the content.
// It sits still until the page is scrolled; scrolling then drives the drops, each column at its own pace.
const CHARS = '01';
const CELL = 20;
const MAX_ALPHA = 0.2;
const EASE_SECONDS = 0.25; // how long the rain takes to catch up with the scroll; higher is floatier

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const makeDrop = (rows, scattered) => {
    const length = 8 + Math.floor(Math.random() * 14);
    return {
        // how far this column moves per row of scrolling, as a multiple of the scroll distance
        pace: 0.15 + Math.random() * 0.25,
        length,
        // start anywhere on first paint, or just off the top, so columns are out of step
        head: scattered ? Math.random() * (rows + length) : -Math.random() * rows,
        chars: Array.from({ length: rows + 1 }, randomChar)
    };
};

const BackgroundPattern = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let drops = [];
        let rows = 0;
        let width = 0;
        let height = 0;
        let ink = '#000';
        let frame = 0;
        let lastY = 0;
        let lastTime = 0;
        let remaining = 0;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.font = `${CELL - 4}px "Space Mono", ui-monospace, monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ink = getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim() || '#000';
            rows = Math.ceil(height / CELL);
            drops = Array.from({ length: Math.ceil(width / CELL) }, () => makeDrop(rows, true));
            draw();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = ink;
            drops.forEach((drop, col) => {
                const headRow = Math.floor(drop.head);
                // the fraction of a row the head has moved past, so motion is smooth instead of row by row
                const offset = (drop.head - headRow) * CELL;
                for (let i = 0; i < drop.length; i++) {
                    const row = headRow - i;
                    if (row < 0 || row > rows) continue;
                    ctx.globalAlpha = MAX_ALPHA * (1 - i / drop.length);
                    ctx.fillText(drop.chars[row], col * CELL + CELL / 2, row * CELL + offset);
                }
            });
            ctx.globalAlpha = 1;
        };

        // Scrolling down moves the drops down and scrolling up moves them back up. Scroll distance is queued in
        // `remaining` (in rows) and eased out over a few frames, so the rain glides and then settles instead of
        // stopping dead. A drop that leaves the screen on one side comes back in from the other.
        const step = (now) => {
            const dt = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;
            let move = remaining * (1 - Math.exp(-dt / EASE_SECONDS));
            if (Math.abs(remaining - move) < 0.01) move = remaining;
            remaining -= move;
            drops.forEach((drop, col) => {
                const before = Math.floor(drop.head);
                drop.head += move * drop.pace;
                // the leading characters flicker as they cross into a new row
                const headRow = Math.floor(drop.head);
                if (headRow !== before && headRow >= 0 && headRow <= rows) drop.chars[headRow] = randomChar();
                if (drop.head - drop.length > rows) drops[col] = makeDrop(rows, false);
                else if (drop.head < 0) {
                    drops[col] = makeDrop(rows, false);
                    drops[col].head = rows + drops[col].length + Math.random() * rows;
                }
            });
            draw();
            frame = remaining ? requestAnimationFrame(step) : 0;
        };

        const onScroll = () => {
            const y = window.scrollY;
            remaining += (y - lastY) / CELL;
            lastY = y;
            if (!frame && remaining) {
                lastTime = performance.now();
                frame = requestAnimationFrame(step);
            }
        };

        resize();
        lastY = window.scrollY;
        // Only rebuild on a real resize; mobile address bars change the height while scrolling.
        const onResize = () => {
            if (window.innerWidth === width && window.innerHeight <= height) return;
            resize();
        };
        window.addEventListener('resize', onResize);
        if (!reduceMotion) window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export default BackgroundPattern;
