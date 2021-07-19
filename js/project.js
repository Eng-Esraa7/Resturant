/*global $, alert, console, document*/

//handle active

function handleactive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
element.classList.remove("active");
    });
    //add
    ev.target.classList.add("active");
    }

//switch color
var colorli = document.querySelectorAll('.color-list li');
//loop on li
    colorli.forEach(li => {
    li.addEventListener("click", (e)=>{
    //set color in root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    handleactive(e);
    });
    });

   //switch background random
var randombackground = document.querySelectorAll('.random span'),
    backinterval;

    //loop on span
    randombackground.forEach(span => {
        span.addEventListener("click", (e)=>{
    
        handleactive(e);
    
        if(e.target.dataset.background ==='yes'){
            randomize();
        }
        else{
            clearInterval(backinterval);
        }
        
        });
        });

    //show and hide aside

        var showaside = document.querySelectorAll('.show span'),
            aside = document.querySelector('.side');

        showaside.forEach(span =>{
            span.addEventListener("click", (e)=>{
                handleactive(e);
                if(e.target.dataset.bollets ==='block'){
                    aside.style.display = "block";
                }
                else{
                    aside.style.display = "none";
                    }
            })
        });


//random background option
var element = document.querySelector('.landing'),
    classimg = ["03.jpg", "04.jpg", "06.jpg", "01.jpg", "04.jpg", "08.jpg"];

function randomize(){
    backinterval = setInterval(function () {
            "use strict";
            var random = Math.floor(Math.random() * classimg.length);
            element.style.background = 'url("img/' + classimg[random] + '")';
            element.style.backgroundSize = 'cover';
        }, 3000);
    }

    randomize();

//reset

document.querySelector(".reset").onclick = function(){
    localStorage.clear();
    window.location.reload();
};


    //press on toggle
    var togglemenu = document.querySelector(".toggle"),
        links = document.querySelector(".links");
    togglemenu.onclick = function(){
        this.classList.toggle("menuactive");
        links.classList.toggle("open");
    };


    //active bollets

    var bolletsactive = document.querySelectorAll(".bollets");

    bolletsactive.forEach(li => {
        li.addEventListener("click", (e)=>{
        e.target.classList.toggle("active");
        });
        });

document.body.setAttribute("font-size", '100px')
        /*press on icon cog*/

document.querySelector('.icon i').onclick = function(){
    //rotation
this.classList.toggle('fa-spin');

//open and close box
document.querySelector('.setting').classList.toggle('open');
};