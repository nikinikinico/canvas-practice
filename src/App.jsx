import {useEffect, useRef, useState} from 'react'
import './App.less'

function App() {
    const canvasRef = useRef(null);
    let z =    1
    function setupCanvas(canvas) {
        var dpr = window.devicePixelRatio || 1;
        var rect = canvas.getBoundingClientRect();
        z=screen.width/375
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
    }
    function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.arc(187*z, 75*z, 50*z, 0, Math.PI * 2, true); // 绘制
            ctx.stroke();
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            setupCanvas(canvasRef.current);
        }
        draw()
    }, []);
  return (
    <>
     <canvas ref={canvasRef} id='canvas' style={{width:'100vw',height:'100vw'}}></canvas>
    </>
  )
}

export default App
