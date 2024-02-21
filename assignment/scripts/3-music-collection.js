console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

//set my collection to an empty array
let myCollection = [];

// Adds a new album to the collection with the provided title, artist, year published, and tracks.
// Returns the added album object.
function addToCollection(collection, title, artist, yearPublished, tracks) {
  let savedAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(savedAlbum);
  return savedAlbum;
}

//this function was tricky for me as it took awhile for me to figure out.
// I displayed each album in the collection along with its tracks and duration.
// It formats the output as "index. AlbumTitle by Artist, published in YearPublished:".
// For each track, it logs " TrackIndex. TrackName: TrackDuration".
function showCollection(collection) {
  collection.forEach((album, index) => {
    console.log(
      `${index + 1}. ${album.title} by ${album.artist}, published in ${
        album.yearPublished
      }:`
    );
    album.tracks.forEach((track, trackIndex) => {
      console.log(`    ${trackIndex + 1}. ${track.name}: ${track.duration}`);
    });
  });
}

// Finds albums in the collection by the specified artist.
// Returns an array of albums matching the artist.
function findByArtist(collection, artist) {
  return collection.filter(
    (album) => album.artist.toLowerCase() === artist.toLowerCase()
  );
}

// Added the albums to the collection //
addToCollection(myCollection, "Recitation 1", "Mishary Rashid Alafasy", 2010, [
  { name: "Al-Fatiha", duration: "1:20" },
]);

addToCollection(myCollection, "Recitation 2", "Abdul Rahman Al-Sudais", 2005, [
  { name: "Al-Anfal", duration: "5:00" },
]);

// im going to log the results //
console.log(myCollection);

/* Displays all albums */
showCollection(myCollection);

//log the artist
console.log(findByArtist(myCollection, "Mishary Rashid Alafasy"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
