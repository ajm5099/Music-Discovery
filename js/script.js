console.log("hello world")

API = "AIzaSyChwdYAov09eDIzPKMuNd"



$.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=concert+Modest+Mouse&key="+ API +"-Aux-Il6N6alI",    
    method: "GET"
}).then(function (response) {
    console.log(response)
})