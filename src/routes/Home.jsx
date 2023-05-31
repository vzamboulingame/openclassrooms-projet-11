import { useContext } from "react";
import { RentalsContext } from "../App";
import Banner from "../components/Banner";
import RentalCard from "../components/RentalCard";
import bannerImg from "../images/home-banner.jpg";

/**
 * Home component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
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
      <Banner bgImg={bannerImg} slogan="Chez vous, partout et ailleurs" />
      <section className="home-rentals">{rentalCards}</section>
    </main>
  );
}
