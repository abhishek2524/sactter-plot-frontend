import React from 'react';
import {Scatter} from 'react-chartjs-2';
import { useEffect, useState } from 'react';
const cssStyle = {alignSelf:'center',width:'400px',height:"400px"}

const Tasks = ()=>{
    const [chartData,setChartData] = useState({data:{},options:{}})
    const task = async(taskId)=>{
        const resData = await fetch(`http://localhost:5000/tasks?tasksId=${taskId}`);
        let tempData = await resData.json();
        tempData = tempData.chartData;
        setChartData(tempData);
    }
    useEffect(()=>{
    },[chartData])
    return(
        <>
            <div style={{alignSelf:'center'}}>
                <button className="btn btn-info text-dark m-2" onClick={()=>task(1)}>Task 1</button>
                <button className="btn btn-info text-dark m-2" onClick={()=>task(2)}>Task 2</button>
                <button className="btn btn-info text-dark m-2" onClick={()=>task(3)}>Task 3</button>
                <button className="btn btn-info text-dark m-2" onClick={()=>task(4)}>Task 4</button>
                <button className="btn btn-info text-dark m-2" onClick={()=>task(5)}>Bonus Task</button>
            </div>
            <div style={cssStyle}>
                {
                    Object.keys(chartData.data).length === 0 ? 
                        <p className="text-center">Click On Button To view Chart</p> : 
                        <Scatter data={chartData.data} options={chartData.options}/>
                }
            </div>
        </>
    )
}

export default Tasks;