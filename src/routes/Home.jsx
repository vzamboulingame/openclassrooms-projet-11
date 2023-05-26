import { useContext } from "react";
import { RentalsContext } from "../App";
import RentalCard from "../components/RentalCard";

export default function Home() {
  const rentals = useContext(RentalsContext);
  const rentalCards = rentals.map((rental) => (
    <RentalCard
      key={rental.id}
      id={rental.id}
      title={rental.title}
      cover={rental.cover}
    />
  ));

  return (
    <main className="container main home">
      <div className="home-banner">
        <p className="home-banner-text">Chez vous, partout et ailleurs</p>
      </div>
      <section className="home-rentals">{rentalCards}</section>
    </main>
  );
}
