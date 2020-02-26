"use strict";

function pink(){
	document.getElementsByTagName("html").style.backgroundColor = "linear-gradient(#FBC4AB to #FFDAB9);"
}

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);
