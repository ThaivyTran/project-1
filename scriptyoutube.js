//Load IFrame Player API
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Creates <iframe> (and YouTube player)
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'rev0JksurrY',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
          }
        });
      }

//The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

//The API calls this function when the player's state changes.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }
  function stopVideo() {
     player.stopVideo();
  }

