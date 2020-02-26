var body = document.body.style;
var card1 = document.getElementById('card1').style;
var card2 = document.getElementById('card2').style;
const stylesArray = [
	[
		'#C2C290',
		'-webkit-linear-gradient(to right, #C2C290, #E87F60,#803018)',
		'linear-gradient(to right, #C2C290, #E87F60,#803018)',
		'#C2C290',
		'#803018'
	], // Tan
	[
		'#6E352C',
		'-webkit-linear-gradient(to right, #6E352C, #8A6E64, #6E612F)',
		'linear-gradient(to right, #6E352C, #8A6E64, #6E612F',
		'#6E352C',
		'#6E612F'
	], // Canyon
	[ 'linear-gradient(to right, #694364, #B58BAB)', ' #B0703C', '#CCA772' ], // Mineral
	[ 'linear-gradient(to right, #472C25, #D4C2B2)', '#EB712F', '#91371B' ], // Spiced
	[ 'linear-gradient(to right, #D1CEC5, #997C67)', '#DBA72E', '#E3CCA1' ], // Autumn
	[ 'linear-gradient(to right, #BC8F8F, #F4A460)', '#911e32', '#530d18' ], // Leaf
	[ 'linear-gradient(to right, #D9D9D9, #F5B3B4)', '#D15656', '#94353C' ], // Fresh
	[ 'linear-gradient(to right, #472C25, #B8997F)', '#D94330', '#5C0811' ] // Chili
];
function tan() {
	body.background = stylesArray[0][0];
	body.background = stylesArray[0][1];
	body.background = stylesArray[0][2];

	card1.background = stylesArray[0][3];
	card2.background = stylesArray[0][4];
}

function canyon() {
	body.background = stylesArray[1][0];
	body.background = stylesArray[1][1];
	body.background = stylesArray[1][2];

	card1.background = stylesArray[1][3];
	card2.background = stylesArray[1][4];
}

function mineral() {
	body.background = stylesArray[2][0];

	card1.background = stylesArray[2][1];
	card2.background = stylesArray[2][2];
}
function spiced() {
	body.background = stylesArray[3][0];

	card1.background = stylesArray[3][1];
	card2.background = stylesArray[3][2];
}
function autumn() {
	body.background = stylesArray[4][0];

	card1.background = stylesArray[4][1];
	card2.background = stylesArray[4][2];
}
function leaf() {
	body.background = stylesArray[5][0];

	card1.background = stylesArray[5][1];
	card2.background = stylesArray[5][2];
}
function fresh() {
	body.background = stylesArray[6][0];

	card1.background = stylesArray[6][1];
	card2.background = stylesArray[6][2];
}
function chili() {
	body.background = stylesArray[7][0];

	card1.background = stylesArray[7][1];
	card2.background = stylesArray[7][2];
}


var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

