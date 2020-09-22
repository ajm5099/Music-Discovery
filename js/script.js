//=========================================================================================
//Index script
//=========================================================================================
console.log("hello world")

$("#search-button").on("click", function(event) {
    event.preventDefault()
    var searchString = $("#searchfield").val().trim();
    console.log(searchString)
})

console.log("Never Give up, yo!")

API = "AIzaSyChwdYAov09eDIzPKMuNd"



$.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=concert+Modest+Mouse&key="+ API +"-Aux-Il6N6alI",    
    method: "GET"
}).then(function (response) {
    console.log(response)
})


//=========================================================================================
//Mediaplayer script
//=========================================================================================
