import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Rental from "./routes/Rental";
import NotFound from "./routes/NotFound";
import { logements } from "./data/logements";
import "./styles/style.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={logements} />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:rentalId" element={<Rental data={logements} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
