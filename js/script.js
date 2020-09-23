

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

// TODO: add timer and .then to create time between function call and search function to allow time to populate local var

//events

$(".search-button").on("click", function (event) {
    event.preventDefault()
    var searchString = $("#searchfield").val().trim();
    console.log(searchString)
    localStorage.setItem("band", searchString)
    setTimeout(function(){ window.location.href = "./mediaplayer.html" }, 500);
    // window.location.href = "./mediaplayer.html"
    

    // getData(searchString);
})

//=========================================================================================
//Mediaplayer script
//=========================================================================================
