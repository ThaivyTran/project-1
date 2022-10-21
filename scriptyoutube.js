var APIKey = "AIzaSyBAwnSQ5q1_ibXlEK1hoL_Zb5YDO3w0dYA";
var player = document.querySelector("#player");
var videoId = "rev0JksurrY"


var requestUrl = "https://www.googleapis.com/youtube/v3/search?key=rev0JksurrY&key=AIzaSyBAwnSQ5q1_ibXlEK1hoL_Zb5YDO3w0dYA&q=tacos&type=video&part=snippet";

//YouTube API call 
function searchYouTube() {

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })

  displayYouTube(data)

};

searchYouTube()

//Display YouTube video
var displayYouTube = function (data) {

 var tacoVideo = document.createElement(`container`);
 
 tacoVideo.innerHTML = data.items[0].id.videoId

}

