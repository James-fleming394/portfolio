import React, { useState, useRef } from 'react';
import './Stadium.css';
import Modal from './Modal';

export default function Stadium() {
  const [modalContent, setModalContent] = useState(null);
  const [showRipple, setShowRipple] = useState(false);
  const baseballRef = useRef(null);

const handleClick = (content) => {
  const ball = baseballRef.current;
  if (!ball) return;

  // Set to pitcher
  ball.style.display = 'block';
  ball.style.opacity = '1';
  ball.style.transform = 'translate(-50%, -50%) scale(1)';
  ball.style.top = '66%';
  ball.style.left = '48.5%';
  ball.src = '/baseball.png';
  ball.style.transition = 'all 0.6s ease-in';

  // Pitch to hitter
  setTimeout(() => {
    ball.style.top = '72%';
    ball.style.left = '12.8%';
  }, 50);

  // Hit toward screen center
setTimeout(() => {
  ball.src = '/baseball-fire.png';

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const ballSize = ball.offsetWidth;

  // Convert centerX/centerY from pixels to percentages relative to viewport
  const topPercent = (centerY / window.innerHeight) * 100;
  const leftPercent = (centerX / window.innerWidth) * 100;

  ball.style.transition = 'all 0.8s ease-out';
  ball.style.top = `${topPercent}%`;
  ball.style.left = `${leftPercent}%`;

  // FIX: Use scale transform *after* translate to keep it centered
  ball.style.transform = 'translate(-50%, -50%) scale(8)';
}, 700);

  // Ripple + modal
  setTimeout(() => {
    setShowRipple(true);
    ball.style.opacity = '0';

    setTimeout(() => {
      setModalContent(content);
      ball.style.display = 'none';
      setShowRipple(false);
    }, 400);
  }, 1500);
};

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="stadium-wrapper">
      <img src="/stadium.png" alt="Stadium" className="stadium-img" />

      <div className="hotspot-overlay">
        {[
          ['Name & Title', '66%', '48.5%', '8%', '12.5%'],
          ['Contact', '76.5%', '4.5%', '8%', '12%'],
          ['About Me', '72%', '12.8%', '8%', '12.5%'],
          ['Project 1', '79%', '72%', '9%', '14.5%'],
          ['Project 2', '59.7%', '74.5%', '9%', '14%'],
          ['Project 3', '56.4%', '56%', '8%', '12%'],
          ['GitHub', '46%', '70%', '8%', '10%'],
          ['LinkedIn', '57.5%', '33%', '8%', '12%'],
          ['Resume', '86%', '43.3%', '8%', '16%'],
        ].map(([label, top, left, width, height]) => (
          <div
            key={label}
            className="player-container"
            style={{ top, left, width, height }}
            onClick={() => handleClick(label)}
          >
            <div className="title-card">{label}</div>
          </div>
        ))}
      </div>

      <img
        ref={baseballRef}
        src="/baseball.png"
        alt="Baseball"
        className="baseball-anim"
        style={{ display: 'none' }}
      />

      {showRipple && <div className="ripple-screen" />}
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
}
