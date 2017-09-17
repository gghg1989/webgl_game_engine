"use strict";

var gGL = null;

var initializeGL = function() {
	var canvas = document.getElementById("GLCanvas");
	var gGL = canvas.getContext("webgl") || 
			canvas.getContext("experimental-webgl");
	if(gGL !== null) {
		gGL.clearColor(0.0, 0.8, 0.0, 1.0);
		gGL.clear(gGL.COLOR_BUFFER_BIT);
	}
	else {
		document.write("<br><b>WebGL is not supported!</b>");
	}
}

var clearCanvas = function() {
}

var doGLDraw = function() {
	initializeGL();
	clearCanvas();
}
