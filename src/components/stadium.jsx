import React from 'react';
import './Stadium.css';

export default function Stadium() {
    return (
    <div className="stadium-wrapper">
        <img src="/stadium.png" alt="Stadium" className="stadium-img" />

    <div className="hotspot-overlay">
        {/* Example Player Zone */}
        <div className="player-container" style={{ top: '66%', left: '48.5%', width: '8%', height: '12.5%' }}>
            <img
            src="/player-zones/pitcher.png"
            alt="Pitcher"
            className="player-zone hidden-outline"
        />
        <div className="title-card">Name & Title</div>
        </div>

        {/* Repeat for each zone... */}
        <div className="player-container" style={{ top: '76.5%', left: '4.5%', width: '8%', height: '12%' }}>
            <img 
            src="/player-zones/catcher.png" 
            alt="Catcher" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">Contact</div>
        </div>

        <div className="player-container" style={{ top: '72%', left: '12.8%', width: '8%', height: '12.5%' }}>
            <img 
            src="/player-zones/hitter.png" 
            alt="Hitter" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">About Me</div>
        </div>

        <div className="player-container" style={{ top: '79%', left: '72%', width: '9%', height: '14.5%' }}>
            <img 
            src="/player-zones/firstbase.png" 
            alt="First Base" 
            className="player-zone hidden-outline" /
            >
            <div className="title-card">Project 1</div>
        </div>

        <div className="player-container" style={{ top: '59.7%', left: '74.5%', width: '9%', height: '14%' }}>
            <img 
            src="/player-zones/shortstop.png" 
            alt="Shortstop" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">Project 2</div>
        </div>

        <div className="player-container" style={{ top: '56.4%', left: '56%', width: '8%', height: '12%' }}>
            <img 
            src="/player-zones/thirdbase.png" 
            alt="Third Base" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">Project 3</div>
        </div>

        <div className="player-container" style={{ top: '46%', left: '70%', width: '8%', height: '10%' }}>
            <img 
            src="/player-zones/leftfield.png" 
            alt="Left Field" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">GitHub</div>
        </div>

        <div className="player-container" style={{ top: '57.5%', left: '33%', width: '8%', height: '12%' }}>
            <img 
            src="/player-zones/thirdbase-coach.png" 
            alt="Third Base Coach" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">LinkedIn</div>
        </div>

        <div className="player-container" style={{ top: '86%', left: '43.3%', width: '8%', height: '16%' }}>
            <img 
            src="/player-zones/firstbase-coach.png" 
            alt="First Base Coach" 
            className="player-zone hidden-outline" 
            />
            <div className="title-card">Resume</div>
        </div>
        </div>
    </div>
    );
}
