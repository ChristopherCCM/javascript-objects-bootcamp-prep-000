var playlist = { Prince: '1999'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return object
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
