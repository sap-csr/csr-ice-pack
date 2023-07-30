'use client'
import React, { Component } from 'react';

class AudioPlayer extends Component {
    render() {
        return (
            <div className='audio-player-container'>
                <audio controls className='audio-player'>
                    <source src="/audio/ep2023_bgm.mp3" type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default AudioPlayer;