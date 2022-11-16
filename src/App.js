import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="place-to-stay" element={<PlaceToStay />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
