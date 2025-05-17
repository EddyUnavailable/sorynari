"use client";

import React, { useState } from "react";

export default function SpaceTravelCalculator() {
  const [maxG, setMaxG] = useState(3); // g's
  const [maxSpeed, setMaxSpeed] = useState(10000000); // km/h
  const [distance, setDistance] = useState(628000000); // km

  // Constants
  const G_IN_M_S2 = 9.81;

  // Calculation function
  const calculateTimes = () => {
    const a = maxG * G_IN_M_S2; // acceleration in m/s^2
    const vMax = (maxSpeed * 1000) / 3600; // convert km/h to m/s
    const d = distance * 1e3; // convert km to m

    // Time to accelerate to max speed
    const tAcc = vMax / a; // seconds
    // Distance covered during acceleration
    const dAcc = 0.5 * a * tAcc * tAcc; // meters

    // Deceleration same as acceleration
    const tDec = tAcc;
    const dDec = dAcc;

    // Check if distance is enough to reach max speed
    if (d < dAcc + dDec) {
      // Can't reach max speed, calculate peak velocity reached
      // Using formula for distance covered during acceleration and deceleration phases combined:
      // d = a * t^2 => t = sqrt(d / a)
      const tPeak = Math.sqrt(d / a);
      const totalTime = 2 * tPeak; // accelerate then decelerate
      return {
        tAcc: tPeak,
        tDec: tPeak,
        tCruise: 0,
        totalTime,
      };
    }

    // Distance at max speed cruising
    const dCruise = d - dAcc - dDec;
    const tCruise = dCruise / vMax;

    const totalTime = tAcc + tCruise + tDec;

    return { tAcc, tDec, tCruise, totalTime };
  };

  // Convert seconds to hours and minutes nicely
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const { tAcc, tDec, tCruise, totalTime } = calculateTimes();

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Space Travel Time Calculator</h1>
      <p>Calculate acceleration, cruising, deceleration, and total travel time.</p>

      <label>
        Max G-force (g):
        <input
          type="number"
          step="0.1"
          value={maxG}
          onChange={(e) => setMaxG(parseFloat(e.target.value) || 0)}
          style={{ marginLeft: 8, width: 100 }}
        />
      </label>
      <br />
      <label>
        Max Speed (km/h):
        <input
          type="number"
          step="1000"
          value={maxSpeed}
          onChange={(e) => setMaxSpeed(parseFloat(e.target.value) || 0)}
          style={{ marginLeft: 8, width: 150 }}
        />
      </label>
      <br />
      <label>
        Distance (million km):
        <input
          type="number"
          step="1"
          value={distance / 1e6}
          onChange={(e) => setDistance((parseFloat(e.target.value) || 0) * 1e6)}
          style={{ marginLeft: 8, width: 150 }}
        />
      </label>

      <hr />

      <h2>Results:</h2>
      <p>
        <strong>Acceleration time:</strong> {formatTime(tAcc)}
      </p>
      <p>
        <strong>Deceleration time:</strong> {formatTime(tDec)}
      </p>
      <p>
        <strong>Cruising time:</strong> {formatTime(tCruise)}
      </p>
      <p>
        <strong>Total travel time:</strong> {formatTime(totalTime)}
      </p>
    </div>
  );
}
