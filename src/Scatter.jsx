import React, { useEffect, useRef } from 'react'
import Chart from "chart.js";

const Scatter = (props)=> {
    const chartRef = useRef();
    useEffect(()=>{
        const ctx = chartRef.current.getContext("2d");
        new Chart(ctx, {
            type: 'scatter',
            data: props.data,
            options: props.options
        });
    })
    return (
        <div>
            <canvas id="plot" ref={chartRef} />
        </div>
    )
}

export default Scatter;