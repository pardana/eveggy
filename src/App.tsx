import { useState } from "react";
import Navbar, { IProductsProps } from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeatureProducts from "./components/FeatureProducts";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState<IProductsProps[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <main>
      <Navbar cart={cart} setCartOpen={setCartOpen} />
      <Hero />
      <Services />
      <FeatureProducts />
      <Footer />

      {cartOpen && (
        <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} />
      )}
    </main>
  );
};

export default App;
