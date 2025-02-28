import { IoMdClose } from "react-icons/io";
import { IProductsProps } from "./Navbar";
import { SetStateAction } from "react";

interface CartlistProps {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
  cart: IProductsProps[];
  setCart: React.Dispatch<SetStateAction<IProductsProps[]>>;
}

const Cartlist = ({
  img,
  name,
  quantity,
  price,
  id,
  cart,
  setCart,
}: CartlistProps) => {
  const removeFromCart = () => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img className="h-[80px]" src={img} alt={name} />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <div className="text-2xl cursor-pointer" onClick={removeFromCart}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default Cartlist;
