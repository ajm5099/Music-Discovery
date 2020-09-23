//=========================================================================================
//Index script
//=========================================================================================

//variables
console.log("hello world");
var API = "AIzaSyChwdYAov09eDIzPKMuNd";




//functions

function getData(searchString) {

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchString}+Modest+Mouse&key=${API}-Aux-Il6N6alI`,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        $.ajax({
            url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${searchString}`,
            method: "GET"
        }).then(function (responseDescription) {
            console.log(responseDescription)
        })


    })

}


//events

$("#search-button").on("click", function (event) {
    
    var searchString = $("#searchfield").val().trim();
    console.log(searchString)
    getData(searchString);
})

//=========================================================================================
//Mediaplayer script
//=========================================================================================
