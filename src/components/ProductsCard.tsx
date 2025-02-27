import { MdOutlineShoppingCart } from "react-icons/md";

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: number;
}

const ProductsCard = ({ id, img, name, price }: PropsType) => {
  return (
    <div>
      <div className="border border-gray-300">
        <img src={img} alt={`${id}-${name}`} />
      </div>

      <div className="border border-gray-300 border-t-0">
        <h2 className="text-2xl text-center pt-4">{name}</h2>
        <div className="px-4 flex items-center justify-between pt-8 mb-4">
          <p className="text-accentDark text-xl font-medium">$ {price}.00</p>
          <button className="bg-accent hover:bg-accentDark text-white py-2 px-4 flex items-center gap-2">
            <MdOutlineShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
