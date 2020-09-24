

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

//=========================================================================================
//Mediaplayer script
//=========================================================================================
