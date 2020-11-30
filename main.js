function loadMusic(result){
  $('#music_content').html(result);
}
if(document.getElementByID("play_music")){
document.getElementById("play_music").onclick = function (){
  $.ajax({url: "music.html", success: loadMusic});
}}
