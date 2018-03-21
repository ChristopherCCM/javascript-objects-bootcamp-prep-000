var playlist = { Prince: '1999'};

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(object, key) {
  delete object[key];
  return object
}
