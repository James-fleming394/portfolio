import React, { useState, useRef } from 'react';
import './Stadium.css';
import Modal from './Modal';

export default function Stadium() {
  const [modalContent, setModalContent] = useState(null);
  const baseballRef = useRef(null);

  const handleClick = (content) => {
    const ball = baseballRef.current;
    if (!ball) return;

    ball.style.display = 'block';
    ball.style.opacity = '1';
    ball.src = '/baseball.png';
    ball.style.transition = 'none';
    ball.style.transform = 'translate(-50%, -50%) scale(1)';
    ball.style.top = '66%';
    ball.style.left = '48.5%';

    // Pitch to batter
    setTimeout(() => {
      ball.style.transition = 'top 0.4s ease-in, left 0.4s ease-in';
      ball.style.top = '72%';
      ball.style.left = '12.8%';
    }, 50);

    // Hit to center
    setTimeout(() => {
      ball.src = '/baseball-fire.png';
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      ball.style.transition = 'all 0.7s ease-out';
      ball.style.top = `${centerY}px`;
      ball.style.left = `${centerX}px`;
      ball.style.transform = 'translate(-50%, -50%) scale(20)';
      ball.style.opacity = '0';
    }, 550);

    // Show modal
    setTimeout(() => {
      setModalContent(content);
      ball.style.display = 'none';
    }, 1350);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="stadium-wrapper">
      <img src="/stadium.png" alt="Stadium" className="stadium-img" />
      <div className="hotspot-overlay">
        {[
          { top: '66%', left: '48.5%', label: 'Name & Title' },
          { top: '76.5%', left: '4.5%', label: 'Contact' },
          { top: '72%', left: '12.8%', label: 'About Me' },
          { top: '79%', left: '72%', label: 'Project 1' },
          { top: '59.7%', left: '74.5%', label: 'Project 2' },
          { top: '56.4%', left: '56%', label: 'Project 3' },
          { top: '46%', left: '70%', label: 'GitHub' },
          { top: '57.5%', left: '33%', label: 'LinkedIn' },
          { top: '86%', left: '43.3%', label: 'Resume' },
        ].map(({ top, left, label }, index) => (
          <div
            key={index}
            className="player-container"
            style={{ top, left, width: '8%', height: '12%' }}
            onClick={() => handleClick(label)}
          >
            <div className="title-card">{label}</div>
          </div>
        ))}
      </div>

      <img ref={baseballRef} className="baseball-anim" alt="baseball" style={{ display: 'none' }} />
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
}
