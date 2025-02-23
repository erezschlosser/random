import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDog } from "./redux/dogSlice";

const Dog = () => {
    const dispatch = useDispatch();
    const { dog, status, error } = useSelector((state) => state.dogs);
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true);
        dispatch(fetchDog())
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Random Dog Image</h1>
            <button onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "Fetch Dog"}
            </button>
            {status === "failed" && <p>Error: {error}</p>}
            {dog && <img src={dog} alt="dog" style={{ marginTop: "10px" }} />}
        </div>
    );
};

export default Dog;

