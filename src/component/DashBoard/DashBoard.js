import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart,Legend,Bar,Pie,PieChart } from 'recharts';
const DashBoard = () => {
    const data = [
        {
            "month": "jan",
            "investment":700000,
            "sell": 900000,
            "revenue": 303060
        },
        {
            "month": "fab",
            "investment":700000,
            "sell": 1000000,
            "revenue": 410470
        },
        {
            "month": "Mar",
            "investment":700000,
            "sell": 1300000,
            "revenue": 520800
        },
        {
            "month": "Apr",
            "investment":800000,
            "sell": 1600000,
            "revenue": 630280
        },
        {
            "month": "May",
            "investment":700000,
            "sell": 1350000,
            "revenue": 467000
        },
        {
            "month": "Jun",
            "investment":1200000,
            "sell": 1800000,
            "revenue": 710270
        },
        {
            "month": "Jul",
            "investment":800000,
            "sell": 1530000,
            "revenue": 480200
        },
        {
            "month": "Aug",
            "investment":100000,
            "sell": 1700000,
            "revenue": 570000
        }
    ]
    return (
          <div>
             <div className='d-flex mt-5 mb-5 justify-content-evenly'>
              <div>
                <h4 className="textstyle">Month wise sell</h4>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                 <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                 <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                </LineChart>
           </div>
           <div>
             <h4 className='textstyle'>Sell vs revenue</h4>
              <AreaChart width={730} height={250} data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
           </div>
             </div>
             <div className="d-flex mt-5 justify-content-evenly">
                <div>
                <h4 className='textstyle'>Invesment vs revenue</h4>
                <BarChart width={730} height={250} data={data}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="month" />
                   <YAxis />
                   <Tooltip />
                   <Legend />
                   <Bar dataKey="investment" fill="#8884d8" />
                   <Bar dataKey="revenue" fill="#82ca9d" />
                 </BarChart>
                </div>
                <div>
                <h4 className='textstyle'>Invesment vs revenue</h4>
                <PieChart width={730} height={250}>
                   <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                   <Pie data={data} dataKey="revenue" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                 </PieChart>
                </div>
             </div>
          </div>
    );  
};

export default DashBoard;