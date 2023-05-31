import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RentalsContext } from "../App";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import starRed from "../images/star-red.svg";
import starGray from "../images/star-gray.svg";

/**
 * Rental component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Rental() {
  const rentals = useContext(RentalsContext);
  const { rentalId } = useParams();
  const rentalObj = rentals.find((rental) => rental.id === rentalId);
  const rentalTitle = rentalObj.title;
  const rentalLocation = rentalObj.location;
  const rentalDescription = rentalObj.description;
  const rentalHostPicture = rentalObj.host.picture;

  // Generate the rental rating stars based on the rating value
  const rentalRating = Array.from(Array(5), (value, index) => {
    const isFilled = index < rentalObj.rating;
    const starImg = isFilled ? starRed : starGray;

    return (
      <img
        key={index}
        src={starImg}
        alt="star"
        className="rental-info-rating-star"
      />
    );
  });

  // Split the host name into individual names and create a div for each name
  const rentalHostName = rentalObj.host.name
    .split(" ")
    .map((name, index) => <div key={index}>{name}</div>);

  // Create a span element for each rental tag
  const rentalTags = rentalObj.tags.map((tag) => (
    <span key={tag} className="rental-info-tags-item">
      {tag}
    </span>
  ));

  // Create a div element for each rental equipment
  const rentalEquipments = rentalObj.equipments.map((equipment) => (
    <div key={equipment}>{equipment}</div>
  ));

  return (
    <main className="container main rental">
      <Carrousel data={rentalObj} />
      <section className="rental-info">
        <div className="rental-info-grid1">
          <p className="rental-info-title">{rentalTitle}</p>
          <p className="rental-info-location">{rentalLocation}</p>
          <div className="rental-info-tags">{rentalTags}</div>
        </div>
        <div className="rental-info-grid2">
          <div className="rental-info-host">
            <div className="rental-info-host-name">{rentalHostName}</div>
            <div
              className="rental-info-host-picture"
              style={{ backgroundImage: `url(${rentalHostPicture})` }}
            ></div>
          </div>
          <div className="rental-info-rating">{rentalRating}</div>
        </div>
      </section>
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
