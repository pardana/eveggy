import ProductsCard from "./ProductsCard";

const products = [
  {
    id: 0,
    img: "./product_1.jpg",
    name: "Orange",
    price: 16,
  },
  {
    id: 1,
    img: "./product_2.jpg",
    name: "Pomegranate",
    price: 24,
  },
  {
    id: 2,
    img: "./product_3.jpg",
    name: "Apple",
    price: 12,
  },
  {
    id: 3,
    img: "./product_4.jpg",
    name: "Strawberry",
    price: 26,
  },
  {
    id: 4,
    img: "./product_5.jpg",
    name: "Lemon",
    price: 6,
  },
  {
    id: 5,
    img: "./product_6.jpg",
    name: "Tomato",
    price: 13,
  },
  {
    id: 6,
    img: "./product_7.jpg",
    name: "Cauliflower",
    price: 20,
  },
  {
    id: 7,
    img: "./product_8.jpg",
    name: "Grapes",
    price: 22,
  },
  {
    id: 8,
    img: "./product_9.jpg",
    name: "Cauliflower",
    price: 21,
  },
  {
    id: 9,
    img: "./product_10.jpg",
    name: "Orange",
    price: 23,
  },
];

const FeatureProducts = () => {
  return (
    <section className="container py-[100px]">
      <h2 className="text-3xl font-semibold text-center">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[100px]">
        {products.map((item) => (
          <ProductsCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
