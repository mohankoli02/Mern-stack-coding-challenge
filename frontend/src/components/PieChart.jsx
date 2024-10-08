import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const PieChartComponent = ({ data }) => {
  const pieData = Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6F61', '#6A5ACD'];

  return (
    <div className="pie-chart">
      <h2>Category Distribution</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} items`, name]} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
