const songDescription = document.getElementById('song-description');
const lyrics = document.getElementById('song-lyrics');
const songTitle = document.getElementById('search-bar')


function getSongName() {
    if (songTitle.value != "" ) {
        console.log(songTitle.value);


        //updates the song description
        songDescription.innerHTML = "title by artist";
        // updates the lyrics
        lyrics.innerHTML = "we are a go";
    } else {
        console.log("type in a correct song")
    }
    
}