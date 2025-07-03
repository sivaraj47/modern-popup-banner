const popupmodel = document.getElementById("popupmodel");
const close =  document.getElementById("close");

close.onclick = function(){
  popupmodel.style.display="none";
}

window.onload= function(){
  setTimeout(function(){
    popupmodel.style.display="block";
  }, 4000);
}
window.onclick=  function(e){
  if(e.target == popupmodel){
    popupmodel.style.display="none";
  }
}