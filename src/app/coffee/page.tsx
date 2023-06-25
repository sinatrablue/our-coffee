import { prisma } from "@/db";
import "./coffee.scss";

export default async function Coffee() {
  // await prisma.coffeeItem.create({ data: { name: "Golden Latte", price: 4 } });
  const coffeeItems = await prisma.coffeeItem.findMany();

  return (
    <>
      <header>
        <h1 className="mb-4 p-3 w-100 shadow-sm">Coffee</h1>
      </header>
      <div className="list-container">
        <h3 className="coffee-item">
          <span>Drink</span>
          <span>Price</span>
        </h3>
        {/* TODO: Coffee Item as component when complexity comes in (tooltip,
          link to redirect to drink description...) */}
        {(coffeeItems.length > 0 &&
          coffeeItems.map(item => {
            return (
              <div className="coffee-item" key={item.id}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            );
          })) || <h3>No items</h3>}
      </div>
    </>
  );
}
