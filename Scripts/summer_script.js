var body = document.body.style;
var card1 = document.getElementById('card1').style;
var card2 = document.getElementById('card2').style;
const stylesArray = [
	[
		'#111111',
		'-webkit-linear-gradient(to right, #111111, #d60000,#ffd914)',
		'linear-gradient(to right, #111111, #d60000,#ffd914)',
		'#ffd914',
		'#ffd914'
	], // Tan
	[
		'#111111',
		'-webkit-linear-gradient(to right, #111111, #d60000, #ffd914)',
		'linear-gradient(to right, #d60000, #d60000, #ffd914',
		'#ffd914',
		'#ffd914'
	], // Canyon
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ], // under_construction
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ], //under_construction 
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ], //under_construction 
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ], //under_construction 
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ], //under_construction 
	[ 'linear-gradient(to right, #111111, #d60000)', '#ffd914', '#ffd914' ] // under_construction
];
function construction() {
	body.background = stylesArray[0][0];
	body.background = stylesArray[0][1];
	body.background = stylesArray[0][2];

	card1.background = stylesArray[0][3];
	card2.background = stylesArray[0][4];
}

function construction() {
	body.background = stylesArray[1][0];
	body.background = stylesArray[1][1];
	body.background = stylesArray[1][2];

	card1.background = stylesArray[1][3];
	card2.background = stylesArray[1][4];
}

function construction() {
	body.background = stylesArray[2][0];

	card1.background = stylesArray[2][1];
	card2.background = stylesArray[2][2];
}
function construction() {
	body.background = stylesArray[3][0];

	card1.background = stylesArray[3][1];
	card2.background = stylesArray[3][2];
}
function construction() {
	body.background = stylesArray[4][0];

	card1.background = stylesArray[4][1];
	card2.background = stylesArray[4][2];
}
function construction() {
	body.background = stylesArray[5][0];

	card1.background = stylesArray[5][1];
	card2.background = stylesArray[5][2];
}
function construction() {
	body.background = stylesArray[6][0];

	card1.background = stylesArray[6][1];
	card2.background = stylesArray[6][2];
}
function construction() {
	body.background = stylesArray[7][0];

	card1.background = stylesArray[7][1];
	card2.background = stylesArray[7][2];
}


var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

