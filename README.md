# Assignment 1


## Before you can run the code

1. Clone the repository to your local directory.
2. Create a new file named `app.js` and insert the code below:
    ```javascript
    const musicPlaylist = require("./Yash_musicPlayer.js");
    ```
3. To run the module, open a new terminal and enter the following command:
    ```bash
    node app.js
    ```


## What each function does

1. `addPlaylist(playlistName)`: Adds a new playlist with the specified name.

2. `addSong(playlistName, title, artist, album)`: Adds a new song to the specified playlist with the given title, artist, and album.

3. `searchSongs(playlistName, search)`: Searches for songs containing the specified search term within the specified playlist.

4. `getSongDetails(playlistName, id)`: Retrieves the details of a song by its ID within the specified playlist.

5. `updateSongDetails(playlistName, id, updatedDetails)`: Updates the details of a song by its ID within the specified playlist with the provided updated details.

6. `deleteSong(playlistName, id)`: Deletes a song by its ID within the specified playlist.

7. `listSongs(playlistName)`: Lists all songs within the specified playlist.

8. `getSongsByArtist(playlistName, artist)`: Retrieves all songs by a specific artist within the specified playlist.

9. `deletePlaylist(playlistName)`: Deletes the entire playlist with the specified name.



## Example code for how you can run each function of the program


```javascript
const musicPlaylist = require("./Yash_musicPlayer.js");

// Import the music playlist module
const musicPlaylist = require('./test8.js');

// Create a new playlist
musicPlaylist.addPlaylist("Playlist1");

// Add new songs to the "Playlist1" playlist
musicPlaylist.addSong("Playlist1", "Feel Good Inc.", "Gorillaz", "Demon Days");
musicPlaylist.addSong("Playlist1", "Not Like Us", "Kendrick Lamar", "");

// List all songs in the "Playlist1" playlist
console.log("All Songs in Playlist1 Playlist:");
console.log(musicPlaylist.listSongs("Playlist1"));

// Search for songs with the term "not" in the "Playlist1" playlist
console.log("\nSearch Results for 'not' in Playlist1 Playlist:");
console.log(musicPlaylist.searchSongs("Playlist1", "not"));

// Get the details of a song by its ID in the "Playlist1" playlist
console.log("\nDetails of Song with ID 1 in Playlist1 Playlist:");
console.log(musicPlaylist.getSongDetails("Playlist1", 1));

// Update the details of a song in the "Playlist1" playlist
console.log("\nUpdating Song with ID 1 in Playlist1 Playlist:");
musicPlaylist.updateSongDetails("Playlist1", 1, { title: "Dirty Harry" });
console.log(musicPlaylist.getSongDetails("Playlist1", 1));

// Delete a song by its ID in the "Playlist1" playlist
console.log("\nDeleting Song with ID 2 in Playlist1 Playlist:");
musicPlaylist.deleteSong("Playlist1", 2);
console.log(musicPlaylist.listSongs("Playlist1"));

// Get songs by a specific artist in the "Playlist1" playlist
console.log("\nSongs by Gorillaz in Playlist1 Playlist:");
console.log(musicPlaylist.getSongsByArtist("Playlist1", "Gorillaz"));

// Delete the entire "Playlist1" playlist
console.log("\nDeleting Playlist1 Playlist:");
musicPlaylist.deletePlaylist("Playlist1");
console.log(musicPlaylist.listSongs("Playlist1")); // This should indicate the playlist does not exist

```