
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


      //Notes for JS
      //functions and parameters such as autoplay, playVideo(), loadVideoById() won't work in all mobile environments.
      //Need to deply before the video will play. Apparently YouTube forbids embedding some videos in a localhost environment without a public domain, but your video can be embedded with no issue whatsoever through a public domain/subdomain:

      //Notes for HTML
      //instead of writing an empty <div> element on your page, which the player API's JavaScript code will then replace with an <iframe> element, you could create the <iframe> tag yourself. The first example in the Examples section shows how to do this.
      //Note that if you do write the <iframe> tag, then when you construct the YT.Player object, you do not need to specify values for the width and height, which are specified as attributes of the <iframe> tag, or the videoId and player parameters, which are are specified in the src URL
      

      //Notes for CSS
      //Embedded players must have a viewport that is at least 200px by 200px. If the player displays controls, it must be large enough to fully display the controls without shrinking the viewport below the minimum size. We recommend 16:9 players be at least 480 pixels wide and 270 pixels tall.
