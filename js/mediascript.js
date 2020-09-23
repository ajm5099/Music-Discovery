//=========================================================================================
//Index script
//=========================================================================================
console.log(window.location.href)
//variables
console.log("hello world");
var API = "AIzaSyChwdYAov09eDIzPKMuNd";
var localBand = localStorage.getItem("band")
console.log(localBand)


//functions

function getData(searchString) {

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchString}&key=${API}-Aux-Il6N6alI`,
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

// $(".search-button").on("click", function (event) {
//     event.preventDefault()
//     var searchString = $("#searchfield").val().trim();
//     console.log(searchString+"1")
//     // window.location.href = "./mediaplayer.html"
//     console.log(searchString)

//     getData(searchString);
// })

//=========================================================================================
//Mediaplayer script
//=========================================================================================
