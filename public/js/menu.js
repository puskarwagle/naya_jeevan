$(document).ready(function(){
	$('.menu-tab').hide();
	$('#no').hide();
	$('#abul').hide();
	$('#trul').hide();
	$('#AbUL').hide();
	$('#TrUL').hide();
	
  $('#ham').click(function(){
    $('.menu-tab').show(500);
    $('#ham').hide();
    $('#no').show();
  });
  $('#no').click(function(){
    $('.menu-tab').hide(500);
    $('#ham').show();
    $('#no').hide();
  });
  $('.menu-tab a').click(function(){
    $('.menu-tab').hide(500);
    $('#ham').show();
    $('#no').hide();
  });
  $('#aV').click(function(){
    $('#abUl').toggle(400);
  });
  $('#tV').click(function(){
    $('#trUl').toggle(400);
  });
  $('#AbLiA').mouseenter(function(){
    $('#AbUL').show(400);
  });
  $('#AbLiA').mouseleave(function(){
    $('#AbUL').hide(400);
  });
  $('#TrLiA').mouseenter(function(){
    $('#TrUL').show(400);
  });
  $('#TrLiA').mouseleave(function(){
    $('#TrUL').hide(400);
  });
});

