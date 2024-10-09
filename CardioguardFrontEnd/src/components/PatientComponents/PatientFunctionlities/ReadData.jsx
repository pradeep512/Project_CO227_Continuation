import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const ReadData = () => {
  // Chart Data for trends
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Blood Pressure',
        data: [120, 130, 135, 125, 140],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Serum Creatinine',
        data: [1, 1.1, 1.2, 1.3, 1.5],
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Patient Clinical Data Overview</h1>

      {/* Section 1: Clinical Data with Images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ margin: '10px', textAlign: 'center' }}>
          <img src="/path-to-heart-icon.png" alt="Heart Disease" width="60" />
          <p><strong>Diagnosis of Heart Disease:</strong> Yes</p>
        </div>
        <div style={{ margin: '10px', textAlign: 'center' }}>
          <img src="/path-to-anemia-icon.png" alt="Anemia" width="60" />
          <p><strong>Presence of Anemia:</strong> No</p>
        </div>
        <div style={{ margin: '10px', textAlign: 'center' }}>
          <img src="/path-to-diabetes-icon.png" alt="Diabetes" width="60" />
          <p><strong>Diabetes:</strong> Yes</p>
        </div>
        {/* Add more data fields with images as needed */}
      </div>

      {/* Section 2: Table with Critical Ranges */}
      <h2>Clinical Marker Ranges</h2>
      <table border="1" style={{ width: '100%', marginBottom: '40px', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Clinical Marker</th>
            <th>Normal Range</th>
            <th>Elevated Range</th>
            <th>Critical Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blood Pressure</td>
            <td>90-120</td>
            <td>121-139</td>
            <td>&gt; 140</td>
          </tr>
          <tr>
            <td>Serum Creatinine (mg/dL)</td>
            <td>0.6-1.2</td>
            <td>1.3-1.5</td>
            <td>&gt; 1.5</td>
          </tr>
          <tr>
            <td>Platelets</td>
            <td>150,000-450,000</td>
            <td>450,000-500,000</td>
            <td>&gt; 500,000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {/* Section 3: Graph showing Trends */}
      <h2>Clinical Data Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ReadData;
