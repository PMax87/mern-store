import React from "react";

interface HeroProps {
  img: string;
  children: JSX.Element;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="container lg:h-[calc(100vh-90px)] lg:grid lg:grid-cols-2 flex flex-col-reverse items-center lg:py-0 py-10">
      {props.children}
      <img
        src={props.img}
        className="object-cover rounded-lg"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
