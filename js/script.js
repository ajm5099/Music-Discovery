

//=========================================================================================
//Index script
//=========================================================================================
console.log(window.location.href)
//variables
console.log("hello world");
var API = "AIzaSyChwdYAov09eDIzPKMuNd";
// var API = "AIzaSyCEcM224zRaqRswzYR99pFKqaVQ2l0wl5M"
// var API = "AIzaSyCGx8PV3sbVb2tUBB_GMqLU-5gn7GwfQ_4"
// var API = "AIzaSyAF6OYcDo_OpuW8YzdpnLWaAhwdEIyEzlI"

var artistName;
var artistYear;
var artistBio;
var videoId;
var videoTitle;
var artistStyle;
var artistGenre;
var artistMood;
var artistTwit;
var artistWebpage;

// Rock Bands for the Rock Genre button
var rockBands = [{
    videoId: "2cZ_EFAmj08",
    artistId: "Heart"
}, {
    videoId: "7uAUoz7jimg",
    artistId: "Chicago"
}]

var electronicBands = [{
    videoId: "n_LcVqqHSY8",
    artistId: "Lane 8"
}, {
    videoId: "Xl6w3EJR4tI",
    artistId: "REZZ"
}, {
    videoId: "pRdU63U-MyM",
    artistId: "Seven Lions"
}, {
    videoId: "QcQXUqSwSmQ",
    artistId: "Infected Mushroom"
}]

// Jazz Bands for the Jazz Genre Button
var jazzBands = [{
    videoId: "i8q6sR6yZCE",
    artistId: "Weather Report"
}, {
    videoId: "qQ__lmCOSeg",
    artistId: "Wynton Marsalis"
}, {
    videoId: "GOKlGlt0Ygg",
    artistId: "grover washington"
}]

// Classical Pieces for the Classical Button
var classicalBands = [{
    videoId: "jVDofBFtvwA",
    artistId: "Dvorak"
}, {
    videoId: "jv2WJMVPQi8",
    artistId: "Beethoven"
}, {
    videoId: "PSuRJueqsQg",
    artistId: "Wagner"
}]

// Metal Acts for the Metal Genre Button
var metalBands = [{
    videoId: "SHAQhxuV960",
    artistId: "Sepultura"
}, {
    videoId: "2BEOdXii_10",
    artistId: "Megadeth"
}]

// Hip hop acts for the Hip hop button
var hiphopBands = [{
    videoId: "amhC8WYgNA4",
    artistId: "Lil Nas X"
}, {
    videoId: "m0CB1q8CKoU",
    artistId: "Khruangbin"
}]

// Video Game Music Performances for the Video Game Genre Button
var videogameBands = [{
    videoId: "nMLkrTJ9BZI",
    artistId: "Martin O'Donnell"
}, {
    videoId: "f1Dj8W1DOBE",
    artistId: "Koji Kondo"
}, {
    videoId: "5a9E3n_VZRQ",
    artistId: "Mick Gordon"
}, {
    videoId: "RKHBgPAhYvg",
    artistId: "Nobuo Uematsu"
}]


//functions

function getData(searchString) {

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=concert${searchString}&key=${API}-Aux-Il6N6alI`,
        method: "GET"
    }).then(function (responseVideo) {
        console.log(responseVideo.items[0].id.videoId)
        videoId = responseVideo.items[0].id.videoId
        videoTitle = responseVideo.items[0].snippet.description
        
        var videoPlay = `https://www.youtube.com/embed/${videoId}`
        $("#live-feed").attr("src", videoPlay)
        console.log(responseVideo)

        $.ajax({
            url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchString}`,
            method: "GET"
        }).then(function (responseDescription) {
            console.log(responseDescription)
            var artistName = responseDescription.artists[0].strArtist
            var artistYear = responseDescription.artists[0].intFormedYear
            var artistBio = responseDescription.artists[0].strBiographyEN
            var artistStyle = responseDescription.artists[0].strStyle
            var artistGenre = responseDescription.artists[0].strGenre
            var artistMood = responseDescription.artists[0].strMood
            
            $("#artist-bio").text(responseDescription.artists[0].strBiographyEN)
            $("#artist-name").text(artistName)
            $("#artist-style").text("Style: " + artistStyle)
            $("#artist-mood").text("Mood: " + artistMood)
            $("#artist-yearformed").text("Year Formed: " + artistYear)
            $("#artist-genre").text("Genre: " + artistGenre)
            $("#artist-website").text(responseDescription.artists[0].strWebsite)
            $("#artist-twitter").text(responseDescription.artists[0].strTwitter)
        })


    })

}

// Used for the Genre Button to generate information
function getDataById(artistId) {

    $.ajax({
        url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistId}`,
        method: "GET"
    }).then(function (genreButtonResponse) {
        console.log(genreButtonResponse)
        var artistName = genreButtonResponse.artists[0].strArtist
        var artistYear = genreButtonResponse.artists[0].intFormedYear
        var artistBio = genreButtonResponse.artists[0].strBiographyEN
        var artistStyle = genreButtonResponse.artists[0].strStyle
        var artistGenre = genreButtonResponse.artists[0].strGenre
        var artistMood = genreButtonResponse.artists[0].strMood

        $("#artist-bio").text(genreButtonResponse.artists[0].strBiographyEN)
        $("#artist-name").text(artistName)
        $("#artist-style").text("Style: " + artistStyle)
        $("#artist-mood").text("Mood: " + artistMood)
        $("#artist-yearformed").text("Year Formed: " + artistYear)
        $("#artist-genre").text("Genre: " + artistGenre)
        $("#artist-website").text(genreButtonResponse.artists[0].strWebsite)
        $("#artist-twitter").text(genreButtonResponse.artists[0].strTwitter)
    });
}

function genreCall(genreBands){
    // Set variables for passing to ajax
    var genreIndex = Math.floor(Math.random() * genreBands.length);
    var searchGenreIdVideo = genreBands[genreIndex].videoId
    var searchGenreIdArtist = genreBands[genreIndex].artistId
    console.log(searchGenreIdVideo);
    console.log(searchGenreIdArtist);
    // Pass to ajax and transition
    transitionToMedia();
    var genrePlay = `https://www.youtube.com/embed/${searchGenreIdVideo}`
    $("#live-feed").attr("src", genrePlay)
    // Add href to trouble with video button
    var genreProblem = `https://www.youtube.com/watch?v=${searchGenreIdVideo}`
    $("#trouble-video-button").attr("href", genreProblem);
    getDataById(searchGenreIdArtist);
}

function transitionToMedia() {
    var splash = document.querySelector(".splash-page");
    splash.style.display = "none";
    var mediaLocal = document.querySelector(".media-page");
    mediaLocal.style.display = "block";
}

$(document).ready(function () {
    $('.sidenav').sidenav();
});

//events

$("#search-button").on("click", function (event) {
    event.preventDefault();
    var searchString = $("#searchBox").val().trim();
    console.log(searchString)
    transitionToMedia();
    getData(searchString);
})

// Event listener for the Rock Button
$("#Rock-button").on("click", function (event) {
    event.preventDefault();
    genreCall(rockBands);
})

// Event listener for the Electronic Button
$("#Electronic-button").on("click", function (event) {
    event.preventDefault();
    genreCall(electronicBands);
})

// Event listener for the Jazz Button
$("#Jazz-button").on("click", function (event) {
    event.preventDefault();
    genreCall(jazzBands);
})

// Event listener for the Classical Button
$("#Classical-button").on("click", function (event) {
    event.preventDefault();
    genreCall(classicalBands);
})

// Event listener for the Metal Button
$("#Metal-button").on("click", function (event) {
    event.preventDefault();
    genreCall(metalBands);
})

// Event listener for the Hip Hop Button
$("#Hip-Hop-button").on("click", function (event) {
    event.preventDefault();
    genreCall(hiphopBands);
})

// Event listener for the Video Game Button
$("#Video-Game-button").on("click", function (event) {
    event.preventDefault();
    genreCall(videogameBands);
})

// Trouble Video Functionality (Need to Add $("#trouble-video-button").attr("href", videogameProblem); to search function)
$("#trouble-video-button").on("click", function (event) {
    event.preventDefault();
    window.location.href = $(this).attr("href")
})

//=========================================================================================
//Mediaplayer script
//=========================================================================================
