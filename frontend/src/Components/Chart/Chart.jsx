import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis ,
    Tooltip,
    Area,
    AreaChart,
    
    
  
  }from 'recharts'
export default function Chart({chartData,dataKey,grid}) {
  return (
    <div className='mt-[80px] p-2'>
    <ResponsiveContainer width="100%" aspect={4}>
            <AreaChart data={chartData}>
                <Area type="monotone" dataKey={dataKey} stroke='#8884d8'fill='#5e9bcb' />
                <XAxis dataKey="title" stroke='#5550bd'/>
                <YAxis />
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </AreaChart>

        </ResponsiveContainer>
    </div>
  );
}
