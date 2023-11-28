import React from "react";
import ComponentHeader from "./Card/CardHeader";
import Cards from "./Card/Cards";

const CardComponent = () => {
  return (
    <div className=" flex flex-col items-center gap-12 mx-5">
      <ComponentHeader />
      <Cards />
    </div>
  );
};

export default CardComponent;