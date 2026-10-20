import React from 'react';

// Flat editorial backdrop: a faint grid plus a tilted band of stripes in the theme's secondary accent.
const BackgroundPattern = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            backgroundImage:
                'linear-gradient(rgba(var(--accent-rgb), 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb), 0.10) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
        }}>
            <div style={{
                position: 'absolute',
                left: '-10%',
                bottom: '8%',
                width: '60%',
                height: '28%',
                transform: 'rotate(-12deg)',
                opacity: 0.35,
                backgroundImage:
                    'repeating-linear-gradient(to bottom, var(--accent-2) 0, var(--accent-2) 26px, transparent 26px, transparent 30px)',
                borderTop: 'var(--ink-border)',
                borderBottom: 'var(--ink-border)'
            }} />
        </div>
    );
};

export default BackgroundPattern;
