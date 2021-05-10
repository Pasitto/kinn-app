import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import audio from "./so.mp3";
const Home = () => {
  const vdoPath = process.env.PUBLIC_URL + "/assets/videos/";

  const [play, { stop }] = useSound(audio, { interrupt: true });

  const handleOnClick = () => {
    stop();
    console.log("stop");
  };

  useEffect(() => {
    play();
    console.log("play");
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "contain",
          transform: "translate(-50%, -50%)",
          zIndex: "-5",
        }}
      >
        <source src={`${vdoPath}john.mp4`} type="video/mp4" />
      </video>
      <div className="row justify-content-evenly">
        <div className="col-4">
          <Link to="/guitar">
            <button type="button" className="btn-start" onClick={handleOnClick}>
              PlayA
            </button>
          </Link>
        </div>
        <div className="col-4">
          <Link to="drum">
            <button type="button" className="btn-start" onClick={handleOnClick}>
              PlayB
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
