var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}





// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  for (var i in library.playlists) {
    var banana = library.playlists[i];
    var finalThing = i + ':' + library.playlists[i].name + ' - ' + library.playlists.p01.tracks.length + ' tracks'
    console.log(finalThing);

  }

}
printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var i in library.tracks) {
    var bananaTwo = library.tracks[i];
    var finalThingTwo = i + ':' + library.tracks[i].name + ' by ' + library.tracks[i].artist + '(' + library.tracks[i].album + ')'
    console.log(finalThingTwo);
  }

}

printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {



     console.log([playlistId] + ':' + library.playlists[playlistId].name + ' - ' + library.playlists[playlistId].tracks.length + ' Tracks')

   if (playlistId === 'p01') {
     console.log(library.playlists.p01.tracks[0] + ':' + library.tracks.t01.name + ' by ' + library.tracks.t01.artist + ' (' + library.tracks.t01.album + ')');
     console.log(library.playlists.p01.tracks[1] + ':' + library.tracks.t02.name + ' by ' + library.tracks.t02.artist + ' (' + library.tracks.t02.album + ')');

 } else if (playlistId === 'p02') {
     console.log(library.playlists.p02.tracks[0] + ':' + library.tracks.t03.name + ' by ' + library.tracks.t03.artist + ' (' + library.tracks.t03.album + ')');

 } else {
     console.log('Invalid Playlist ID');
 }




}

printPlaylist('p02');



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId){
library.playlists[playlistId].tracks.push(trackId)

}

addTrackToPlaylist ('t01','p02')
console.log(library.playlists)
// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album, newkey) {

  if (newkey === library.tracks) {
    console.log('Banana');
  }

 library.tracks[newkey] = {
  id: uid(),
  name: name,
  artist: artist,
  album: album,
  }

}

addTrack('Thierry', 'banana', 'bananatwo', 't01');
console.log(library.tracks)

// adds a playlist to the library

var addPlaylist = function (name) {
   library.playlists.p03 = {
    id: uid(),
    name: name,
    tracks: 'Bananas'

   }
}

addPlaylist('Hello');
console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
