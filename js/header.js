function headLinks(){
$('#parsonsbutton').click(function(){
  $("#clients").stop(true,false).slideUp(200);
  $("#portfolio").stop(true,false).slideUp(200);
  $('#contact').stop(true,false).slideUp(200);
  $("#parsons").slideToggle(200);
});
//TOGGLE parsons

$('#clientsbutton').click(function(){
  $('#parsons').stop(true,false).slideUp(200);
  $('#portfolio').stop(true,false).slideUp(200);
  $('#contact').stop(true,false).slideUp(200);
  $("#clients").slideToggle(200);
});
//TOGGLE clients

// $('#portfoliobutton').click(function(){
//   $("#clients").stop(true,false).slideUp(200);
//   $("#parsons").stop(true,false).slideUp(200);
//   $('#contact').stop(true,false).slideUp(200);
//   $("#portfolio").slideToggle(200);
//});

$('#portfolio').click(function(){
  $("#portfolio").slideUp(200);
});
//TOGGLE parsons

$('.contactbutton').click(function(){
  $("#spacer").fadeIn(200);
  $("#contact").slideToggle(200);
})

$('#contactbutton').click(function(){
  $("#spacer").fadeIn(200);
  $("#parsons").stop(true,false).slideUp(200);
  $("#clients").stop(true,false).slideUp(200);
  $("#portfolio").stop(true,false).slideUp(200);
  $("#contact").slideToggle(200);
});

$("#spacer").click(function(){
  $("#contact").slideUp(200);
  $("#spacer").fadeOut(200);
});
//TOGGLE contact
}