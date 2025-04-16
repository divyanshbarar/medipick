import React, { useState } from "react";
import imgph from "../assets/imgph.png";
import BarGraphCard from "../components/BarGraphCard";
import PieChartCard from "../components/PieChartCard";

/**
 * Dashboard component displaying hospital/medical facility information,
 * metrics, and equipment status.
 */
function Dashboard() {
  // Data for the Services bar graph
  const servicesData = {
    barData: [
      { name: "02:00", value: 12 },
      { name: "04:00", value: 18 },
      { name: "06:00", value: 10 },
      { name: "11:00", value: 16 },
      { name: "14:00", value: 9 },
      { name: "17:00", value: 21 },
      { name: "20:00", value: 14 },
    ],
    sideData: [
      { percentage: 48, label: "Open", color: "#10B981" },
      { percentage: 36, label: "Closed", color: "#EF4444" },
      { percentage: 45, label: "Eyeservice", color: "#3B82F6" },
    ],
  };

  // Data for the Calibration Status pie chart
  const calibrationData = {
    pieData: [
      { name: "Calibrated", value: 45 },
      { name: "Not Calibrated", value: 35 },
      { name: "Not Required", value: 20 },
    ],
    pieColors: ["#3B82F6", "#F87171", "#9CA3AF"],
    sideData: [
      {
        value: 45,
        label: "Calibrated",
        bgColor: "#DBEAFE",
        textColor: "#3B82F6",
      },
      {
        value: 35,
        label: "Not Calibrated",
        bgColor: "#FECACA",
        textColor: "#EF4444",
      },
      {
        value: 20,
        label: "Not Required",
        bgColor: "#E5E7EB",
        textColor: "#374151",
      },
    ],
  };

  // Data for the Incidents bar graph
  const incidentsData = {
    barData: [
      { name: "02:00", value: 12 },
      { name: "04:00", value: 18 },
      { name: "06:00", value: 10 },
      { name: "11:00", value: 16 },
      { name: "14:00", value: 9 },
      { name: "17:00", value: 21 },
      { name: "20:00", value: 14 },
    ],
    sideData: [
      { percentage: 40, label: "Open", color: "#10B981" },
      { percentage: 50, label: "Closed", color: "#EF4444" },
      { percentage: 45, label: "Eyeservice", color: "#3B82F6" },
    ],
  };

  // Data for the Warranty Status pie chart
  const warrantyData = {
    pieData: [
      { name: "Total", value: 45 },
      { name: "Expires Soon", value: 35 },
      { name: "Requested", value: 20 },
    ],
    pieColors: ["#FBBF24", "#A78BFA", "#34D399"],
    sideData: [
      {
        value: 45,
        label: "Total",
        bgColor: "#FFFBEB",
        textColor: "#FBBF24",
      },
      {
        value: 35,
        label: "Expiry Soon",
        bgColor: "#FAF5FF",
        textColor: "#A78BFA",
      },
      {
        value: 20,
        label: "Requested",
        bgColor: "#ECFDF5",
        textColor: "#34D399",
      },
    ],
  };

  // Assets that need attention
  const [assets, setAssets] = useState([
    {
      id: 1,
      code: "MED-1234",
      department: "Cardiology",
      service: "Maintenance",
      status: "Urgent",
    },
    {
      id: 2,
      code: "MED-2356",
      department: "Radiology",
      service: "Repair",
      status: "High",
    },
    {
      id: 3,
      code: "MED-7890",
      department: "Laboratory",
      service: "Calibration",
      status: "Medium",
    },
    {
      id: 4,
      code: "MED-4567",
      department: "Emergency",
      service: "Replacement",
      status: "Low",
    },
  ]);

  // Returns the appropriate color class based on status priority
  const getStatusColor = (status) => {
    const statusColors = {
      Urgent: "text-red-600",
      High: "text-orange-500",
      Medium: "text-yellow-500",
      Low: "text-green-500",
    };
    return statusColors[status] || "text-gray-500";
  };

  // Summary card data
  const summaryCards = [
    { title: "Assets", value: 487, bgColor: "bg-blue-100" },
    { title: "Not Working", value: 24, bgColor: "bg-red-100" },
    { title: "Discarded", value: 18, bgColor: "bg-orange-100" },
    { title: "Department", value: 12, bgColor: "bg-green-100" },
  ];

  // Client metrics data
  const clientMetrics = [
    { label: "Performance", value: "98.5%", color: "text-blue-600" },
    { label: "Satisfaction", value: "4.8/5", color: "text-green-500" },
    { label: "Asset Utilization", value: "95.3%", color: "text-purple-500" },
  ];

  // Asset stats data
  const assetStats = [
    { label: "Assets", value: "487" },
    { label: "Services", value: "24" },
    { label: "Uptime", value: "99.9%" },
  ];

  // Profile circles for user asset tracking
  const profileCircles = [
    { color: "pink" },
    { color: "yellow" },
    { color: "green" },
    { color: "blue" },
    { color: "indigo" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Navigation Bar */}
      <TopNavigationBar />

      {/* Client Information Card */}
      <div className="space-y-6 p-4">
        <ClientInfoCard metrics={clientMetrics} stats={assetStats} />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {summaryCards.map((card, i) => (
            <SummaryCard
              key={i}
              title={card.title}
              value={card.value}
              bgColor={card.bgColor}
              iconSrc={imgph}
            />
          ))}
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Cumulative Downtime Card */}
          <DowntimeCard />

          {/* User Asset Tracking Card */}
          <AssetTrackingCard profileCircles={profileCircles} />

          {/* Placeholder Card */}
          <PlaceholderCard />
        </div>

        {/* Charts - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarGraphCard
            title="Services"
            data={servicesData.barData}
            sideData={servicesData.sideData}
            barColor="#4F46E5"
          />
          <PieChartCard
            title="Calibration Status"
            data={calibrationData.pieData}
            colors={calibrationData.pieColors}
            sideData={calibrationData.sideData}
          />
        </div>

        {/* Charts - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarGraphCard
            title="Incidents"
            data={incidentsData.barData}
            sideData={incidentsData.sideData}
            barColor="#4F46E5"
          />
          <PieChartCard
            title="Warranty Status"
            data={warrantyData.pieData}
            colors={warrantyData.pieColors}
            sideData={warrantyData.sideData}
          />
        </div>

        {/* Need Attention Table */}
        <NeedAttentionTable assets={assets} getStatusColor={getStatusColor} />
      </div>
    </div>
  );
}

/**
 * Top navigation bar component with filters and profile options
 */
function TopNavigationBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <div className="flex justify-between items-center shadow-md rounded-full">
          <button className="bg-blue-100 px-4 py-2 rounded-full">B</button>
          <p className="text-sm px-2">Non bio medical</p>
        </div>
        <select className="border px-4 py-2 shadow-md rounded-full">
          <option>Vijayanagar</option>
        </select>
        <div className="flex gap-2 items-center">
          <button className="w-8 h-8 bg-gray-200 rounded-full">
            <img src={imgph} alt="User" />
          </button>
          <button className="w-8 h-8 bg-gray-200 rounded-full">
            <img src={imgph} alt="Notification" />
          </button>
          <button className="w-8 h-8 bg-gray-800 text-white rounded-full">
            A
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Client information card with metrics and stats
 */
function ClientInfoCard({ metrics, stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2 bg-white p-4 rounded-2xl shadow-sm">
        <div className="flex justify-between">
          {/* Client Details */}
          <div>
            <div className="flex justify-between gap-4 items-center">
              <img
                src={imgph}
                alt="Hospital logo"
                className="w-12 h-12 bg-gray-100 rounded-md"
              />
              <h2 className="font-bold text-lg">
                City General Hospital{" "}
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full ml-2">
                  Active Client
                </span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Online • Last updated 2 mins ago
            </p>
            <h1 className="text-2xl font-bold mt-2">₹2,50,00,000</h1>
          </div>

          {/* Metrics */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white shadow p-2 rounded-md">
                  <p className="text-xs text-gray-500">{metric.label}</p>
                  <h3 className={`font-bold text-lg ${metric.color}`}>
                    {metric.value}
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex gap-8 mt-3">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <h3 className="font-bold">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Report and Card */}
          <div className="flex flex-col">
            <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 rounded-lg mb-4">
              + Generate Report
            </button>
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-2xl p-4 flex justify-center items-center shadow-sm">
              <p>
                XXXXXXXXXX <br />
                XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Summary card component for displaying stats
 */
function SummaryCard({ title, value, bgColor, iconSrc }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full mr-4 ${bgColor}`}
      >
        <img src={iconSrc} alt={`${title} icon`} className="w-6 h-6" />
      </div>
      <div className="text-left">
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

/**
 * Downtime information card
 */
function DowntimeCard() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-full mr-4">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div>
          <h3 className="font-semibold">Cumulative</h3>
          <h3 className="font-semibold text-sm">Downtime</h3>
          <p className="text-gray-500 text-xs mt-1">
            Time wasted due to downtime
          </p>
          <p className="text-xl font-bold mt-1">17:45:30</p>
        </div>
      </div>
      <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
    </div>
  );
}

/**
 * Asset tracking card with user profiles
 */
function AssetTrackingCard({ profileCircles }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
      <div>
        <div className="flex items-center mb-2">
          <img src={imgph} alt="Tracking Icon" className="w-6 h-6 mr-2" />
          <h3 className="font-semibold mr-2">User Asset Tracking 2.0</h3>
          <span className="text-xs bg-blue-100 text-blue-500 px-2 py-0.5 rounded-full">
            New
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2">
          Update tracking for monitoring and maintenance
        </p>
        <div className="flex items-center gap-1">
          {profileCircles.map((circle, index) => (
            <span
              key={index}
              className={`w-6 h-6 rounded-full bg-${circle.color}-100 border-2`}
            ></span>
          ))}
          <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
            +3
          </span>
        </div>
      </div>
      <button className="bg-gradient-to-r from-blue-700 to-blue-900 flex items-center bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm shadow">
        Learn More <span className="ml-2">→</span>
      </button>
    </div>
  );
}

/**
 * Placeholder card component
 */
function PlaceholderCard() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <img src={imgph} alt="Icon" className="w-6 h-6 mr-2" />
        <p className="font-semibold">XXXXXXXXXXXXXXXX</p>
      </div>
      <div className="text-gray-400 text-xl cursor-pointer">⋮</div>
    </div>
  );
}

/**
 * Need Attention table component displaying assets requiring attention
 */
function NeedAttentionTable({ assets, getStatusColor }) {
  return (
    <div className="p-8 bg-white shadow rounded-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Need Attention</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-1">
          <span>Add New</span>
          <span className="text-lg">+</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 text-sm font-medium text-gray-500 text-left">
                Asset Code
              </th>
              <th className="pb-2 text-sm font-medium text-gray-500 text-left">
                Department
              </th>
              <th className="pb-2 text-sm font-medium text-gray-500 text-left">
                Service
              </th>
              <th className="pb-2 text-sm font-medium text-gray-500 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-gray-200">
                <td className="py-4 text-sm font-medium text-gray-900">
                  {asset.code}
                </td>
                <td className="py-4 text-sm text-gray-700">
                  {asset.department}
                </td>
                <td className="py-4 text-sm text-gray-700">{asset.service}</td>
                <td
                  className={`py-4 text-sm font-medium ${getStatusColor(
                    asset.status
                  )}`}
                >
                  {asset.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Decorative dotted line with icon */}
      <div className="relative my-6">
        <div className="border-t border-dotted border-gray-300"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
            ×
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
