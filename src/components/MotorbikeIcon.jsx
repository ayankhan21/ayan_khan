import { motion } from 'framer-motion';

// The lucide "motorbike" icon, redrawn so each wheel can spin. A plain circle looks the same while it rotates,
// so a spoke cross fades in and spins on hover while the circle stays put. Animates when a parent motion element
// switches to its "hover" variant. (Starting opacity goes through `initial`: a `style` opacity would override
// the opacity attribute framer writes on SVG elements and the spokes would never appear.)
const spokesHover = {
    rotate: [0, 360],
    opacity: 1,
    transition: { rotate: { duration: 0.6, ease: 'linear' }, opacity: { duration: 0.1 } }
};

const Wheel = ({ cx, cy }) => (
    <>
        <circle cx={cx} cy={cy} r="3" />
        <motion.path
            d={`M${cx} ${cy - 3}v6M${cx - 3} ${cy}h6`}
            variants={{ hover: spokesHover }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0 }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
    </>
);

const MotorbikeIcon = ({ size = 24, strokeWidth = 2, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
    >
        <path d="m18 14-1-3" />
        <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" />
        <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" />
        <Wheel cx={19} cy={17} />
        <Wheel cx={5} cy={17} />
    </svg>
);

export default MotorbikeIcon;
