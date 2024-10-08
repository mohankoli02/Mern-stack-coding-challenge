import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ data }) => {
  const barData = Object.keys(data).map((key) => ({
    range: key,
    count: data[key],
  }));

  return (
    <div className="bar-chart">
      <h2>Price Range Distribution</h2>
      <BarChart width={600} height={300} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
