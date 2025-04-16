import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarGraphCard = ({ title, data, sideData, barColor = "#4F46E5" }) => {
  return (
    <div className=" bg-white p-4 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm">
          + Add New
        </button>
      </div>

      {/* Side Data */}
      <div className="flex">
        <div className="flex flex-col gap-2 mb-4">
          {sideData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 rounded-lg shadow-sm"
              style={{ border: `2px solid ${item.color}33` }}
            >
              <span style={{ color: item.color }} className="font-bold text-lg">
                {item.percentage}%
              </span>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraphCard;
