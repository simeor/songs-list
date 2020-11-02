import { combineReducers } from 'redux';


// no arguaments as will not change - set state
const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:55'},
    {title: 'Macarena', duration: '3:45'},
    {title: 'All Star', duration: '3:15'}
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {
  if( action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
