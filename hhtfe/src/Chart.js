import React, { useState, useEffect } from "react"
import sampleData from './sensor_data.csv'
import Papa from 'papaparse';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend
)

const Chart = () => {
    const [fileContent, setFileContent] = useState('');
    const [chartData, setChartData] = useState({datasets: []});
    const [chartOptions, setChartOptions] = useState({});


    console.log('Chart component loaded')
    const handleFileChange = (event) => {
      console.log(sampleData, 'sampleData')
        const file = event?.target?.files?.[0];
        console.log(file, 'file')
        
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            Papa.parse(file, {
              download: true,
              header: true,
              dynamicTyping: true,
              delimiter: "",
              complete: ((result) => {
                setChartData({
                  labels: result.data.map((i) => i['Time']),
                  datasets: [
                    {
                      label : 'test',
                      data: result.data.map((i) => i['Temperature']),
                      backgroundColor: 'red',
                      borderColor: 'black'
                    }
                  ]
                });
                setChartOptions({
                  responsive: true,
                  plugins:{
                    legend: {
                      position: 'top'
                    }
                  },
                  title: {
                    display:'true',
                    text: 'sample check'
                  }
                })
              })
            })
            const content = e.target.result;
            setFileContent(content);
          };
    
          reader.readAsText(file);
        }
    
      }

     

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <div>
                <strong>File Content:</strong>
                {/* <pre>{fileContent}</pre> */}
            </div>

            {fileContent && (
                <div>
                <Line
                    data={chartData}
                    options={chartOptions}
                />
                </div>
            )}
        </div>

    )
}

export default Chart
