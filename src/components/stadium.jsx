import React from 'react';
import './Stadium.css';

export default function Stadium() {
  return (
    <div className="stadium-wrapper">
      <img src="/stadium.png" alt="Stadium" className="stadium-img" />

      <div className="hotspot-overlay">
        {/* Pitcher */}
        <div className="player-container" style={{ top: '68%', left: '49.2%', width: '36%' }}>
          <img src="/player-zones/pitcher.png" alt="Pitcher" className="player-zone" />
          <div className="title-card">Name & Title</div>
        </div>

        {/* Catcher */}
        <div className="player-container" style={{ top: '76.5%', left: '5.2%', width: '22%' }}>
          <img src="/player-zones/catcher.png" alt="Catcher" className="player-zone" />
          <div className="title-card">Contact</div>
        </div>

        {/* Hitter */}
        <div className="player-container" style={{ top: '72%', left: '10%', width: '24%' }}>
          <img src="/player-zones/hitter.png" alt="Hitter" className="player-zone" />
          <div className="title-card">About Me</div>
        </div>

        {/* First Base */}
        <div className="player-container" style={{ top: '79%', left: '71.3%', width: '29%' }}>
          <img src="/player-zones/firstbase.png" alt="First Base" className="player-zone" />
          <div className="title-card">Project 1</div>
        </div>

        {/* Shortstop */}
        <div className="player-container" style={{ top: '59.7%', left: '74.5%', width: '26.5%' }}>
          <img src="/player-zones/shortstop.png" alt="Shortstop" className="player-zone" />
          <div className="title-card">Project 2</div>
        </div>

        {/* Third Base */}
        <div className="player-container" style={{ top: '56.4%', left: '55.3%', width: '25%' }}>
          <img src="/player-zones/thirdbase.png" alt="Third Base" className="player-zone" />
          <div className="title-card">Project 3</div>
        </div>

        {/* Left Field */}
        <div className="player-container" style={{ top: '46%', left: '70%', width: '15%' }}>
          <img src="/player-zones/leftfield.png" alt="Left Field" className="player-zone" />
          <div className="title-card">GitHub</div>
        </div>

        {/* 3rd Base Coach */}
        <div className="player-container" style={{ top: '57.5%', left: '33%', width: '21%' }}>
          <img src="/player-zones/thirdbase-coach.png" alt="Third Base Coach" className="player-zone" />
          <div className="title-card">LinkedIn</div>
        </div>

        {/* 1st Base Coach */}
        <div className="player-container" style={{ top: '86%', left: '43.3%', width: '33%' }}>
          <img src="/player-zones/firstbase-coach.png" alt="First Base Coach" className="player-zone" />
          <div className="title-card">Resume</div>
        </div>
      </div>
    </div>
  );
}
