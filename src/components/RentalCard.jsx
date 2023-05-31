import { Link } from "react-router-dom";

/**
 * RentalCard component.
 *
 * @param {object} props - Component props.
 * @param {string} props.id - ID of the rental.
 * @param {string} props.cover - URL of the rental's cover image.
 * @param {string} props.title - Title of the rental.
 * @returns {JSX.Element} - Rendered component.
 */
export default function RentalCard(props) {
  return (
    <Link className="rental-link" to={`/rental/${props.id}`}>
      <div
        className="rental-card"
        style={{ backgroundImage: `url(${props.cover})` }}
      >
        {props.title}
      </div>
    </Link>
  );
}
