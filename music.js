function loadImage(result){
  $('#music_content').html(result);
}
if(document.getElementByID("image_with_music")){
document.getElementById("loadImage").onclick = function (){
  $.ajax({url: "music2.html", success: loadImage});
}}
