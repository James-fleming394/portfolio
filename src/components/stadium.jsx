import React from 'react';
import './Stadium.css';
import PlayerHotspot from './playerHotspot';

export default function Stadium() {
    return (
    <div className="stadium-wrapper">
        <img src="/stadium.png" alt="Stadium" className="stadium-img" />

        <div className="hotspot-overlay">
            {/* Pitcher’s Mound */}
            <img
                src="/player-zones/pitcher.png"
                alt="Pitcher"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '68%',
                    left: '49.2%',
                    width: '36%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Pitcher clicked: Name & Title')}
            />

            {/* Catcher */}
            <img
                src="/player-zones/catcher.png"
                alt="Catcher"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '76.5%',
                    left: '5.2%',
                    width: '22%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Catcher clicked: Contact')}
            />

            {/* Hitter */}
            <img
                src="/player-zones/hitter.png"
                alt="Hitter"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '72%',
                    left: '10%',
                    width: '24%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Hitter clicked: About Me')}
            />

            {/* First Base */}
            <img
                src="/player-zones/firstbase.png"
                alt="First Base"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '79%',
                    left: '71.3%',
                    width: '29%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Project 1 clicked: Project 1')}
            />

            {/* Shortstop */}
            <img
                src="/player-zones/shortstop.png"
                alt="Shortstop"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '59.7%',
                    left: '74.5%',
                    width: '26.5%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Project 2 clicked: Project 2')}
            />

            {/* Third Base */}
            <img
                src="/player-zones/thirdbase.png"
                alt="Third Base"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '56.4%',
                    left: '55.3%',
                    width: '25%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Project 3 clicked: Project 3')}
            />

            {/* Left Field */}
            <img
                src="/player-zones/leftfield.png"
                alt="Left Field"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '46%',
                    left: '70%',
                    width: '15%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('GitHub clicked: GitHub')}
            />

            {/* 3rd Base Coach */}
            <img
                src="/player-zones/thirdbase-coach.png"
                alt="Third Base Coach"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '57.5%',
                    left: '33%',
                    width: '21%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Resume clicked: Resume')}
            />

            {/* 1st Base Coach */}
            <img
                src="/player-zones/firstbase-coach.png"
                alt="First Base Coach"
                className="player-zone"
                style={{
                    position: 'absolute',
                    top: '86%',
                    left: '43.3%',
                    width: '33%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
                onClick={() => alert('Resume clicked: Resume')}
            />
            <PlayerHotspot top="82%" left="41.5%" label="LinkedIn" onClick={() => alert('LinkedIn')} />
        </div>
    </div>
    );
}