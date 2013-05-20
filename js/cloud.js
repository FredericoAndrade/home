function draw(){
	var ctx = document.getElementById('canvas').getContext('2d'),
			cloudCol = '#444'

	ctx.fillStyle= cloudCol
	ctx.fillRect(26,161,219,48)
	ctx.fillRect(239,138,221,71)
	ctx.fillRect(138,35,166,174)
	ctx.arc(26,183,26,0,Math.PI*2,true)
	ctx.moveTo(154,122)
	ctx.arc(81,121,73,0,Math.PI*2,true)
	ctx.moveTo(199,44)
	ctx.arc(155,44,42,0,Math.PI*2,true)
	ctx.moveTo(233,35)
	ctx.arc(213,35,20,0,Math.PI*2,true)
	ctx.moveTo(408,102)
	ctx.arc(304,105,104,0,Math.PI*2,true)
	ctx.moveTo(443,131)
	ctx.arc(422,131,22,0,Math.PI*2,true)
	ctx.moveTo(500,170)
	ctx.arc(461,170,39,0,Math.PI*2,true)
	ctx.fill()
}

function animate(){
	var cleft = $('body').offset().left,	// body left
			cwidth = $('body').width(),     	// body width
			owidth = $('#canvas').width() 		//canvas(object) width

	//random horizontal pos
	$("#canvas").each(function() {
	   var	dragwidth  = $(this).width(),	// your draggable width
	   			randomleft = cleft + Math.floor((Math.random()* (cwidth - dragwidth))+1)

	   $(this).css({
	     'left': randomleft
	   })
	})

	$("#canvas").animate(
		{"bottom":["+=1800px","linear"]},16000)

}

