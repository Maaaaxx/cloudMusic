$(function(){
    $.get('https://raw.githubusercontent.com/Maaaaxx/cloudMusic/master/lyric.json').then(function(object){
        let {lyric} = object
        let lycArr = lyric.split('\n')
        let reg = /^\[(.+)\](.*)$/

        lycObjArr = lycArr.map(function(item){
            let matchs = item.match(reg)
            if(matchs){
                return {time:matchs[1],words:matchs[2]}
            }
        });
        let $lyric = $('.lyric')
        lycObjArr.forEach((lycObj)=>{
            if(!lycObj){return}
            var $p = $('<p></p>')
            $p.attr('time',lycObj.time).text(lycObj.words)
            $p.appendTo($lyric)
        })
    })
    let audio = document.createElement('audio')
    let cover = $('.disc')
    let musicPlaying = false
    audio.src='http://m10.music.126.net/20180418105049/fe4e6613190ef2875c1fd8a456309cfd/ymusic/1f36/af3d/60a8/f7ac35fcd56465570b2031b93edd2546.mp3'
    audio.oncanplay=function(){
        cover.addClass('playing')
        audio.play()
        musicPlaying = true
    }
    $('.disc-container').click(function(){
        if(musicPlaying){
            cover.addClass('paused')
            audio.pause()
            musicPlaying = false
        }else{
            cover.removeClass('paused')
            audio.play()
            musicPlaying = true
        }
    })
})

