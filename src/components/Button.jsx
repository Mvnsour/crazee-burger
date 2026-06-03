import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <Link to={to}>
      <button>{text}</button>
    </Link>
  );
}
