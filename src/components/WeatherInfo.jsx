import { useState, useEffect } from "react";

function WeatherInfo() {
  const [stations, setStations] = useState([]);
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("https://api.data.gov.sg/v1/environment/air-temperature")
      .then((response) => response.json())
      .then((data) => {
        setStations(data.metadata.stations);
        setReadings(data.items[0].readings);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-[url('./assets/weather.jpg')] bg-cover bg-center ">
      <div className="border border-black rounded bg-white">
        <h2 className="text-3xl text-center font-bold">Weather Data</h2>
        <table className=" w-full text-lg p-4 max-w-4xl border b">
          <thead className="text-2xl border">
            <tr className="border">
              <th className="px-10 py-2 border">Station Name</th>
              <th className="px-10 py-2 border">Latitude</th>
              <th className="px-10 py-2 border">Tempearture</th>
            </tr>
          </thead>
          <tbody className="border">
            {stations.map((station) => {
              const reading = readings.find((r) => r.station_id === station.id);
              return (
                <tr key={station.name} className="text-center">
                  <td className="px-2 py-2 border">{station.name}</td>
                  <td className="px-2 py-2 border">{station.location.latitude}</td>
                  <td className="px-2 py-2 border">{reading ? reading.value : "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherInfo;
