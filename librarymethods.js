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
             },






  printPlaylists: function () {

       for (var i in this.playlists) {
        var banana = this.playlists[i];
        var finalThing = i + ':' + this.playlists[i].name + ' - ' + this.playlists.p01.tracks.length + ' tracks'
            console.log(finalThing);
       }

       },



  printTracks: function () {
 for (var i in this.tracks) {
    var bananaTwo = this.tracks[i];
    var finalThingTwo = i + ':' + this.tracks[i].name + ' by ' + this.tracks[i].artist + '(' + this.tracks[i].album + ')'
    console.log(finalThingTwo);
     }




      },



  addTrackToPlaylist: function (trackId, playlistId){

    this.playlists[playlistId].tracks.push(trackId)
    console.log(this.playlists)


       },





  uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },




  addPlaylist: function (name) {

    this.playlists.p03 = {
    id: this.uid(),
    name: name,
    tracks: 'Bananas'

          }
      console.log(this.playlists)

       },


  addTrack: function (name, artist, album, newkey) {


     if (newkey === this.tracks) {
    console.log('Banana');
     }

     this.tracks[newkey] = {
       id: this.uid(),
       name: name,
       artist: artist,
       album: album,
      }


       },


  addPlaylist: function (name) {

      this.playlists.p03 = {
          id: this.uid(),
          name: name,
          tracks: 'Bananas'

   }


   }

}



library.printPlaylists()
library.printTracks()
library.addTrackToPlaylist ('t01','p02')
library.addPlaylist('hello')
library.uid()
library.addTrack("hello", "from", "the", "side")
library.addPlaylist('Hello')
