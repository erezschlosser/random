import { useState } from "react";

const SplineAPITest = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const updateSplineVariable = async (number) => {
    try {
      const response = await fetch("https://hooks.spline.design/hAByFy9zigc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "GmxmlTtr8FBIcMikwj4UBOoey9R1KSzY5W7nS5LNBQc",
          "Accept": "application/json",
        },
        body: JSON.stringify({ "Number": number }),
      });

      if (response.ok) {
        console.log(`Updated Spline variable to: ${number}`);
      } else {
        console.error("Failed to update Spline", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Test Spline API</h2>
      <select
        value={selectedNumber}
        onChange={(e) => {
          const newNumber = parseInt(e.target.value);
          setSelectedNumber(newNumber);
          updateSplineVariable(newNumber);
        }}
      >
        <option value="0">100</option>
        <option value="10">250</option>
        <option value="20">400</option>
        <option value="30">700</option>
      </select>
    </div>
  );
};

export default SplineAPITest;