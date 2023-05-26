import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Rental from "./routes/Rental";
import NotFound from "./routes/NotFound";
import { logements } from "./data/logements";
import "./styles/style.scss";

// Creates Context to be used in all child components
export const RentalsContext = createContext();

export default function App() {
  return (
    <RentalsContext.Provider value={logements}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:rentalId" element={<Rental />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </RentalsContext.Provider>
  );
}
