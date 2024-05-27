import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import NewPage from "./Pages/NewPage/NewPage";
import Subscription from "./Pages/Subscription/Subscription";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NewPage />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  );
}

export default App;
