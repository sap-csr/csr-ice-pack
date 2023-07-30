'use client'
import React, { Component } from 'react';

class AudioPlayer extends Component {
    render() {
        return (
            <audio controls className='flex items-center justify-between p-2 md:px-4 text-4xl font-semibold py-3'>
                <source src="/audio/ep2023_bgm.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        );
    }
}

export default AudioPlayer;