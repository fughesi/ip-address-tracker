import React, { useState, useEffect } from "react";
import "./Coordinates.css";

export default function Coordinates() {
  // state variables
  const [IP, setIP] = useState("Loading...");
  const [location, setLocation] = useState("Loading...");
  const [timezone, setTimezone] = useState("Loading...");
  const [ISP, setISP] = useState("Loading...");

  //API call
  useEffect(() => {
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_wqE4QzgMbHPp0sxYo8gSNrE0JbDvX"
    )
      .then((res) => res.json())
      .then((data) => {
        setIP(data.ip);
        setLocation([
          data.location.region,
          data.location.country,
          data.location.postalCode,
        ]);
        setTimezone(data.location.timezone);
        setISP(data.isp);
      });
  }, []);

  return (
    <main id="coordinateMain">
      <div className="IP">
        <p>IP ADDRESS</p>
        <h3>{IP}</h3>
      </div>
      <div className="location">
        <p>LOCATION</p>
        <h3>{`${location[0]}, ${location[1]} ${location[2]}`}</h3>
      </div>
      <div className="timezone">
        <p>TIMEZONE</p>
        <h3>{`UTC ${timezone}`}</h3>
      </div>
      <div className="ISP">
        <p>ISP</p>
        <h3>{ISP}</h3>
      </div>
    </main>
  );
}
