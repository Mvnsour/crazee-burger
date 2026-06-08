import Button from "../../Button";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <>
      <h1>Hello ! {username}</h1>
      <br />
      <Button text="Disconnect" to="/" />
    </>
  );
}
