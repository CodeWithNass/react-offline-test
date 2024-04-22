import React, { useState, useEffect } from "react";
import EnergyMixChart from "./components/EnergyMixChart";
import { getEnergyData } from "./services/energyService";
import "./app.css";

function App() {
  const [energyData, setEnergyData] = useState(null);

  useEffect(() => {
    fetchEnergyData();
  }, []);

  const fetchEnergyData = async () => {
    try {
      const data = await getEnergyData();
      setEnergyData(data);
    } catch (error) {
      console.error("Error fetching energy data:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-header">UK Energy Generation</h1>
      </header>
      <main className="app-chart">
        {energyData ? (
          <EnergyMixChart data={energyData} />
        ) : (
          <h3>No data to display...</h3>
        )}
      </main>
    </div>
  );
}

export default App;
