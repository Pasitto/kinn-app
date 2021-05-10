import React from "react";

const imgPath = process.env.PUBLIC_URL + "/assets/images/";

const Drum = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgPath}drum.png)`,
        backgroundRepeat: "no-repeat",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
    </div>
  );
};

export default Drum;
