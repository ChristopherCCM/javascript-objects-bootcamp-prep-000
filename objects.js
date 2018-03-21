var playlist = { Prince: '1999'};

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key, value) {
  delete obj.key;
  return obj
}
