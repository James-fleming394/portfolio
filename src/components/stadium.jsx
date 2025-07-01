import React, { useState } from 'react';
import './Stadium.css';
import Modal from './Modal';

export default function Stadium() {
    const [modalContent, setModalContent] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [baseballStage, setBaseballStage] = useState(null);

    const handleClick = (content) => {
        setAnimating(true);
        setBaseballStage('pitch'); // Start animation

        setTimeout(() => {
            setBaseballStage('hit'); // Switch to fireball
        }, 700); // Time until contact

        setTimeout(() => {
            setAnimating(false);
            setBaseballStage(null);
            setModalContent(content); // Show modal
        }, 1400); // Time to show modal
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div className="stadium-wrapper">
            <img src="/stadium.png" alt="Stadium" className="stadium-img" />

            <div className="hotspot-overlay">
                {/* Pitcher */}
                <div className="player-container" style={{ top: '66%', left: '48.5%', width: '8%', height: '12.5%' }} onClick={() => handleClick('Name & Title')}>
                    <div className="title-card">Name & Title</div>
                </div>

                {/* Catcher */}
                <div className="player-container" style={{ top: '76.5%', left: '4.5%', width: '8%', height: '12%' }} onClick={() => handleClick('Contact')}>
                    <div className="title-card">Contact</div>
                </div>

                {/* Hitter */}
                <div className="player-container" style={{ top: '72%', left: '12.8%', width: '8%', height: '12.5%' }} onClick={() => handleClick('About Me')}>
                    <div className="title-card">About Me</div>
                </div>

                {/* First Base */}
                <div className="player-container" style={{ top: '79%', left: '72%', width: '9%', height: '14.5%' }} onClick={() => handleClick('Project 1')}>
                    <div className="title-card">Project 1</div>
                </div>

                {/* Shortstop */}
                <div className="player-container" style={{ top: '59.7%', left: '74.5%', width: '9%', height: '14%' }} onClick={() => handleClick('Project 2')}>
                    <div className="title-card">Project 2</div>
                </div>

                {/* Third Base */}
                <div className="player-container" style={{ top: '56.4%', left: '56%', width: '8%', height: '12%' }} onClick={() => handleClick('Project 3')}>
                    <div className="title-card">Project 3</div>
                </div>

                {/* Left Field */}
                <div className="player-container" style={{ top: '46%', left: '70%', width: '8%', height: '10%' }} onClick={() => handleClick('GitHub')}>
                    <div className="title-card">GitHub</div>
                </div>

                {/* Third Base Coach */}
                <div className="player-container" style={{ top: '57.5%', left: '33%', width: '8%', height: '12%' }} onClick={() => handleClick('LinkedIn')}>
                    <div className="title-card">LinkedIn</div>
                </div>

                {/* First Base Coach */}
                <div className="player-container" style={{ top: '86%', left: '43.3%', width: '8%', height: '16%' }} onClick={() => handleClick('Resume')}>
                    <div className="title-card">Resume</div>
                </div>
            </div>

            {/* Baseball animation */}
            {animating && (
                <img
                    src={baseballStage === 'hit' ? '/baseball-fire.png' : '/baseball.png'}
                    alt="Baseball"
                    className={`baseball-anim ${baseballStage === 'hit' ? 'hit' : 'pitch'}`}
                />
            )}

            {modalContent && <Modal content={modalContent} onClose={closeModal} />}
        </div>
    );
}
