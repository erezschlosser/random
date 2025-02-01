import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifs } from "./redux/gifSlice";

const SearchPage = () => {
  const [query, setQuery] = useState(""); // State for the search input
  const dispatch = useDispatch();
  const { gifs, status, error } = useSelector((state) => state.gifs); // Get GIFs from Redux state

  // Handle search submission
  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchGifs(query));
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Search for a GIF</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 15px", cursor: "pointer" }}>
        Search
      </button>

      {/* Loading State */}
      {status === "loading" && <p>Loading...</p>}

      {/* Error State */}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Display GIFs */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} style={{ margin: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;