"use strict"

let canvas = document.getElementById("GLCanvas")

let gl = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2")

if (!!gl) {
    gl.clearColor(0.0, 0.8, 0.0, 1.0)
    gl.clear(gl.GL_COLOR_BUFFER_BIT)
}

document.write("<br><b>The above is WebGL draw area!</b>")