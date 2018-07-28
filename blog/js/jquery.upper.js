
$(function(){
$("#Go_Top").removeAttr("href");
if ($(window).scrollTop()>="250") $("#Go_Top").addClass("up")
$(window).scroll(function(){
if ($(window).scrollTop()<="250") $("#Go_Top").removeClass("up")
else $("#Go_Top").addClass("up")
});

$("#Go_Bottom").removeAttr("href");
if ($(window).scrollTop()<=$(document).height()-"999") $("#Go_Bottom").addClass("down")
$(window).scroll(function(){
if ($(window).scrollTop()>=$(document).height()-"999") $("#Go_Bottom").removeClass("down")
else $("#Go_Bottom").addClass("down")
});

$("#Go_Top").click(function(){
$("html, body").animate({scrollTop:0},"slow"); return false;
})
$("#Go_Bottom").click(function(){
$("html, body").animate({scrollTop:$(document).height()},"slow"); return false;
})
});
