

//=========================================================================================
//Index script
//=========================================================================================
console.log(window.location.href)
//variables
console.log("hello world");
var API = "AIzaSyChwdYAov09eDIzPKMuNd";
var artistName;
var artistYear;
var artistBio;
var videoId;
var videoTitle;
var artistFB;
var artistTwit;
var artistWebpage;
var artistGenre;


//functions

function getData(searchString) {

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=concert${searchString}&key=${API}-Aux-Il6N6alI`,
        method: "GET"
    }).then(function (responseVideo) {
        console.log(responseVideo.items[0].id.videoId)
        videoId = responseVideo.items[0].id.videoId
        var videoPlay = `https://www.youtube.com/embed/${videoId}`
        $("#live-feed").attr("src", videoPlay)
        console.log(responseVideo)
        
        $.ajax({
            url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchString}`,
            method: "GET"
        }).then(function (responseDescription) {
            console.log(responseDescription)
            artistBio = responseDescription.artists[0].strBiographyEN
            
            console.log(artistBio)
        })


    })

}

function transitionToMedia() {
    var splash = document.querySelector(".splash-page");
    splash.style.display = "none";
    var mediaLocal = document.querySelector(".media-page");
    mediaLocal.style.display = "block";
}

$(document).ready(function(){
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
