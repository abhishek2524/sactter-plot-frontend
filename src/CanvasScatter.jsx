import React, { useEffect, useRef } from 'react';

const CanvasScatter = (props)=>{
    const chartRef = useRef();
    useEffect(()=>{
        const ctx = chartRef.current.getContext("2d");
        
        var height = 400;
        var width = 400;

        chartRef.current.height = height;
        chartRef.current.width = width;
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,width,height);

        var xmax = 250000;
        var ymax = 250000;
        var xstepSize = width/xmax;
        var ystepSize = height/ymax;


        var points = props.data;
        points.map((data)=>{
            var xord = data[0]*xstepSize;
            var yord = height - (data[1]*ystepSize);
    
            ctx.fillStyle = data[2];
            ctx.fillRect(xord,yord,8,8);
        })

    })
    return (
        <>
            <div id="main">
                <canvas ref={chartRef} id="myCanvas" style={{border:"1px solid black"}}></canvas>
            </div>
        </>
    )
}

export default CanvasScatter;