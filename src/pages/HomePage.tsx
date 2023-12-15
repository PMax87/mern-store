import HeroImage from "../images/JPG/pexels-ovan-62689.jpg";
import Hero from "../components/Commons/Hero";
import { CustomButton } from "../components/Commons";
import { useNavigate } from "react-router-dom";
import TopPurchasedProducts from "../components/Commons/TopPurchasedProducts";

const HomePage = () => {
  const navigate = useNavigate();

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
          <div className="w-40">
            <CustomButton
              label="Shop now"
              bgColor="black"
              textColor="white"
              hoverBgColor="white"
              borderColor="black"
              onClick={() => navigate("/products")}
            />
          </div>
        </div>
      </Hero>
      <TopPurchasedProducts />
    </>
  );
};

export default HomePage;
