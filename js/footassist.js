// JavaScript Document
var fots = document.getElementById("fots02");

window.onload = function() {
    var dates = new Date();
    var years = dates.getFullYear();
    
    fots.innerHTML = "(C)2013-"+years+" FPOTFK";
};