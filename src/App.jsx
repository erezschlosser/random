// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { Box } from "./box";
import SearchPage from "./searchPage";

function App() {
  const [boxCount, setBoxCount] = useState(5); // Initial count for the first container
  const [filteredBoxCount, setFilteredBoxCount] = useState(3); // Initial count for the filtered container

  const addBox = () => setBoxCount((prev) => prev + 1);
  const removeBox = () => setBoxCount((prev) => Math.max(0, prev - 1));

  const setFilter = (count) => setFilteredBoxCount(count);

  return (
    <>
      <h1>Box Playground</h1>

      {/* Original Box Container */}
      <div className="box-container">
        <h2>Original Box Container</h2>
        <button onClick={addBox}>Add Box</button>
        <button onClick={removeBox}>Remove Box</button>
        <div className="box-grid">
          {Array.from({ length: boxCount }, (_, i) => (
            <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
              <Box />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filtered Box Container */}
      <div className="filtered-box-container">
        <h2>Filtered Box Container</h2>
        <div className="filter-buttons">
          <button onClick={() => setFilter(5)}>Show 5 Boxes</button>
          <button onClick={() => setFilter(3)}>Show 3 Boxes</button>
          <button onClick={() => setFilter(2)}>Show 2 Boxes</button>
        </div>
        <div className="box-grid">
          {Array.from({ length: filteredBoxCount }, (_, i) => (
            <Box key={i} />
          ))}
        </div>
      </div>
      <div>
        <SearchPage />
      </div>
      
    </>
  );
}

export default App;
