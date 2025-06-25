import React, { useState } from 'react';
import './Stadium.css';
import Modal from './Modal';

export default function Stadium() {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className="stadium-wrapper">
            <img src="/stadium.png" alt="Stadium" className="stadium-img" />

            <div className="hotspot-overlay">
                {/* Pitcher */}
                <div
                    className="player-container"
                    style={{ top: '66%', left: '48.5%', width: '8%', height: '12.5%' }}
                    onClick={() => openModal('Name & Title')}
                >
                    <div className="title-card">Name & Title</div>
                </div>

                {/* Catcher */}
                <div
                    className="player-container"
                    style={{ top: '76.5%', left: '4.5%', width: '8%', height: '12%' }}
                    onClick={() => openModal('Contact')}
                >
                    <div className="title-card">Contact</div>
                </div>

                {/* Hitter */}
                <div
                    className="player-container"
                    style={{ top: '72%', left: '12.8%', width: '8%', height: '12.5%' }}
                    onClick={() => openModal('About Me')}
                >
                    <div className="title-card">About Me</div>
                </div>

                {/* First Base */}
                <div
                    className="player-container"
                    style={{ top: '79%', left: '72%', width: '9%', height: '14.5%' }}
                    onClick={() => openModal('Project 1')}
                >
                    <div className="title-card">Project 1</div>
                </div>

                {/* Shortstop */}
                <div
                    className="player-container"
                    style={{ top: '59.7%', left: '74.5%', width: '9%', height: '14%' }}
                    onClick={() => openModal('Project 2')}
                >
                    <div className="title-card">Project 2</div>
                </div>

                {/* Third Base */}
                <div
                    className="player-container"
                    style={{ top: '56.4%', left: '56%', width: '8%', height: '12%' }}
                    onClick={() => openModal('Project 3')}
                >
                    <div className="title-card">Project 3</div>
                </div>

                {/* Left Field */}
                <div
                    className="player-container"
                    style={{ top: '46%', left: '70%', width: '8%', height: '10%' }}
                    onClick={() => openModal('GitHub')}
                >
                    <div className="title-card">GitHub</div>
                </div>

                {/* Third Base Coach */}
                <div
                    className="player-container"
                    style={{ top: '57.5%', left: '33%', width: '8%', height: '12%' }}
                    onClick={() => openModal('LinkedIn')}
                >
                    <div className="title-card">LinkedIn</div>
                </div>

                {/* First Base Coach */}
                <div
                    className="player-container"
                    style={{ top: '86%', left: '43.3%', width: '8%', height: '16%' }}
                    onClick={() => openModal('Resume')}
                >
                    <div className="title-card">Resume</div>
                </div>
            </div>

            {modalContent && <Modal content={modalContent} onClose={closeModal} />}
        </div>
    );
}
