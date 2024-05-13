export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      {/* {emoji}
        {name} $ {price} */}

      <li>
        {" "}
        {emoji}
        {name} $ {price} {soldout ? "soldout" : ""}
      </li>
    </>
  );
}
