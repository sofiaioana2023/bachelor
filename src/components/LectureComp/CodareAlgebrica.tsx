import React, { useState } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button } from "@mui/material";
import codor from "../../icons/codor.png";
import codMultipluAlgen from "../../icons/codmultipluptg.png";

const CodareAlgebrica = () => {
  function openImageInModal(codMultipluAlgen: string) {
    const modalWindow = window.open(
      codMultipluAlgen,
      "Image",
      "width=800,height=600"
    );
    return modalWindow;
  }
  return (
    <div className="codareAlgebricaContainer">
      <div style={{ marginTop: "12px" }}>
        Este cunoscut faptul că spre deosebire de codurile bloc, <span></span>
        <b>codurile ciclice se reprezintă</b> din punct de vedere matematic{" "}
        <b>sub formă polinomială</b>.
      </div>
      <div>
        Pentru o secvență care conține n simboluri polinomul corespunzător
        atașat cuvântului de cod <b>va fi de gradul n-1 sau mai mic</b> :
        <div className="formulapoly">
          <span style={{ color: "#000" }}>
            v(x) = a<sub>0</sub>+a<sub>1</sub>x + a<sub>2</sub>x<sup>2</sup>+ a
            <sub>3</sub>x<sup>3</sup> + ..... + a<sub>n-1</sub>x<sup>n-1</sup>
          </span>
          .
        </div>
      </div>
      <div>
        Coeficienții polinomului sunt elementele <em>GF(2)</em> ale căror valori
        sunt <b>0</b> sau <b>1</b>.
      </div>
      <div>
        Pentru o secvență care conține
        <b style={{ margin: "0px 5px" }}>
          m simboluri de informație polinomul informațional i(x) de gradul m-1
        </b>
        este reprezentat astfel :
        <div className="formulapoly">
          <span>
            i(x) = i<sub>0</sub>+i
            <sub>1</sub>x + i<sub>2 </sub> x<sup>2</sup>+ i<sub>3</sub> x
            <sup>3</sup> + ..... + i<sub>m-1</sub> x<sup>m-1</sup>
          </span>
        </div>
      </div>
      <div>
        <b>Polinomul generator al codului</b> se notează cu
        <span className="formulapolygen">
          g(x) = g<sub>0</sub>
          +g
          <sub>1</sub>x + g<sub>2 </sub>x<sup>2</sup>+ g<sub>3</sub>x
          <sup>3</sup>+ ..... + g<sub>k-1</sub>x<sup>k-1</sup> + g<sub>k</sub> x
          <sup>k </sup>, g<sub>k</sub> = 1 (întotdeauna), g<sub>i</sub> ∈{" "}
          {"{0,1}"}{" "}
        </span>
        și trebuie să împlinească simultan două condiții :
        <div>
          <b>
            <i>1. să fie primitiv ( are ca divizori pe 1 și pe el însuși)</i>
          </b>
        </div>
        <div>
          <b>
            <i>2. este de ordin k = n - m</i>
          </b>
        </div>
      </div>
      <div>
        Relația <b>v(x) = i(x)g(x)</b> indică faptul că <b>v</b> este un
        <b> multiplu</b> de-al <b>g(x)</b>(
        <span style={{ color: "#6c71a1" }}>
          <b>click pe buton pentru a vedea exemplul</b>
        </span>
        ).
      </div>
      <div>
        <Button
          style={{ backgroundColor: "#6c71a1", fontWeight: "bold" }}
          variant="contained"
          onClick={() => openImageInModal(codMultipluAlgen)}
        >
          Exemplul 1
        </Button>
      </div>

      <div>
        <b>Metoda de codare algebrică</b> implică utilizarea următoarei relații
        de codare:{" "}
        <div>
          <span className="formulapoly">
            v(x) = x<sup>k</sup>i(x) + restul (x<sup>k</sup>
            i(x))/g(x).
          </span>
        </div>
      </div>
      <div className="decodare">
        <b>La decodare</b> se va calcula <b>sindromul erorii</b> pentru a
        verifica dacă
        <b style={{ marginLeft: "3px" }}>
          secvența recepționată este corectă sau dacă a fost afectată de erori
          în timpul transmisiei
        </b>
        <div>
          {" "}
          Dacă se presupune că erorile sunt de tip aditiv, atunci secvența
          recepționată se definește prin relația din care reiese faptul că
          sindromul depinde doar de cuvântul eroare e(x):
        </div>
        <div>
          <span className="formulapoly">r(x) = v(x) + e(x)</span>
        </div>
        Se verifică legea de codare prin împărțirea r(x)/g(x), iar rezultatul
        obținut reprezintă sindromul erorii s(x).
        <ul style={{ margin: "5px 0px" }}>
          <li>
            dacă s(x) = 0, atunci r(x) = v(x), adică nu sunt erori sau acestea
            sunt nedetectabile;
          </li>
          <li>dacă s(x) ≠ 0, se face detecția erorii.</li>
        </ul>
      </div>
      <div
        style={{
          fontSize: "23px",
          fontWeight: "bold",
          alignSelf: "start",
          marginTop: "5px",
        }}
      >
        <PriorityHighIcon style={{ color: "red" }} />
        Observație:
        <span className="obs">
          Sindromul s(x) este un polinom de grad mai mic sau egal cu k-1, deci
          în cazul codurilor binare exista 2<sup>k</sup> combinații distincte,
          de unde rezultă că din cele 2<sup>n</sup> – 1 combinații posibile de
          erori, vor putea fi corectate maxim 2<sup>k</sup> -1( combinația nulă
          este folosită pentru ilustrarea neeronării).
        </span>
      </div>
    </div>
  );
};

export default CodareAlgebrica;
