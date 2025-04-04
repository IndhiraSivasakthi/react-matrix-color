import React, { useState } from "react";
import "./App.css";

function App() {
  const matrixSize = 3;
  const totalBoxes = matrixSize * matrixSize;
  const lastBoxIndex = totalBoxes - 1;

  const [clickedOrder, setClickedOrder] = useState([]);
  const [boxColors, setBoxColors] = useState(Array(totalBoxes).fill("white"));

  const handleClick = (index) => {
    if (index === lastBoxIndex) {
      const newColors = [...boxColors];
      clickedOrder.forEach((i, orderIndex) => {
        setTimeout(() => {
          newColors[i] = "orange";
          setBoxColors([...newColors]);
        }, orderIndex * 300);
      });
    } else {
      if (!clickedOrder.includes(index)) {
        const newColors = [...boxColors];
        newColors[index] = "green";
        setBoxColors(newColors);
        setClickedOrder([...clickedOrder, index]);
      }
    }
  };

  return (
    <div className="App">
      <h2>3x3 Matrix Box</h2>
      <div className="grid-container">
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColors[index] }}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
