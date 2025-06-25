import React from 'react';
import './Stadium.css';

export default function Stadium({ children }) {
    return (
        <div className="stadium-wrapper">
            <div className="stadium-overlay">
            {children}
            </div>
        </div>
    );
}
