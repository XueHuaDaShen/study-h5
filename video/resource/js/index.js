window.onload=function(){
    var video = document.getElementById('video');
    var play = document.getElementById('play');
    var volume = document.getElementById('volume');
    var back = document.getElementById('back');
    var forward = document.getElementById('forward');
    if( video.getAttribute('autoplay')===null ){
        play.innerHTML = '播放';
    }else{
        play.innerHTML = '暂停';
    }
    function videoPlay(){
        if( video.paused ){
            play.innerHTML = '暂停';
            video.play();
        }else{
            play.innerHTML = '播放';
            video.pause();
        }
    }
    play.onclick=function(){
        videoPlay();
    }
    volume.onclick=function(e){
        if(video.volume!=0){
            volume.innerHTML = '打开音量';
            video.volume = 0;
        }else{
            volume.innerHTML = '静音';
            video.volume = 1;
        }
    }
    back.onclick=function(){
        video.currentTime-=5;
    }
    forward.onclick=function(){
        video.currentTime+=5;
    }
    window.onkeypress=function(e){
        var e = e||window.event;
        // console.log(e)
        if(e.keyCode == 32){
            videoPlay();
        }
    }
}