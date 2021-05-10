import React from "react";
import "./guitar.css";
import useSound from "use-sound";

const imgPath = process.env.PUBLIC_URL + "/assets/images/";
const guitarAudioPath = process.env.PUBLIC_URL + "/assets/audios/guitar/";

const Guitar = () => {
  // Em
  const [playEm] = useSound(`${guitarAudioPath}Em.mp3`);
  const [playEm6] = useSound(`${guitarAudioPath}Em6.mp3`);
  const [playEm5] = useSound(`${guitarAudioPath}Em5.mp3`);
  const [playEm4] = useSound(`${guitarAudioPath}Em4.mp3`);
  const [playEm3] = useSound(`${guitarAudioPath}Em3.mp3`);
  const [playEm2] = useSound(`${guitarAudioPath}Em2.mp3`);
  const [playEm1] = useSound(`${guitarAudioPath}Em1.mp3`);
  // Am
  const [playAm] = useSound(`${guitarAudioPath}Am.mp3`);
  const [playAm6] = useSound(`${guitarAudioPath}Am6.mp3`);
  const [playAm5] = useSound(`${guitarAudioPath}Am5.mp3`);
  const [playAm4] = useSound(`${guitarAudioPath}Am4.mp3`);
  const [playAm3] = useSound(`${guitarAudioPath}Am3.mp3`);
  const [playAm2] = useSound(`${guitarAudioPath}Am2.mp3`);
  const [playAm1] = useSound(`${guitarAudioPath}Am1.mp3`);
  // Dm
  const [playDm] = useSound(`${guitarAudioPath}Dm.mp3`);
  const [playDm6] = useSound(`${guitarAudioPath}Dm6.mp3`);
  const [playDm5] = useSound(`${guitarAudioPath}Dm5.mp3`);
  const [playDm4] = useSound(`${guitarAudioPath}Dm4.mp3`);
  const [playDm3] = useSound(`${guitarAudioPath}Dm3.mp3`);
  const [playDm2] = useSound(`${guitarAudioPath}Dm2.mp3`);
  const [playDm1] = useSound(`${guitarAudioPath}Dm1.mp3`);
  // G
  const [playG] = useSound(`${guitarAudioPath}G.mp3`);
  const [playG6] = useSound(`${guitarAudioPath}G6.mp3`);
  const [playG5] = useSound(`${guitarAudioPath}G5.mp3`);
  const [playG4] = useSound(`${guitarAudioPath}G4.mp3`);
  const [playG3] = useSound(`${guitarAudioPath}G3.mp3`);
  const [playG2] = useSound(`${guitarAudioPath}G2.mp3`);
  const [playG1] = useSound(`${guitarAudioPath}G1.mp3`);
  // C
  const [playC] = useSound(`${guitarAudioPath}C.mp3`);
  const [playC6] = useSound(`${guitarAudioPath}C6.mp3`);
  const [playC5] = useSound(`${guitarAudioPath}C5.mp3`);
  const [playC4] = useSound(`${guitarAudioPath}C4.mp3`);
  const [playC3] = useSound(`${guitarAudioPath}C3.mp3`);
  const [playC2] = useSound(`${guitarAudioPath}C2.mp3`);
  const [playC1] = useSound(`${guitarAudioPath}C1.mp3`);
  // F
  const [playF] = useSound(`${guitarAudioPath}F.mp3`);
  const [playF6] = useSound(`${guitarAudioPath}F6.mp3`);
  const [playF5] = useSound(`${guitarAudioPath}F5.mp3`);
  const [playF4] = useSound(`${guitarAudioPath}F4.mp3`);
  const [playF3] = useSound(`${guitarAudioPath}F3.mp3`);
  const [playF2] = useSound(`${guitarAudioPath}F2.mp3`);
  const [playF1] = useSound(`${guitarAudioPath}F1.mp3`);
  // D
  const [playD] = useSound(`${guitarAudioPath}D.mp3`);
  const [playD6] = useSound(`${guitarAudioPath}D6.mp3`);
  const [playD5] = useSound(`${guitarAudioPath}D5.mp3`);
  const [playD4] = useSound(`${guitarAudioPath}D4.mp3`);
  const [playD3] = useSound(`${guitarAudioPath}D3.mp3`);
  const [playD2] = useSound(`${guitarAudioPath}D2.mp3`);
  const [playD1] = useSound(`${guitarAudioPath}D1.mp3`);
  // A
  const [playA] = useSound(`${guitarAudioPath}A.mp3`);
  const [playA6] = useSound(`${guitarAudioPath}A6.mp3`);
  const [playA5] = useSound(`${guitarAudioPath}A5.mp3`);
  const [playA4] = useSound(`${guitarAudioPath}A4.mp3`);
  const [playA3] = useSound(`${guitarAudioPath}A3.mp3`);
  const [playA2] = useSound(`${guitarAudioPath}A2.mp3`);
  const [playA1] = useSound(`${guitarAudioPath}A1.mp3`);

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
        <button type="button" id="Em" onClick={playEm}></button>
        <button type="button" id="Am" onClick={playAm}></button>
        <button type="button" id="Dm" onClick={playDm}></button>
        <button type="button" id="G" onClick={playG}></button>
        <button type="button" id="C" onClick={playC}></button>
        <button type="button" id="F" onClick={playF}></button>
        <button type="button" id="D" onClick={playD}></button>
        <button type="button" id="A" onClick={playA}></button>
      </div>
      <div className="col">
        <button type="button" id="Em6" onClick={playEm6}></button>
        <button type="button" id="Am6" onClick={playAm6}></button>
        <button type="button" id="Dm6" onClick={playDm6}></button>
        <button type="button" id="G6" onClick={playG6}></button>
        <button type="button" id="C6" onClick={playC6}></button>
        <button type="button" id="F6" onClick={playF6}></button>
        <button type="button" id="D6" onClick={playD6}></button>
        <button type="button" id="A6" onClick={playA6}></button>
      </div>
      <div className="col">
        <button type="button" id="Em5" className="button2" onClick={playEm5}></button>
        <button type="button" id="Am5" onClick={playAm5}></button>
        <button type="button" id="Dm5" onClick={playDm5}></button>
        <button type="button" id="G5" onClick={playG5}></button>
        <button type="button" id="C5" onClick={playC5}></button>
        <button type="button" id="F5" onClick={playF5}></button>
        <button type="button" id="D5" onClick={playD5}></button>
        <button type="button" id="A5" onClick={playA5}></button>
      </div>
      <div className="col">
        <button type="button" id="Em4" className="button2" onClick={playEm4}></button>
        <button type="button" id="Am4" onClick={playAm4}></button>
        <button type="button" id="Dm4" onClick={playDm4}></button>
        <button type="button" id="G4" onClick={playG4}></button>
        <button type="button" id="C4" onClick={playC4}></button>
        <button type="button" id="F4" onClick={playF4}></button>
        <button type="button" id="D4" onClick={playD4}></button>
        <button type="button" id="A4" onClick={playA4}></button>
      </div>
      <div className="col">
        <button type="button" id="Em3" className="button2" onClick={playEm3}></button>
        <button type="button" id="Am3" onClick={playAm3}></button>
        <button type="button" id="Dm3" onClick={playDm3}></button>
        <button type="button" id="G3" onClick={playG3}></button>
        <button type="button" id="C3" onClick={playC3}></button>
        <button type="button" id="F3" onClick={playF3}></button>
        <button type="button" id="D3" onClick={playD3}></button>
        <button type="button" id="A3" onClick={playA3}></button>
      </div>
      <div className="col">
        <button type="button" id="Em2" className="button2" onClick={playEm2}></button>
        <button type="button" id="Am2" onClick={playAm2}></button>
        <button type="button" id="Dm2" onClick={playDm2}></button>
        <button type="button" id="G2" onClick={playG2}></button>
        <button type="button" id="C2" onClick={playC2}></button>
        <button type="button" id="F2" onClick={playF2}></button>
        <button type="button" id="D2" onClick={playD2}></button>
        <button type="button" id="A2" onClick={playA2}></button>
      </div>
      <div className="col">
        <button type="button" id="Em1" className="button2" onClick={playEm1}></button>
        <button type="button" id="Am1" onClick={playAm1}></button>
        <button type="button" id="Dm1" onClick={playDm1}></button>
        <button type="button" id="G1" onClick={playG1}></button>
        <button type="button" id="C1" onClick={playC1}></button>
        <button type="button" id="F1" onClick={playF1}></button>
        <button type="button" id="D1" onClick={playD1}></button>
        <button type="button" id="A1" onClick={playA1}></button>
      </div>
    </div>
  );
};

export default Guitar;
