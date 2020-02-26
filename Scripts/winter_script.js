var body = document.body.style;
var card1 = document.getElementById('card1').style;
var card2 = document.getElementById('card2').style;
var stylesArray = [
    [
        '#F3904F',
        '-webkit-linear-gradient(to right, #4ca2cd, #67B26F)',
        'linear-gradient(to right, #3B4371, #F3904F)',
        '#3B4371',
        '#F3904F'
    ],
    [
        '#a770ef',
        '-webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
        'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b',
        '#a770ef',
        '#fdb99b'
    ],
    ['linear-gradient(to right, #89253e, #3a6186)', '#89253e', '#3a6186'],
    ['linear-gradient(to right, #734b6d, #42275a)', '#734b6d', '#42275a'],
    ['linear-gradient(to right, #4ca2cd, #67B26F)', '#4ca2cd', '#67B26F'],
    ['linear-gradient(to right, #A59132, #DA7422)', '#A59132', '#DA7422'],
    ['linear-gradient(to right, #a80077, #66ff00)', '#a80077', '#66ff00'],
    ['linear-gradient(to right, #FFD6E0, #C1FBA4)', '#FFD6E0', '#C1FBA4'] // Fall
];
function paradise() {
    body.background = stylesArray[0][0];
    body.background = stylesArray[0][1];
    body.background = stylesArray[0][2];
    card1.background = stylesArray[0][3];
    card2.background = stylesArray[0][4];
}
function radar() {
    body.background = stylesArray[1][0];
    body.background = stylesArray[1][1];
    body.background = stylesArray[1][2];
    card1.background = stylesArray[1][3];
    card2.background = stylesArray[1][4];
}
function love() {
    body.background = stylesArray[2][0];
    card1.background = stylesArray[2][1];
    card2.background = stylesArray[2][2];
}
function muave() {
    body.background = stylesArray[3][0];
    card1.background = stylesArray[3][1];
    card2.background = stylesArray[3][2];
}
function mild() {
    body.background = stylesArray[4][0];
    card1.background = stylesArray[4][1];
    card2.background = stylesArray[4][2];
}
function fall() {
    body.background = stylesArray[5][0];
    card1.background = stylesArray[5][1];
    card2.background = stylesArray[5][2];
}
function summer() {
    body.background = stylesArray[6][0];
    card1.background = stylesArray[6][1];
    card2.background = stylesArray[6][2];
}
function spring() {
    body.background = stylesArray[7][0];
    card1.background = stylesArray[7][1];
    card2.background = stylesArray[7][2];
}


var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);
