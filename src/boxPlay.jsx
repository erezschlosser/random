import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Box } from "./box";


function BoxPlay() {
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
          <AnimatePresence>
            {Array.from({ length: boxCount }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1, ease: "easeIn" } }}
              >
                <Box />
              </motion.div>
            ))}
          </AnimatePresence>
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
    </>
  );
}

export default BoxPlay;
