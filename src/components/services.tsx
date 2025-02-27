import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    icon: <LiaShippingFastSolid size={36} />,
    title: "Free Shipping",
    desc: "Free Shipping for all IDN Order",
  },
  {
    icon: <BiSupport size={36} />,
    title: "Support 24/7",
    desc: "We support 24h a day",
  },
  {
    icon: <RiRefund2Line size={36} />,
    title: "100% Money Back",
    desc: "You have 7 Days to Return",
  },
  {
    icon: <RiSecurePaymentLine size={36} />,
    title: "Secure Payment",
    desc: "We ensure secure payment",
  },
];

const Services = () => {
  return (
    <section className="container mt-[100px]">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {servicesData.map((item) => (
          <ServiceCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
