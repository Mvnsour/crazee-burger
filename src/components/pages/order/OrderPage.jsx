import Button from "../../Button";

export default function OrderPage({ name }) {
  return (
    <>
      Hello {name}!
      <br />
      <Button text="Disconnect" to="/" />
    </>
  );
}
