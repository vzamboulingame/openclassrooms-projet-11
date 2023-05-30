import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RentalsContext } from "../App";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

export default function Rental() {
  const rentals = useContext(RentalsContext);
  const { rentalId } = useParams();
  const rentalObj = rentals.find((rental) => rental.id === rentalId);
  const rentalDescription = rentalObj.description;
  const rentalEquipments = rentalObj.equipments.map((equipment) => (
    <div key={equipment}>{equipment}</div>
  ));

  return (
    <main className="container main rental">
      <Carrousel data={rentalObj} />
      <section className="rental-collapses">
        <div className="rental-collapses-item">
          <Collapse title="Description">{rentalDescription}</Collapse>
        </div>
        <div className="rental-collapses-item">
          <Collapse title="Équipements">{rentalEquipments}</Collapse>
        </div>
      </section>
    </main>
  );
}
