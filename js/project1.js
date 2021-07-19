//press on toggle
var togglemenu = document.querySelector(".toggle"),
links = document.querySelector(".links");
togglemenu.onclick = function(){
this.classList.toggle("menuactive");
links.classList.toggle("open")
};
