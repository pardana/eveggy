import { SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { IProductsProps } from "./Navbar";
import Cartlist from "./Cartlist";

interface CartProps {
  setCartOpen: React.Dispatch<SetStateAction<boolean>>;
  setCart: React.Dispatch<SetStateAction<IProductsProps[]>>;
  cart: IProductsProps[];
}

const Cart = ({ cart, setCart, setCartOpen }: CartProps) => {
  return (
    <div className="fixed left-0 top-0 w-full min-h-screen bg-[#00000060] overflow-y-scroll">
      <div className="max-w-[480px] w-full min-h-full bg-white absolute right-0 top-0 p6">
        <div
          className="text-3xl absolute right-0 top-0 m-6 cursor-pointer"
          onClick={() => setCartOpen(false)}
        >
          <IoMdClose />
        </div>

        <h2 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h2>

        <div className="mt-6 space-y-2">
          {cart?.map((item) => (
            <Cartlist
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
