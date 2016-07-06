(function() {

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  var player;
  function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('player', {
      height: '412',
      width: '806',
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }


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
  

  var videoHandler = document.getElementById('videoid');
  var videoWrap = document.querySelector('.video-wrap');
  var pause = document.querySelector('.video__play');

  videoHandler.addEventListener('click', loadVid);
  pause.addEventListener('click', stopVideo);

  function loadVid() {
    var video = document.getElementById('vid').value;
    onYouTubeIframeAPIReady(video);
  }

})();
      