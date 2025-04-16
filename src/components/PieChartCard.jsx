import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PieChartCard = ({ title, data, colors, sideData }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        <select className="bg-gray-100 px-2 py-1 rounded text-sm">
          <option>Mar 2025</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-around mt-4 text-center">
        {sideData.map((item, index) => (
          <div
            key={index}
            className="p-2 rounded-xl"
            style={{ backgroundColor: item.bgColor, color: item.textColor }}
          >
            <p className="text-lg font-bold">{item.value}%</p>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartCard;
