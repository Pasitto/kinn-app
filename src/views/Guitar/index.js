import React from "react";
import "./guitar.css";

const imgPath = process.env.PUBLIC_URL + "/assets/images/";

const Guitar = () => {
  const handleClick = (event) => {
    console.log(event.target.id);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${imgPath}guitar_bg.jpg)`,
        backgroundRepeat: "no-repeat",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <div className="col">
        <button type="button" id="Em" onClick={handleClick}></button>
        <button type="button" id="Am" onClick={handleClick}></button>
        <button type="button" id="Dm" onClick={handleClick}></button>
        <button type="button" id="G" onClick={handleClick}></button>
        <button type="button" id="C" onClick={handleClick}></button>
        <button type="button" id="F" onClick={handleClick}></button>
        <button type="button" id="D" onClick={handleClick}></button>
        <button type="button" id="A" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button type="button" id="Em6" onClick={handleClick}></button>
        <button type="button" id="Am6" onClick={handleClick}></button>
        <button type="button" id="Dm6" onClick={handleClick}></button>
        <button type="button" id="G6" onClick={handleClick}></button>
        <button type="button" id="C6" onClick={handleClick}></button>
        <button type="button" id="F6" onClick={handleClick}></button>
        <button type="button" id="D6" onClick={handleClick}></button>
        <button type="button" id="A6" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button
          type="button"
          id="Em5"
          className="button2"
          onClick={handleClick}
        ></button>
        <button type="button" id="Am5" onClick={handleClick}></button>
        <button type="button" id="Dm5" onClick={handleClick}></button>
        <button type="button" id="G5" onClick={handleClick}></button>
        <button type="button" id="C5" onClick={handleClick}></button>
        <button type="button" id="F5" onClick={handleClick}></button>
        <button type="button" id="D5" onClick={handleClick}></button>
        <button type="button" id="A5" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button
          type="button"
          id="Em4"
          className="button2"
          onClick={handleClick}
        ></button>
        <button type="button" id="Am4" onClick={handleClick}></button>
        <button type="button" id="Dm4" onClick={handleClick}></button>
        <button type="button" id="G4" onClick={handleClick}></button>
        <button type="button" id="C4" onClick={handleClick}></button>
        <button type="button" id="F4" onClick={handleClick}></button>
        <button type="button" id="D4" onClick={handleClick}></button>
        <button type="button" id="A4" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button
          type="button"
          id="Em3"
          className="button2"
          onClick={handleClick}
        ></button>
        <button type="button" id="Am3" onClick={handleClick}></button>
        <button type="button" id="Dm3" onClick={handleClick}></button>
        <button type="button" id="G3" onClick={handleClick}></button>
        <button type="button" id="C3" onClick={handleClick}></button>
        <button type="button" id="F3" onClick={handleClick}></button>
        <button type="button" id="D3" onClick={handleClick}></button>
        <button type="button" id="A3" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button
          type="button"
          id="Em2"
          className="button2"
          onClick={handleClick}
        ></button>
        <button type="button" id="Am2" onClick={handleClick}></button>
        <button type="button" id="Dm2" onClick={handleClick}></button>
        <button type="button" id="G2" onClick={handleClick}></button>
        <button type="button" id="C2" onClick={handleClick}></button>
        <button type="button" id="F2" onClick={handleClick}></button>
        <button type="button" id="D2" onClick={handleClick}></button>
        <button type="button" id="A2" onClick={handleClick}></button>
      </div>
      <div className="col">
        <button
          type="button"
          id="Em1"
          className="button2"
          onClick={handleClick}
        ></button>
        <button type="button" id="Am1" onClick={handleClick}></button>
        <button type="button" id="Dm1" onClick={handleClick}></button>
        <button type="button" id="G1" onClick={handleClick}></button>
        <button type="button" id="C1" onClick={handleClick}></button>
        <button type="button" id="F1" onClick={handleClick}></button>
        <button type="button" id="D1" onClick={handleClick}></button>
        <button type="button" id="A1" onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default Guitar;
