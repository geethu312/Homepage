import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Subscription from "./Pages/Subscription/Subscription";
import Login from "./Pages/Login/Login";
import SubsData from "./Pages/SubsData/SubsData";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/" element={<Login />} />
        <Route path="/subs" element={<SubsData />} />
      </Routes>
    </>
  );
}

export default App;
