import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeatureProducts from "./components/FeatureProducts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProducts />
      <Footer />
    </main>
  );
};

export default App;
