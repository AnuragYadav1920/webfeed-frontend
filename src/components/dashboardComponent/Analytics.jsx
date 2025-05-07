import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./analytics.css"

const Analytics = () => {
  const data = [
    { name: 'April 1', views: 400 },
    { name: 'April 2', views: 300 },
    { name: 'April 3', views: 500 },
    { name: 'April 4', views: 200 },
    { name: 'April 5', views: 700 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="views" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
