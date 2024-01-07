import React, { useState } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button } from "@mui/material";
import codor from "../../icons/codor.png";
import codMultipluAlgen from "../../icons/codmultipluptg.png";
import { useTranslation } from "react-i18next";

const CodareAlgebrica = () => {
  function openImageInModal(codMultipluAlgen: string) {
    const modalWindow = window.open(
      codMultipluAlgen,
      "Image",
      "width=800,height=600"
    );
    return modalWindow;
  }
  const { t, i18n} = useTranslation();
  const selectedLanguage = i18n.language
  return (
    <div className="codareAlgebricaContainer">
      <div style={{ marginTop: "12px" }}>
        {t("Este cunoscut faptul că spre deosebire de codurile bloc,")}
        <span></span>
        <b>{t("codurile ciclice se reprezintă")}</b>{" "}
        {t("din punct de vedere  matematic")}
        <b>{t("sub formă polinomială")}</b>.
      </div>
      <div>
        {t(
          "Pentru o secvență care conține n simboluri polinomul corespunzător atașat cuvântului de cod"
        )}{" "}
        <b>{t("va fi de gradul n-1 sau mai mic")}</b> :
        <div className="formulapoly">
          <span style={{ color: "#000" }}>
            v(x) = a<sub>0</sub>+a<sub>1</sub>x + a<sub>2</sub>x<sup>2</sup>+ a
            <sub>3</sub>x<sup>3</sup> + ..... + a<sub>n-1</sub>x<sup>n-1</sup>
          </span>
          .
        </div>
      </div>
      <div>
        {t("Coeficienții polinomului sunt elementele")} <em>GF(2)</em>{" "}
        {t("ale căror valori sunt")} <b>0</b> {t("sau")} <b>1</b>.
      </div>
      <div>
        {t("Pentru o secvență care conține")}
        <b style={{ margin: "0px 5px" }}>
          {t(
            "m simboluri de informație polinomul informațional i(x) de gradul m-1"
          )}
        </b>
        {t("este reprezentat astfel")} :
        <div className="formulapoly">
          <span>
            i(x) = i<sub>0</sub>+i
            <sub>1</sub>x + i<sub>2 </sub> x<sup>2</sup>+ i<sub>3</sub> x
            <sup>3</sup> + ..... + i<sub>m-1</sub> x<sup>m-1</sup>
          </span>
        </div>
      </div>
      <div  >
        <b>{t("Polinomul generator al codului")}</b> {t("se notează cu")}
        <div className="formulapolygen">
          <span>g(x) = g<sub>0</sub> + g <sub>1</sub>x + g<sub>2</sub>x<sup>2</sup>+
          g<sub>3</sub>x<sup>3</sup>+ ..... + g<sub>k-1</sub>x<sup>k-1</sup> + g
          <sub>k</sub> x<sup>k</sup>, g<sub>k</sub> = 1 (întotdeauna), g
          <sub>i</sub> ∈ {"{0,1}"}</span>
        </div>
        {t("și trebuie să împlinească simultan două condiții")} :
        <div>
          <b>
            <i>
              {t("1. să fie primitiv ( are ca divizori pe 1 și pe el însuși)")}
            </i>
          </b>
        </div>
        <div>
          <b>
            <i>{t("2. este de ordin k = n - m")}</i>
          </b>
        </div>
      </div>
      <div>
        {t("Relația")} <b>v(x) = i(x)g(x)</b> {t("indică faptul că")} <b>v</b>
        {t("este un")}
        <b> {t("multiplu")}</b> {t("de-al")} <b>g(x)</b>
        {selectedLanguage ==="ro" && <span style={{ color: "#6c71a1" }}>
          <b>{t("click pe buton pentru a vedea exemplu")}</b>
        </span>}
        .
      </div>
      {selectedLanguage ==="ro" &&<div>
        <Button
          style={{ backgroundColor: "#6c71a1", fontWeight: "bold" }}
          variant="contained"
          onClick={() => openImageInModal(codMultipluAlgen)}
        >
          {t("Exemplu")}
        </Button>
      </div>}

      <div>
        <b>{t("Metoda de codare algebrică")}</b>
        {t("implică utilizarea următoarei relații de codare:")}
        <div className="formulapoly">
          <span >
            v(x) = x <sup>k</sup> i(x) + {t("restul")} (x <sup>k</sup>
            i(x))/g(x).
          </span>
        </div>
      </div>
      <div className="decodare">
        <b>{t("La decodare")}</b> {t("se va calcula")}{" "}
        <b>{t("sindromul erorii")}</b> {t("pentru a verifica dacă")}
        <b style={{ marginLeft: "3px" }}>
          {t(
            "secvența recepționată este corectă sau dacă a fost afectată de erori în timpul transmisiei"
          )}
        </b>
        <div>
          {t(
            "Dacă se presupune că erorile sunt de tip aditiv, atunci secvența recepționată se definește prin relația din care reiese faptul că sindromul depinde doar de cuvântul eroare e(x):"
          )}
        </div>
        <div>
          <span className="formulapoly">r(x) = v(x) + e(x)</span>
        </div>
        {t(
          "Se verifică legea de codare prin împărțirea r(x)/g(x), iar rezultatul obținut reprezintă sindromul erorii s(x)."
        )}
        <ul style={{ margin: "5px 0px" }}>
          <li>
            {t(
              "dacă s(x) = 0, atunci r(x) = v(x), adică nu sunt erori sau acestea sunt nedetectabile;"
            )}
          </li>
          <li>{t("dacă s(x) ≠ 0, se face detecția erorii.")}</li>
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
        {t("Observație:")}
        <span className="obs">
          {t(
            " Sindromul s(x) este un polinom de grad mai mic sau egal cu k-1, deci în cazul codurilor binare exista 2"
          )}
          <sup>k</sup>{" "}
          {t("combinații distincte, de unde rezultă că din cele 2")}
          <sup>n</sup> – 1{" "}
          {t("combinații posibile de erori, vor putea fi corectate")}
          {t("maxim")} 2<sup>k</sup> -1({" "}
          {t("combinația nulă este folosită pentru ilustrarea neeronării")}).
        </span>
      </div>
    </div>
  );
};

export default CodareAlgebrica;
