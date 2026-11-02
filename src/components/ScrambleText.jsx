import { Fragment, useLayoutEffect, useRef, useState } from 'react';

// Headline "scramble": every character starts as a random glyph, keeps reshuffling, and locks onto its real
// letter at a random moment. The real text stays in the layout (hidden) underneath the glyphs, so nothing shifts.
const DURATION = 700; // ms until every character has locked in
const REFRESH = 70; // ms between reshuffles
const SYMBOLS = '_-+*^%$#@!~?<>[]{}|/\\';
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const randomGlyph = () => {
    const pool = Math.random() < 0.55 ? SYMBOLS : LETTERS;
    return pool[Math.floor(Math.random() * pool.length)];
};

const srOnly = {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    whiteSpace: 'nowrap'
};

const ScrambleText = ({ text, delay = 0 }) => {
    const [done, setDone] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const glyphRefs = useRef([]);

    useLayoutEffect(() => {
        if (done) return;
        const chars = Array.from(text);
        const revealAt = chars.map(() => 0.08 + Math.random() * 0.82);
        let frame = 0;
        let start = null;
        let lastRefresh = 0;

        glyphRefs.current.forEach((el) => {
            if (!el) return;
            el.textContent = randomGlyph();
            el.style.opacity = '0.55';
        });

        const tick = (now) => {
            if (start === null) start = now;
            const progress = Math.min((now - start) / DURATION, 1);
            const refresh = now - lastRefresh >= REFRESH;
            chars.forEach((char, i) => {
                const el = glyphRefs.current[i];
                if (!el) return;
                if (progress >= revealAt[i]) {
                    el.textContent = char;
                    el.style.opacity = '1';
                } else if (refresh) {
                    el.textContent = randomGlyph();
                }
            });
            if (refresh) lastRefresh = now;
            if (progress < 1) frame = requestAnimationFrame(tick);
            else setDone(true);
        };

        const timer = setTimeout(() => { frame = requestAnimationFrame(tick); }, delay);
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(frame);
        };
    }, [done, text, delay]);

    if (done) return text;

    // Words stay unbreakable; the space between them is a normal wrapping point. `index` counts spaces too,
    // so it lines up with Array.from(text) in the effect above.
    let index = 0;
    const words = text.split(' ');
    return (
        <>
            <span style={srOnly}>{text}</span>
            {words.map((word, w) => (
                <Fragment key={w}>
                    <span aria-hidden="true" style={{ whiteSpace: 'nowrap' }}>
                        {Array.from(word).map((char) => {
                            const i = index++;
                            return (
                                <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
                                    <span style={{ visibility: 'hidden' }}>{char}</span>
                                    <span
                                        ref={(el) => { glyphRefs.current[i] = el; }}
                                        style={{ position: 'absolute', left: 0, top: 0 }}
                                    />
                                </span>
                            );
                        })}
                    </span>
                    {w < words.length - 1 && (index++, ' ')}
                </Fragment>
            ))}
        </>
    );
};

export default ScrambleText;
