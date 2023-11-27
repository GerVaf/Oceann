import React from "react";
import ComponentHeader from "./Card/ComponentHeader";
import Cards from "./Card/Cards";

const CardComponent = () => {
  return (
    <div className=" flex flex-col items-center h-screen gap-12">
      <ComponentHeader />
      <Cards />
    </div>
  );
};

export default CardComponent;