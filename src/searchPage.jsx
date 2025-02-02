import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifs } from "./redux/gifSlice";

const SearchPage = () => {
  const [query, setQuery] = useState(""); // State for the search input
  const dispatch = useDispatch();
  const { gifs, status, error } = useSelector((state) => state.gifs); // Get GIFs from Redux state

  // debounce API calls
  useEffect(() => {
    if (query.trim() === '') return;

    const delay = setTimeout(() => {
      dispatch(fetchGifs(query));
    }, 500);

    return () => clearTimeout(delay); 
  }, [query, dispatch]);

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

      {/* Loading State */}
      {status === "loading" && <p>Loading...</p>}

      {/* Error State */}
      {status === "failed" && <p>Error: {error}</p>}

      {/* GIFs Display */}
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} style={{ margin: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;