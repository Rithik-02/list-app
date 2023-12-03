import React, { useState } from "react";

export default function () {
  const [selectedColor, setSelectedColor] = useState("#ff5733"); // Default

  return (
    <div>
      {/* <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      /> */}
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="#ff5733">Red</option>
        <option value="#33ff57">Green</option>
        <option value="#3357ff">Blue</option>
      </select>
      <div
        className="listItem"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </div>
  );
}
