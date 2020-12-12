var c
var d
var e
var f
var g
var a
var b
var c2
let volume = 50

function update() {
	volume = document.getElementById('volume-slider').value;
	document.getElementById('volume-label').innerText = volume;
}

function mouseClick(el = document.getElementById('c'), x, y){
	var event = new MouseEvent('mousedown', {
    'view': window,
    'bubbles': true,
    'cancelable': true,
    'screenX': x,
    'screenY': y
	});
	el.dispatchEvent(event)
}

window.onkeydown = function(test) {
	if(test.keyCode === 65) {
		c = new Audio('resources/sound/xylo-C.mp3');
		c.volume = volume / 100
		c.play();
		mouseClick(document.getElementById('c'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#0077ff')
	}
	else if(test.keyCode === 83) {
		d = new Audio('resources/sound/xylo-D.mp3');
		d.volume = volume / 100
		d.play()
		mouseClick(document.getElementById('d'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#00ff73')
	}
	else if(test.keyCode === 68) {
		e = new Audio('resources/sound/xylo-E.mp3');
		e.volume = volume / 100
		e.play()
		mouseClick(document.getElementById('e'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#ffe23c')
	}
	else if(test.keyCode === 70) {
		f = new Audio('resources/sound/xylo-F.mp3');
		f.volume = volume / 100
		f.play()
		mouseClick(document.getElementById('f'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#ff7300')
	}
	else if(test.keyCode === 71) {
		g = new Audio('resources/sound/xylo-G.mp3');
		g.volume = volume / 100
		g.play()
		mouseClick(document.getElementById('g'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#ff2828')
	}
	else if(test.keyCode === 72) {
		a = new Audio('resources/sound/xylo-A.mp3');
		a.volume = volume / 100
		a.play()
		mouseClick(document.getElementById('a'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#8c28ff')
	}
	else if(test.keyCode === 74) {
		b = new Audio('resources/sound/xylo-B.mp3');
		b.volume = volume / 100
		b.play()
		mouseClick(document.getElementById('b'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#191919')
	}
	else if(test.keyCode === 75) {
		c2 = new Audio('resources/sound/xylo-C2.mp3');
		c2.volume = volume / 100
		c2.play()
		mouseClick(document.getElementById('c2'), 15, 15)
		document.getElementById('theme').setAttribute('content', '#0077ff')
	}
}