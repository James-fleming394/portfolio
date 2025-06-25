import React from 'react';
import './Modal.css';

export default function Modal({ title, content, onClose }) {
    return (
    <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <div className="modal-body">{content}</div>
        </div>
    </div>
    );
}
