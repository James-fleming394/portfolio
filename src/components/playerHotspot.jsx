import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PlayerHotspot.css';

export default function PlayerHotspot({ top, left, label, onClick, src, width = '80px' }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
        className="player-hotspot"
        style={{
            top,
            left,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 10,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        >
        {src && <img src={src} alt={label} className="player-img" style={{ width }} />}

        <AnimatePresence>
            {hovered && (
            <motion.div
                className="title-card"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -30 }}
                exit={{ opacity: 0 }}
            >
                {label}
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}
