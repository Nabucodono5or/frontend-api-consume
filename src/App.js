import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import EditLivro from "./components/edit/editLivro";
import NewLivro from "./components/newLivro/newLivro";
import ErrorPage from "./components/errorPage/errorpage";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditLivro />} />
        <Route path="/new" element={<NewLivro />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
