import {useEffect, useRef, useState} from 'react'
import './App.less'

function App() {
    const canvasRef = useRef(null);
    function setupCanvas(canvas) {
        var dpr = window.devicePixelRatio || 1;
        var rect = canvas.getBoundingClientRect();
        console.log(rect,dpr,'rect')
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
            ctx.arc(187, 75, 50, 0, Math.PI * 2, true); // 绘制
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
