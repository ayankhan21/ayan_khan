// Badminton shuttlecock, drawn to match the lucide icons (24px grid, round strokes, currentColor)
// since lucide-react has no racket or shuttlecock.
const ShuttleIcon = ({ size = 24, strokeWidth = 2, ...props }) => (
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
        <g transform="rotate(45 12 12)">
            {/* cork */}
            <path d="M9 16h6v2a3 3 0 0 1-6 0z" />
            {/* skirt: outer edges, rim, feathers and the binding band */}
            <path d="M9 16 5 5" />
            <path d="M15 16 19 5" />
            <path d="M5 5Q12 2.5 19 5" />
            <path d="M12 16V3.8" />
            <path d="M10.5 16 8.7 4.2" />
            <path d="M13.5 16 15.3 4.2" />
            <path d="M7.2 10Q12 11.5 16.8 10" />
        </g>
    </svg>
);

export default ShuttleIcon;
