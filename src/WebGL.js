
var canvas = document.getElementById("GLCanvas");
var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

if(gl !== null) {
	gl.clearColor(0.0, 0.8, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}