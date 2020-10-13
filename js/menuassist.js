// JavaScript Document
var mebt = document.getElementById("menubt");
/*var mbti = document.getElementById("m0t");
var mb01 = document.getElementById("m01");
var mb02 = document.getElementById("m02");
var mb03 = document.getElementById("m03");
var mb04 = document.getElementById("m04");
var mb05 = document.getElementById("m05");*/
var mbcl = document.getElementsByClassName("meui");
var mebt_clicked = false;

mebt.classList.add("mebt-closed");
mebt.addEventListener("click", function() {
    //var vistates = mbcl.style.display;
    if(!mebt_clicked) {
        /*mb01.style.display = "flex";
        mb02.style.display = "flex";
        mb03.style.display = "flex";
        mb04.style.display = "flex";
        mb05.style.display = "flex";*/
        for(var i = 0; i < mbcl.length; i++) {
            mbcl[i].style.display = "flex";
        }
        mebt.classList.remove("mebt-closed");
        mebt.classList.add("mebt-opened");
        mebt_clicked = true;
    }
    else {
        /*mb01.style.display = "none";
        mb02.style.display = "none";
        mb03.style.display = "none";
        mb04.style.display = "none";
        mb05.style.display = "none";*/
        for(var j = 0; j < mbcl.length; j++) {
            mbcl[j].style.display = "none";
        }
        mebt.classList.remove("mebt-opened");
        mebt.classList.add("mebt-closed");
        mebt_clicked = false;
    }
});
/*mbti.addEventListener("click", function() {
    window.location.href = "../";
}, false);
mb01.addEventListener("click", function() {
    window.location.href = "../aundc/";
}, false);
mb02.addEventListener("click", function() {
    window.location.href = "../releases/";
}, false);
mb03.addEventListener("click", function() {
    window.location.href = "../news/";
}, false);
mb04.addEventListener("click", function() {
    window.open("https://csoundc.bandcamp.com/", "_blank");
}, false);
mb05.addEventListener("click", function() {
    window.open("https://twitter.com/c_sc_inforoom", "_blank");
}, false);*/