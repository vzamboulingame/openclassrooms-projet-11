import { createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Rental from "./routes/Rental";
import NotFound from "./routes/NotFound";
import { logements } from "./data/logements";
import "./styles/style.scss";

// Creates Context to access rental data from all child components
export const RentalsContext = createContext();

// Redirects to NotFound page if rentalId is incorrect
function RentalRouting() {
  const { rentalId } = useParams();
  const rentalExists = logements.some((rental) => rental.id === rentalId);

  if (rentalExists) {
    return <Rental />;
  } else {
    return <Navigate to="/not-found" />;
  }
}

export default function App() {
  return (
    <RentalsContext.Provider value={logements}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:rentalId" element={<RentalRouting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </RentalsContext.Provider>
  );
}
