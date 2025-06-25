import React from 'react';
import './Stadium.css';
import PlayerHotspot from './PlayerHotspot';

export default function Stadium() {
    return (
    <div className="stadium-wrapper">
        <img src="/stadium.png" alt="Stadium" className="stadium-img" />

        <div className="hotspot-overlay">
            {/* Pitcher’s Mound */}
            <PlayerHotspot top="62%" left="47%" label="Name & Title" onClick={() => alert('Intro')} />

            {/* Catcher */}
            <PlayerHotspot top="74%" left="3%" label="Contact" onClick={() => alert('Contact')} />

            {/* Hitter */}
            <PlayerHotspot top="69%" left="9.5%" label="About Me" onClick={() => alert('About Me')} />

            {/* First Base */}
            <PlayerHotspot top="74%" left="71%" label="Project 1" onClick={() => alert('Project 1')} />

            {/* Shortstop */}
            <PlayerHotspot top="56%" left="73%" label="Project 2" onClick={() => alert('Project 2')} />

            {/* Third Base */}
            <PlayerHotspot top="53%" left="54%" label="Project 3" onClick={() => alert('Project 3')} />

            {/* Left Field */}
            <PlayerHotspot top="44%" left="68%" label="GitHub" onClick={() => alert('GitHub')} />

            {/* 3rd Base Coach */}
            <PlayerHotspot top="54%" left="31.5%" label="Resume" onClick={() => alert('Resume')} />

            {/* 1st Base Coach */}
            <PlayerHotspot top="82%" left="41.5%" label="LinkedIn" onClick={() => alert('LinkedIn')} />
        </div>
    </div>
    );
}