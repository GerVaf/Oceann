import React, { useEffect } from "react";
import "./Loading.css";
const Loading = () => {
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []); 
  return (
    <div className="wbody">
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>blueoceanshop.org blueoceanshop.org </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
