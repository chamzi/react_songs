import React from 'react';
// action creator
export const selectSong = () => {
    return {
        type: 'SONG_SELECTED',
        payload: song

    };
};