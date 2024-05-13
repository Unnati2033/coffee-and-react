import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Bannana", "Grapes", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Mango", price: 40, emoji: "🥭", soldout: false },
    { name: "Banana", price: 60, emoji: "🍌", soldout: true },
    { name: "Grapes", price: 10, emoji: "🍇", soldout: false },
    { name: "Orange", price: 50, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 30, emoji: "🍍", soldout: true },
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
            soldout={fruit.soldout}
          ></Fruit>
        ))}
      </ul>
    </div>
  );
}
