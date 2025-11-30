import React from 'react';
import { Code2, Database, GitBranch, Terminal, Cpu, Layers, Box, Braces, FileCode, Server } from 'lucide-react';

const BackgroundPattern = () => {
    const icons = [
        { Icon: Code2, top: '10%', left: '5%', size: 50, rotation: 15 },
        { Icon: Database, top: '20%', left: '85%', size: 40, rotation: -20 },
        { Icon: GitBranch, top: '35%', left: '10%', size: 45, rotation: 25 },
        { Icon: Terminal, top: '45%', left: '90%', size: 48, rotation: -15 },
        { Icon: Cpu, top: '60%', left: '8%', size: 42, rotation: 10 },
        { Icon: Layers, top: '70%', left: '88%', size: 45, rotation: -25 },
        { Icon: Box, top: '80%', left: '15%', size: 40, rotation: 20 },
        { Icon: Braces, top: '15%', left: '50%', size: 38, rotation: -10 },
        { Icon: FileCode, top: '55%', left: '50%', size: 42, rotation: 15 },
        { Icon: Server, top: '90%', left: '75%', size: 45, rotation: -20 },
        { Icon: Code2, top: '25%', left: '30%', size: 35, rotation: -30 },
        { Icon: Database, top: '75%', left: '60%', size: 38, rotation: 25 },
        { Icon: GitBranch, top: '40%', left: '70%', size: 40, rotation: -15 },
        { Icon: Terminal, top: '65%', left: '35%', size: 42, rotation: 20 },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {icons.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: item.top,
                            left: item.left,
                            transform: `rotate(${item.rotation}deg)`,
                            opacity: 0.03,
                            color: '#ffffff'
                        }}
                    >
                        <IconComponent size={item.size} strokeWidth={1} />
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundPattern;
