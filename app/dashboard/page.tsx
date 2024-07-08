"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavHeader from '@/app/_components/NavHeader';
import api from '@/app/api'
// Define the interface for the data item
interface DataItem {
  bottle_number: string;
  date: string;
  time: string;
}

// Define the interface for the Dashboard component props
interface DashboardProps {}

// Dashboard component
function Dashboard(props: DashboardProps) {
  // State for storing data and loading state
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to fetch data from the backend API
  useEffect(() => {
    // Fetch data from the backend API using Axios
    api.get<DataItem[]>('/get_all')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  // JSX structure for rendering the Dashboard component
  return (
    <main className="bg-background h-full">
      <NavHeader />
      <div className="container mx-auto mt-8 text-white font-bold text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full border-collapse border-2 border-white">
            <thead>
              <tr>
                <th className="border border-white p-2">Bottle Number</th>
                <th className="border border-white p-2">Date</th>
                <th className="border border-white p-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-white p-2">{item.bottle_number}</td>
                  <td className="border border-white p-2">{item.date}</td>
                  <td className="border border-white p-2">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

// Export the App component as the default export
export default App;
