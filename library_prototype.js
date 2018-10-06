function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = []
}

function Playlist(name) {
    this.name = name;
    this.tracks = []
}

Playlist.prototype.overallRating = function() {
    let rating = 0;
    let count = 0;

    this.tracks.forEach((track) =>{
        rating += Number(track.rating);
        count++;
    })
    let avg = rating / count;
    return avg;
}
Playlist.prototype.totalDuration = function() {
    let totaltime = 0;
    this.tracks.forEach((track) =>{
        totaltime += Number(track.length);
    })
    return totaltime
}

Playlist.prototype.addTracks = function(track) {
    this.tracks.push(track)
}

function Track(title, rating, length) {
    this.title  = title
    this.rating = rating
    this.length = length
}

let track1 = new Track("Mandy sings", "4", "120") 
let track2 = new Track("Dia sings", "3", "400") 
let track3 = new Track("Dia sings", "3", "400") 
let track4 = new Track("Dia sings", "3", "400") 

let playlist1 = new Playlist("Summer Jams!")

playlist1.addTracks(track1)
playlist1.addTracks(track2)
playlist1.addTracks(track3)
playlist1.addTracks(track4)


console.log(playlist1)
console.log("over all rating ", playlist1.overallRating())
console.log("total time: ", playlist1.totalDuration())
