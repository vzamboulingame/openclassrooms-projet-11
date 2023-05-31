import { useState } from "react";
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";

/**
 * Carrousel component.
 *
 * @param {object} props - Component props.
 * @param {object} props.data - Rental data object.
 * @returns {JSX.Element} - Rendered component.
 */
export default function Carrousel(props) {
  const rentalObj = props.data;
  const rentalPicturesArray = rentalObj.pictures;
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const currentPicture = rentalPicturesArray[currentPictureIndex];
  const currentPictureNumber = `${currentPictureIndex + 1}/${
    rentalPicturesArray.length
  }`;
  const showButtons = rentalPicturesArray.length > 1;

  // Event handler for the previous button click
  const handlePreviousClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? rentalPicturesArray.length - 1 : prevIndex - 1
    );
  };

  // Event handler for the next button click
  const handleNextClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === rentalPicturesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="carrousel"
      style={{ backgroundImage: `url(${currentPicture})` }}
    >
      <div className="carrousel-grid1">
        {showButtons && (
          <button
            className="carrousel-previous"
            aria-label="Bouton précédent du carrousel"
            onClick={handlePreviousClick}
          >
            <img src={arrowLeft} alt="Flèche gauche" />
          </button>
        )}
      </div>

      <div className="carrousel-grid2">
        {showButtons && (
          <p className="carrousel-number">{currentPictureNumber}</p>
        )}
      </div>

      <div className="carrousel-grid3">
        {showButtons && (
          <button
            className="carrousel-next"
            aria-label="Bouton suivant du carrousel"
            onClick={handleNextClick}
          >
            <img src={arrowRight} alt="Flèche droite" />
          </button>
        )}
      </div>
    </div>
  );
}
