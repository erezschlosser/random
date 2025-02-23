import "./App.css";
import SearchPage from "./searchPage";
import BoxPlay from "./boxPlay";
import SplineAPITest from "./splineTest/splineTest";
import Dog from "./dog";

function App() {

  return (
    <>
      <div>
        <BoxPlay />
      </div>
      <div>
        <SearchPage />
      </div>
      <div>
        <Dog />
      </div>
    </>
  );
}

export default App;
