import { motion } from 'framer-motion';

// Renders the whole site inside a device screen that matches the viewport:
//   >= 1025px  laptop      601-1024px  tablet (iPad-style, portrait)      <= 600px  phone
// The page itself never scrolls; the content scrolls inside .device-screen.
// The glass is a size container, so sections use cqh units to fill the screen and components use
// @container queries (not @media) to adapt to the device's screen width.
const DeviceFrame = ({ backdrop, children }) => {
    return (
        <div className="device-desk">
            <motion.div
                className="desk-blob"
                style={{ top: '-10%', left: '-8%', background: 'var(--blob-a)' }}
                animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="desk-blob"
                style={{ bottom: '-12%', right: '-6%', background: 'var(--blob-b)' }}
                animate={{ x: [0, -70, 0], y: [0, -40, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="device">
                <div className="device-lid">
                    <span className="device-camera" />
                    <div className="device-glass">
                        {backdrop}
                        <div className="device-screen">{children}</div>
                        <span className="device-island" />
                        <span className="device-home" />
                    </div>
                </div>
                <div className="device-base" />
            </div>

            <style>{`
        body { overflow: hidden; }

        .device-desk {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--desk-bg);
        }

        .desk-blob {
          position: absolute;
          width: 38vw;
          height: 38vw;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          pointer-events: none;
        }

        /* ---------- Laptop (default) ---------- */
        .device {
          --w: min(92vw, calc((100vh - 9rem) * 1.6));
          position: relative;
          width: var(--w);
        }

        .device-lid {
          position: relative;
          background: #17171c;
          padding: 18px 14px 14px;
          border-radius: 18px 18px 4px 4px;
          box-shadow: inset 0 0 0 2px #2c2c34, 0 40px 60px -20px rgba(70, 40, 90, 0.35);
          transform-origin: bottom center;
          animation: lid-open 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .device-camera {
          position: absolute;
          top: 6px;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2d3a55;
          box-shadow: 0 0 0 1.5px #0c0c10;
          transform: translateX(-50%);
        }

        .device-glass {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 6px;
          background: var(--screen-bg);
          container-type: size;
        }

        .device-screen {
          position: absolute;
          inset: 0;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
          z-index: 1;
        }

        .device-screen::-webkit-scrollbar { width: 8px; }

        .device-island, .device-home { display: none; }

        .device-base {
          position: relative;
          height: 16px;
          width: 110%;
          margin-left: -5%;
          background: linear-gradient(#e9eaee, #b7bac3);
          border-radius: 0 0 20px 20px / 0 0 14px 14px;
          box-shadow: 0 30px 40px -12px rgba(70, 40, 90, 0.4);
        }

        .device-base::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 16%;
          height: 6px;
          background: #aaadb6;
          border-radius: 0 0 10px 10px;
          transform: translateX(-50%);
        }

        @keyframes lid-open {
          from { transform: perspective(2000px) rotateX(-88deg); opacity: 0; }
          to { transform: perspective(2000px) rotateX(0); opacity: 1; }
        }

        @keyframes device-in {
          from { transform: translateY(40px) scale(0.92); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* ---------- Tablet (iPad-style, portrait) ---------- */
        @media (max-width: 1024px) {
          .device { --w: min(92vw, calc((100vh - 5rem - 32px) * 0.75 + 32px)); }
          .device-lid {
            padding: 16px;
            border-radius: 30px;
            box-shadow: inset 0 0 0 2px #2c2c34, 0 30px 60px -20px rgba(70, 40, 90, 0.4);
            transform-origin: center;
            animation: device-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          .device-camera { top: 6px; }
          .device-glass { aspect-ratio: 3 / 4; border-radius: 14px; }
          .device-base { display: none; }
        }

        /* ---------- Phone ---------- */
        @media (max-width: 600px) {
          .device { --w: min(92vw, calc((100vh - 5rem) * 0.4615 + 20px)); }
          .device-lid {
            padding: 10px;
            border-radius: 46px;
            box-shadow: inset 0 0 0 2px #2c2c34, 0 30px 50px -20px rgba(70, 40, 90, 0.45);
          }
          .device-lid::after {
            content: '';
            position: absolute;
            right: -3px;
            top: 22%;
            width: 3px;
            height: 12%;
            background: #2c2c34;
            border-radius: 0 2px 2px 0;
          }
          .device-camera { display: none; }
          .device-glass { aspect-ratio: 9 / 19.5; border-radius: 36px; }
          .device-island {
            display: block;
            position: absolute;
            top: 10px;
            left: 50%;
            width: 28%;
            height: 22px;
            border-radius: 12px;
            background: #0b0b0e;
            transform: translateX(-50%);
            z-index: 5;
          }
          .device-home {
            display: block;
            position: absolute;
            bottom: 6px;
            left: 50%;
            width: 34%;
            height: 4px;
            border-radius: 2px;
            background: rgba(31, 26, 23, 0.45);
            transform: translateX(-50%);
            z-index: 5;
          }
        }
      `}</style>
        </div>
    );
};

export default DeviceFrame;
