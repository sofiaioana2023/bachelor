import { Button } from "@mui/material";
import React, { useContext } from "react";
import { labContext } from "../helpers/Contexts";

const AlegePol = () => {
  const { setLabState, labState } = useContext(labContext);
  return (
    <div className="alegePolinom">
      <div>
        Se consideră Codul Hamming ciclic corector de o eroare C(7,4), t = 1.
      </div>
      <div>Cum n = 7, atunci cuvântul de cod este alcătuit din 7 biți. </div>
      <div>
        Acest cuvânt va fi alcătuit din 4 biți de informație pentru că m = 4.
      </div>
      <div>
        Sursa poate trimite cu ajutorul lor 2<sup>4</sup> = 16 mesaje.
      </div>
      <div>Numărul biților de control este 3 din relația k = n - m.</div>
      <div>
        Gradul polinomului generator g(x) va fi de ordinul 3 deoarece acesta
        coincide cu k.
      </div>
      Alege un polinom generator pentru a începe codarea și decodarea :
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontWeight: "400px",
              margin: "25px 0px",
              width: "550px",
              height: "60px",
              textAlign: "center",
              borderRadius: "8px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setLabState("coder")}
          >
            <b>
              g(x) = x<sup>3</sup> + x + 1, g<sub>3</sub> = g<sub>1</sub> = g
              <sub>0</sub> =1
            </b>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontWeight: "400px",
              margin: "25px 0px",
              width: "550px",
              height: "60px",
              textAlign: "center",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <b>
              g(x) = x<sup>3</sup> + x<sup>2</sup> + 1, g<sub>3</sub> = g
              <sub>2</sub> = g<sub>0</sub> =1
            </b>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignSelf: "end" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontWeight: "800px",
            margin: "25px 0px",
            width: "300px",
            height: "60px",
            fontSize: "30px",
          }}
          onClick={() => setLabState("meniu")}
        >
          BACK
        </Button>
      </div>
    </div>
  );
};

export default AlegePol;
