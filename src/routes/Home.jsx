import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>This is the home page</h1>
      <li>
        <Link to={`/rental/1`}>Location 1</Link>
      </li>
      <li>
        <Link to={`/rental/2`}>Location 2</Link>
      </li>
    </main>
  );
}
