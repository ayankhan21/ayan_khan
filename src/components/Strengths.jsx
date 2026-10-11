import { motion } from 'framer-motion';

// Strengths are drawn from the experience and project history on this site.
// Weaknesses are left for Ayan to fill in honestly; the column stays hidden while the list is empty.
const strengths = [
    { title: 'Owning things end to end', text: 'From query design to service logic, I like seeing a feature through completely.' },
    { title: 'Performance work', text: 'I enjoy profiling, then cutting latency and bundle size with measurable results.' },
    { title: 'Scratching my own itch', text: 'I build small tools to solve real problems for myself and the people around me.' },
    { title: 'Shipping fast', text: 'Comfortable across Cloudflare, Vercel, Netlify and AWS to get ideas live quickly.' }
];

const weaknesses = [];

const Column = ({ heading, items, offset = 0 }) => (
    <div style={{ flex: 1, minWidth: '280px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{heading}</h3>
        {items.map((item, index) => (
            <motion.div
                key={item.title}
                initial={{ opacity: 0, x: offset }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                style={{
                    borderLeft: '2px solid var(--accent-color)',
                    padding: '0.5rem 0 0.5rem 1.25rem',
                    marginBottom: '1.5rem'
                }}
            >
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{item.text}</p>
            </motion.div>
        ))}
    </div>
);

const Strengths = () => {
    return (
        <section id="strengths" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Strengths & Weaknesses
                </motion.h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <Column heading="Strengths" items={strengths} offset={-20} />
                    {weaknesses.length > 0 && <Column heading="Working on" items={weaknesses} offset={20} />}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
