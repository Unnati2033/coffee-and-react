import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Bannana", "Grapes", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 40, emoji: "🥭" },
    { name: "Banana", price: 60, emoji: "🍌" },
    { name: "Grapes", price: 10, emoji: "🍇" },
    { name: "Orange", price: 50, emoji: "🍊" },
    { name: "Pineapple", price: 30, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          ></Fruit>
        ))}
      </ul>
    </div>
  );
}
