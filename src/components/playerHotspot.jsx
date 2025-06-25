import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PlayerHotspot.css';

export default function PlayerHotspot({ top, left, label, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
        className="player-hotspot"
        style={{
            top,
            left,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        >
        <div className="player-dot" />
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
        </div>
    );
}
