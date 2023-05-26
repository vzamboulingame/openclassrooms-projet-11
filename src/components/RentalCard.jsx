import { Link } from "react-router-dom";

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
