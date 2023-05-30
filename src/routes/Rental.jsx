import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RentalsContext } from "../App";
import Carrousel from "../components/Carrousel";

export default function Rental() {
  const rentals = useContext(RentalsContext);
  const { rentalId } = useParams();
  const rentalObj = rentals.find((rental) => rental.id === rentalId);

  return (
    <main className="container main rental">
      <Carrousel data={rentalObj} />
    </main>
  );
}
