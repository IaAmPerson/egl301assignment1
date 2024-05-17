// Simulated database to store playlists and their songs
let playlists = {};

// Adds a new playlist
function addPlaylist(playlistName) {
  if (playlists[playlistName]) {
    return `Playlist "${playlistName}" already exists`;
  }
  playlists[playlistName] = [];
  console.log(`Playlist "${playlistName}" is created.`);
}

// Adds a new song to a specific playlist
function addSong(playlistName, title, artist, album) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const playlist = playlists[playlistName];
  const songExists = playlist.some(song => song.title === title && song.artist === artist);
  if (songExists) {
    return "Song already exists in the playlist";
  }
  const song = {
    id: playlist.length + 1,
    title: title,
    artist: artist,
    album: album
  };
  playlist.push(song);
  console.log(`Song "${title}" by ${artist} is added to playlist "${playlistName}".`);
}

// Searches for songs with a given term in a specific playlist
function searchSongs(playlistName, search) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const foundSongs = playlists[playlistName].filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase()) ||
    song.album.toLowerCase().includes(search.toLowerCase())
  );
  return foundSongs.length > 0 ? foundSongs : `No songs found in playlist "${playlistName}" matching the search term`;
}

// Gets the details of a song by its ID in a specific playlist
function getSongDetails(playlistName, id) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const song = playlists[playlistName].find(song => song.id === id);
  return song || `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Updates the details of a song in a specific playlist
function updateSongDetails(playlistName, id, updatedDetails) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const playlist = playlists[playlistName];
  const song = playlist.find(song => song.id === id);
  if (song) {
    song.title = updatedDetails.title || song.title;
    song.artist = updatedDetails.artist || song.artist;
    song.album = updatedDetails.album || song.album;
    return song;
  }
  return `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Deletes a song by its ID in a specific playlist
function deleteSong(playlistName, id) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const playlist = playlists[playlistName];
  const songIndex = playlist.findIndex(song => song.id === id);
  if (songIndex !== -1) {
    const [deletedSong] = playlist.splice(songIndex, 1);
    console.log(`Song "${deletedSong.title}" by ${deletedSong.artist} is deleted from playlist "${playlistName}".`);
    return true;
  }
  return `Song with ID ${id} does not exist in playlist "${playlistName}"`;
}

// Lists all songs in a specific playlist
function listSongs(playlistName) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  return playlists[playlistName];
}

// Gets songs by a specific artist in a specific playlist
function getSongsByArtist(playlistName, artist) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  const artistSongs = playlists[playlistName].filter(song => song.artist.toLowerCase() === artist.toLowerCase());
  return artistSongs.length > 0 ? artistSongs : `No songs found for artist "${artist}" in playlist "${playlistName}"`;
}

// Deletes an entire playlist
function deletePlaylist(playlistName) {
  if (!playlists[playlistName]) {
    return `Playlist "${playlistName}" does not exist`;
  }
  delete playlists[playlistName];
  console.log(`Playlist "${playlistName}" is deleted.`);
}

// Exporting the functions as a module
module.exports = {
  addPlaylist,
  addSong,
  searchSongs,
  getSongDetails,
  updateSongDetails,
  deleteSong,
  listSongs,
  getSongsByArtist,
  deletePlaylist
};
