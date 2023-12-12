import HeroImage from "../images/JPG/pexels-ovan-62689.jpg";
import Hero from "../components/Hero";
import { CustomButton } from "../components/Commons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero img={HeroImage}>
        <div className="lg:w-4/5 w-full lg:mt-0 mt-5">
          <h4 className="lg:text-4xl text-2xl font-extrabold leading-tight">
            Epic Cart: Elevate Your Online Shopping Experience
          </h4>
          <p className="lg:w-4/5 w-full leading-relaxed mt-6 lg:text-lg text-base mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            perspiciatis pariatur culpa esse molestias iure harum omnis? Harum,
            vel ratione.
          </p>
          <Link to="/products">
            <CustomButton label={"Shop now"} />
          </Link>
        </div>
      </Hero>
    </>
  );
};

export default HomePage;
