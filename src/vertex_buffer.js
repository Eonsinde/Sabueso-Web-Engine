"use strict"
import * as core from "./core.js"

let mSquareVertices = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
]

let mGlVertexBuffer = null

function get() { return mGlVertexBuffer }

function init() {
    let gl = core.getGL()

    mGlVertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, mGlVertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mSquareVertices), gl.STATIC_DRAW)
}

export { get, init }