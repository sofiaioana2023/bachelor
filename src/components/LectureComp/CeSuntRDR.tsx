import { Button, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import codMultipluAlgen from "../../icons/codmultipluptg.png";
import codor from "../../icons/codor.png";
import symbolFlipFlopD from "../../icons/BISTABILDSYMBOL.png";
import HowALFSR from "../../icons/HowALFSRWork.png";
import { useTranslation } from "react-i18next";
const CeSuntRDR = () => {
  const exemple = [symbolFlipFlopD, codor, HowALFSR];
  function openImageInModal(image: string) {
    const modalWindow = window.open(image, "Image", "width=800,height=600");

    return modalWindow;
  }
  const { t } = useTranslation();

  return (
    <div className="CesuntRDR">
      <div>
        <Typography
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            alignSelf: "start",
            padding: "5px 0px 5px 5px",
          }}
        >
          {t("Ce este un registru de deplasare cu reacție(RDR)?")}
        </Typography>

        <div className="defrdr">
          <ul>
            <li>
              {t(
                "Un registru de deplasare reprezintă un circuit secvențial liniar, alcătuit dintr-un ansamblu de bistabile(flip-flop-uri) utilizate pentru a stoca mai mulți biți de date și pentru a transfera informația de la o celulă de memorie la alta atunci când un semnal de ceas este aplicat în interiorul sau în exteriorul sistemului."
              )}
              <b>
                {t(
                  "Pentru a forma un registru de deplasare cu N biți, este necesar să conectăm N flip-flop-uri."
                )}
              </b>
            </li>
          </ul>
        </div>
        <div>
          <Button
            style={{ backgroundColor: "#6c71a1", fontWeight: "bold" }}
            variant="contained"
            onClick={() => openImageInModal(exemple[0])}
          >
            {t("Exemplul")} 2
          </Button>
        </div>
      </div>
      <div>
        <Typography
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            alignSelf: "start",
          }}
        >
          {t("Cum funcționează un RDR?")}
        </Typography>
        <div className="functionarerdr">
          <ul>
            <li>
              {t(
                "Un singur bistabil, cel mai semniﬁcativ, primește la intrare o funcție logică XOR care este definită pe baza unor biți mai puțini semniﬁcativi"
              )}
              <em>(LSB)</em>.{" "}
              {t(
                "Determinarea biților care intră în calculul valorii viitoare a bitului cel mai semniﬁcativ depinde de polinomul generator g(x)."
              )}
            </li>

            <li>
              {t(
                "Polinomul are gradul egal cu numărul de biți care alcătuiesc RDR¸ și prezintă indecșii biților care participă la determinare valorii viitoare a celui mai semniﬁcativ bit"
              )}
              <em>(MSB)</em>.
            </li>
            <li>
              {t(
                "Funcția XOR realizează operația de adunare aritmetică a biților.Pentru N bistabile se obține o"
              )}
              <b>
                {t("secvență de numărarea de lungime maximă 2")}
                <sup>N</sup>−1
              </b>
              ({" "}
              {t(
                "stare în care RDR conține doar valori nule este starea de blocare, prin urmare, se exclude"
              )}
              ).
            </li>
            <li>
              {t(
                "Un registru de deplasare cu reacție funcționează independent, doar pe baza semnalului de reacție."
              )}
            </li>
            <li>
              {t(
                "Conexiunile de la nivelul registrului corespund polinomului generator g(x):"
              )}
              <span style={{ fontWeight: "bold" }}>
                g(x) = g<sub>0</sub>
                +g
                <sub>1</sub>x + g<sub>2 </sub>x<sup>2</sup>+ g<sub>3</sub>x
                <sup>3</sup>+ ..... + g<sub>k-1</sub>x<sup>k-1</sup> + g
                <sub>k</sub> x<sup>k </sup>, g<sub>k</sub> =1 (
                {t("întotdeauna")}), g<sub>i</sub> ∈ (0,1)
              </span>
            </li>
          </ul>
          <div>
            <Button
              style={{ backgroundColor: "#6c71a1", fontWeight: "bold" }}
              variant="contained"
              onClick={() => openImageInModal(exemple[2])}
            >
              {t("Exemplul 3")}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Typography
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            alignSelf: "start",
            padding: "5px",
            marginTop: "16px",
          }}
        >
          {t(
            "Unde regăsim regiștrii de deplasare cu reacție în domeniul tehnic?"
          )}
        </Typography>

        <div className="aplicatiiRDR">
          <ul>
            <li>
              {t(
                "în secțiunea în care s-au prezentat codarea si decodarea algebrică s-a observat faptul că ambele procese se realizează prin divizare (împărțirea lui"
              )}
              x<sup>k</sup>i(x) {t("la")} g(x), {t("respectiv")} r(x) {t("la")}
              g(x);{" "}
              {t(
                "o implementarea mai facilă și rapidă a divizării se obține prin utilizarea unor"
              )}
              <b></b>
              {t(
                "utilizând registru de deplasare cu reacție (RDR) cu sumatoare modulo 2 exterioare sau interioare."
              )}
            </li>
            <li>
              {t("ajută la implementarea")}
              <b style={{ marginLeft: "3px" }}>
                {t(
                  "algoritmului de transformări în domeniul Fourier rapid (FFT)"
                )}
              </b>
              {t("pentru procesarea semnalelor;")}
            </li>
            <li>
              {t(
                "pot genera secvențe de numere pseudo-aleatoare, care pot fi utile în aplicații cum ar fi simulările, criptografia sau generarea de parole;"
              )}
            </li>
            <li>
              {t("în criptografie contribuie la generarea de chei secrete.")}{" "}
            </li>
          </ul>
        </div>
        <Typography
          style={{
            fontSize: "23px",
            fontWeight: "bold",
            alignSelf: "start",
            marginTop: "5px",
          }}
        >
          <PriorityHighIcon style={{ color: "red" }} />
          {t("Observație")} :
          <span className="obs ">
            {t(
              "În criptografie se preferă polinoame primitive dense(majoritatea coeficienților au valori nenule), iar în codare sunt folosite cele rare(majoritatea coeficienților au valori zero)."
            )}
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default CeSuntRDR;
