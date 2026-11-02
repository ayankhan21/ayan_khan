import { motion } from 'framer-motion';

// A freestyle swimmer over a line of water, drawn to match the lucide icons (24px grid, round strokes).
// On hover the swimmer glides forward and the water slides back. Animates when a parent motion element
// switches to its "hover" variant.
const SwimmerIcon = ({ size = 24, strokeWidth = 2, ...props }) => (
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
        <motion.g
            variants={{ hover: { x: [0, 2.5, 0], y: [0, -0.8, 0], transition: { duration: 0.6, ease: 'easeInOut' } } }}
            transition={{ duration: 0 }}
        >
            {/* head */}
            <circle cx="18" cy="9" r="1.7" />
            {/* body */}
            <path d="M4 14 15.5 11" />
            {/* arm arcing over the water */}
            <path d="M14.5 11C13 6.5 9 6 6.5 8.5" />
        </motion.g>
        <motion.path
            d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            variants={{ hover: { x: [0, -2, 0], transition: { duration: 0.6, ease: 'easeInOut' } } }}
            transition={{ duration: 0 }}
        />
    </svg>
);

export default SwimmerIcon;
