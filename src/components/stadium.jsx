import React from 'react';
import './Stadium.css';
import PlayerHotspot from './PlayerHotspot';

export default function Stadium() {
    return (
    <div className="stadium-wrapper">
        <img src="/stadium.png" alt="Stadium" className="stadium-img" />

        <div className="hotspot-overlay">
            {/* Pitcher’s Mound */}
            <PlayerHotspot top="42%" left="48%" label="Name & Title" onClick={() => alert('Intro')} />

            {/* Home Plate */}
            <PlayerHotspot top="68%" left="46%" label="Contact" onClick={() => alert('Contact')} />

            {/* First Base */}
            <PlayerHotspot top="55%" left="70%" label="About Me" onClick={() => alert('About Me')} />

            {/* Second Base */}
            <PlayerHotspot top="50%" left="58%" label="Project 1" onClick={() => alert('Project 1')} />

            {/* Shortstop */}
            <PlayerHotspot top="50%" left="38%" label="Project 3" onClick={() => alert('Project 3')} />

            {/* Third Base */}
            <PlayerHotspot top="55%" left="28%" label="Project 2" onClick={() => alert('Project 2')} />

            {/* Left Field */}
            <PlayerHotspot top="35%" left="18%" label="GitHub" onClick={() => alert('GitHub')} />

            {/* 3rd Base Coach */}
            <PlayerHotspot top="60%" left="10%" label="LinkedIn" onClick={() => alert('LinkedIn')} />

            {/* 1st Base Coach */}
            <PlayerHotspot top="60%" left="85%" label="Resume" onClick={() => alert('Resume')} />
        </div>
    </div>
    );
}