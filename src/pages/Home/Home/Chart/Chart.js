import { Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const data01 = [
    { name: 'Eco Meterials', value: 400 },
    { name: 'Solar Energy', value: 300 },
    { name: 'Furniture', value: 300 },
    { name: 'Water Supply', value: 250 },
    { name: 'CCTV Replay', value: 300 },
    { name: 'Interior Design', value: 200 },
];

// const data02 = [
//     { name: 'Group A', value: 2400 },
//     { name: 'Group B', value: 4567 },
//     { name: 'Group C', value: 1398 },
//     { name: 'Group D', value: 9800 },
//     { name: 'Group E', value: 3908 },
//     { name: 'Group F', value: 4800 },
// ];

const data = [
    {
        name: 'Eco Materials',
        Lose: 590,
        Profite: 800,
        Invesment: 1400,
    },
    {
        name: 'Solar Energy',
        Lose: 868,
        Profite: 967,
        Invesment: 1506,
    },
    {
        name: 'Furniture',
        Lose: 1397,
        Profite: 1098,
        Invesment: 989,
    },
    {
        name: 'Water Supply',
        Lose: 1480,
        Profite: 1200,
        Invesment: 1228,
    },
    {
        name: 'CCTV Replay',
        Lose: 1520,
        Profite: 1108,
        Invesment: 1100,
    },
    {
        name: 'Interior Design',
        Lose: 1400,
        Profite: 680,
        Invesment: 1700,
    },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const Chart = () => {
    // static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

    return (
        <Container style={{ marginTop: '150px', marginBottom: '150px' }} >
            <h1 style={{ color: '#574437',fontWeight:'700'}} > OUR SELLS </h1><hr />
            <Grid container spacing={2} sx={{ my: 3 }} >
                <Grid item md={8} xs={12} >
                    <h3 style={{ color: '#574437' }} > Our investment </h3>
                    <div className='mx-auto' style={{ width: '100%', height: 450 }}>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="Invesment" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="Profite" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="Lose" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} >
                    {/* <h3 style={{ color: '#574437' }} > Our Profite </h3> */}
                    <div style={{ width: "100%", height: "100%" }} >
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data01}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chart;
