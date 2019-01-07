import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Lost stars', duration: '3:35'},
        { title: 'Chasing cars', duration: '4:05'},
        { title: 'How to save a life', duration: '2:59'}
    ]

};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;

}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})