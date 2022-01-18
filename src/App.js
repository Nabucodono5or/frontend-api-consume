import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
