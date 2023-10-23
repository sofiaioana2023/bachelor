import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Typography } from "@mui/material";

import finish from "../icons/finish.png";
import step1to4 from "../icons/steps1to4.png";
import decoderptcorectie from "../icons/decoderptcorectie.png";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import codor from "../icons/codor.png";
import decodor from "../icons/decodor.png";
import CeSuntRDR from "../components/LectureComp/CeSuntRDR";
import CodareAlgebrica from "../components/LectureComp/CodareAlgebrica";
import ScrollMessage from "../components/ScrollMessage";
const Lecture = () => {
  const [isFlipped, setIsFlipped] = useState(Array(10).fill(false));
  const titluri = [
    "Codare algebrică",
    "Ce este un registru de deplasare cu reacție (RDR) ?",
    "Algoritm de (de)codare ciclică utilizând RDR",
  ];

  const flipCard = (index: number) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };

  return (
    <Layout>
      <div className="containerLecture">
        <Typography
          style={{
            fontSize: "50px",
            textAlign: "center",
            margin: "50px 25px",
          }}
        >
          <b>
            Codul Hamming ciclic corector de o eroare: algoritmul de codare și
            decodare ciclică prin RDR cu sumatoare modulo 2 exterioare
          </b>
        </Typography>

        <Typography variant="h5" style={{ marginTop: "25px" }}>
          <span style={{ marginLeft: "25px" }}></span>Codurile ciclice
          corectoare de o eroare, de lungime n sunt de fapt coduri Hamming
          ciclice corectoare de o eroare cu structură sistematică. Acestea pot
          fi comparate cu codul BCH, corector de o singură eroare (t = 1), de
          lungime n = 2<sup>k</sup>-1, al cărui polinom generator g(x) este
          chiar polinomul primitiv de gradul k care generează pe GF(2
          <sup>k</sup>).
        </Typography>
        <div className="cuprinsContainer">
          <Typography variant="h4" className="cuprins">
            <b>Cuprins</b>
          </Typography>
          <ol className="titluriLecții">
            <li>
              <a href="#CodareAlgebrica">{titluri[0]}</a>
            </li>
            <li>
              <a href="#CeSuntRDR">{titluri[1]}</a>
            </li>
            <li>
              <a href="#(De)codareCiclicaPrinRDR">{titluri[2]}</a>
            </li>
          </ol>
        </div>
        <div
          id="CodareAlgebrica"
          style={{
            margin: "auto",
          }}
        >
          <CodareAlgebrica />
        </div>
        <div
          style={{
            margin: "auto",
          }}
          id="CeSuntRDR"
        >
          <CeSuntRDR />
        </div>

        <div
          id="(De)codareCiclicaPrinRDR"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="dimensionareContainer">
            <Typography
              style={{
                alignSelf: "start",
                fontSize: "40px",
                color: "#d68322",
                marginLeft: "25px",
              }}
            >
              <img src={step1to4} style={{ width: "100px", height: "90px" }} />
            </Typography>
            <Typography
              style={{
                fontSize: "35px",
                letterSpacing: "5px",
                marginBottom: "12px",
              }}
            >
              <b>Dimensionare</b>
            </Typography>
            <Typography
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
            >
              <b>
                <span style={{ color: "#4d7065" }}>n</span>{" "}
                <span style={{ color: "#000" }}> =</span>
                <span className="information"> m</span>
                <span style={{ color: "#000" }}> +</span>
                <span className="control"> k</span>
              </b>
            </Typography>
            <div className="flashcards">
              <div
                className={`flashcard ${isFlipped[0] ? "flipped" : ""}`}
                onClick={() => flipCard(0)}
              >
                <div className="front">
                  <h2 style={{ color: "#4d7065" }}>n</h2>
                </div>
                <div className="back">
                  <h3 style={{ color: "#4d7065" }}>
                    Lungimea cuvantului de cod
                  </h3>
                </div>
              </div>
              <div
                className={`flashcard ${isFlipped[1] ? "flipped" : ""}`}
                onClick={() => flipCard(1)}
              >
                <div className="front">
                  <h2 className="information">m</h2>
                </div>
                <div className="back">
                  <h3 className="information">biți de informație</h3>
                </div>
              </div>
              <div
                className={`flashcard ${isFlipped[2] ? "flipped" : ""}`}
                onClick={() => flipCard(2)}
              >
                <div className="front">
                  <h2 className="control">k</h2>
                </div>
                <div className="back">
                  <h3 className="control">biți de control</h3>
                </div>
              </div>
              <div
                className={`flashcard ${isFlipped[3] ? "flipped" : ""}`}
                onClick={() => flipCard(3)}
              >
                <div className="front">
                  <h2>t = 1</h2>
                </div>
                <div className="back">
                  <h3>corectează o singură eroare</h3>
                </div>
              </div>
              <div
                className={`flashcard ${isFlipped[4] ? "flipped" : ""}`}
                onClick={() => flipCard(4)}
              >
                <div className="front">
                  <h2>
                    <span className="biggerLetter control ">
                      <span style={{ color: "#000" }}> v=[</span>a
                    </span>
                    <span className="smallerLetter control">0</span>
                    <span className="biggerLetter control"> a</span>
                    <span className="smallerLetter control">1</span>
                    <span className="biggerLetter control"> a</span>
                    <span className="smallerLetter control">2</span>
                    <span> ...</span>
                    <span className="biggerLetter control"> a</span>
                    <span className="smallerLetter control">k-1</span>
                    <span className="biggerLetter information"> a</span>
                    <span className="smallerLetter information">k</span>
                    <span className="biggerLetter information"> a</span>
                    <span className="smallerLetter information">k+1</span>
                    <span> ...</span>
                    <span className="biggerLetter information"> a</span>
                    <span className="smallerLetter information">n-2</span>
                    <span className="biggerLetter information"> a</span>
                    <span className="smallerLetter information">
                      n-1
                      <span className="biggerLetter" style={{ color: "#000" }}>
                        ]
                      </span>
                    </span>
                  </h2>
                </div>
                <div className="back">
                  <h3> cuvânt de cod cu structură sistematică</h3>
                </div>
              </div>
            </div>
          </div>
          <Typography variant="h5">
            <span style={{ marginLeft: "25px" }}></span>Spre deosebire codurile
            Hamming bloc, ale căror cuvinte de cod aveau structură
            nesistematică, în cazul codurilor Hamming ciclice corectoare de o
            eroare, forma cuvântului de cod este una sistematică.
          </Typography>
          <div className="DimensionareContainer">
            <Typography
              style={{
                alignSelf: "start",
                fontSize: "40px",
                color: "#d68322",
                marginLeft: "25px",
              }}
            >
              <img src={step1to4} style={{ width: "100px", height: "90px" }} />
            </Typography>
            <Typography
              style={{
                fontSize: "35px",
                marginBottom: "12px",
              }}
            >
              <b>
                Coder cu RDR și{" "}
                <div
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #000",
                    height: "29px",
                    width: "29px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "23px",
                    marginRight: "7px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "center",
                      marginBottom: "2px",
                      fontSize: "40px",
                      marginRight: "3px",
                    }}
                  >
                    +
                  </span>
                </div>
                exterioare
              </b>
            </Typography>

            <div
              className={`flashCard ${isFlipped[5] ? "Flipped" : ""}`}
              onClick={() => flipCard(5)}
              style={{ alignSelf: "start" }}
            >
              <div className="Front">
                <h2>
                  Ce se întâmplă pe durata primelor
                  <span className="information"> m</span> perioade de tact?
                </h2>
              </div>
              <div className="Back">
                <h3>
                  <ul className="listCoDec">
                    <li>comutatorul K se află în poziția 1</li>
                    <li>
                      biții de la intrare ajung la ieșire, astfel ca{" "}
                      <span className="information">biții de informație</span>{" "}
                      se vor afla pe cele mai semnificative poziții în cuvântul
                      de cod v
                    </li>
                    <li>
                      biții de la intrare se adună prin sumatorul S<sub>2</sub>{" "}
                      cu valorile din celulele registrului, formând în registru
                      relații liniare
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
            <div
              className={`flashCard ${isFlipped[6] ? "Flipped" : ""}`}
              onClick={() => flipCard(6)}
              style={{ alignSelf: "start" }}
            >
              <div className="Front">
                <h2>
                  Ce se întâmplă pe durata următoarelor{" "}
                  <span className="control">k</span> perioade de tact?
                </h2>
              </div>
              <div className="Back">
                <h3>
                  <ul className="listCoDec">
                    <li>
                      comutatorul K este în poziția 2, la intrare nu se vor mai
                      afla biți
                    </li>
                    <li>
                      în sumatorul S<sub>1</sub> se adună relațiile liniare
                      existente în celulele registrului, obținându-se astfel la
                      ieșire <span className="control">biții de control</span>
                    </li>
                    <li>
                      în celula C<sub>k-1</sub> se obține 0 datorită sumatorului
                      S<sub>2</sub> care adună ieșirea sumatorului S<sub>1</sub>{" "}
                      de două ori
                    </li>
                  </ul>
                </h3>
              </div>
              <img
                src={codor}
                style={{
                  marginLeft: "1800px",
                  height: "500px",
                  width: "900px",
                }}
              />
            </div>
            <Typography variant="h5" style={{ marginTop: "25px" }}>
              <b>
                <PriorityHighIcon style={{ color: "red" }} />
                Observație:
              </b>
              <span className="obs">
                Conexiunea dintre celule și sumatorul S1 se realizează atunci
                când valoarea coeficientului corespunzător din g(x) este 1
                (celula C<sub>0</sub> este tot timpul conectată la sumatorul S1
                deoarece coeficientul g<sub>0</sub> = 1.)
              </span>
            </Typography>
          </div>
          <div className="DimensionareContainer">
            <Typography
              style={{
                alignSelf: "start",
                fontSize: "40px",
                color: "#d68322",
                marginLeft: "25px",
              }}
            >
              <img src={step1to4} style={{ width: "100px", height: "90px" }} />
            </Typography>
            <Typography
              style={{
                fontSize: "35px",
                marginBottom: "12px",
              }}
            >
              <b>
                Decoder cu RDR și{" "}
                <div
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #000",
                    height: "29px",
                    width: "29px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "23px",
                    marginRight: "7px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "center",
                      marginBottom: "2px",
                      fontSize: "40px",
                      marginRight: "3px",
                    }}
                  >
                    +
                  </span>
                </div>
                exterioare pentru detecția erorilor
              </b>
            </Typography>
            {/* <div className="flashcards"></div> */}
            <div
              className={`flashCard ${isFlipped[7] ? "Flipped" : ""}`}
              onClick={() => flipCard(7)}
              style={{ alignSelf: "start" }}
            >
              <div className="Front">
                <h2>Cum funcționează decoderul ?</h2>
              </div>
              <div className="Back">
                <h3>
                  <ul className="listCoDec">
                    <li>
                      Starea inițială a registrului este{" "}
                      <mark>
                        RD<sub>0</sub> = 0
                      </mark>
                    </li>
                    <li>
                      pe primele n perioade de tact secvența r se adună cu
                      valorile selectate din registru, rezultatul se înscrie în
                      celula C<sub>k-1</sub>.
                    </li>
                    <li>
                      la <mark>tactul n</mark> se verifică{" "}
                      <mark>starea registrului </mark>: dacă este <mark>0</mark>
                      atunci <mark>r este o secvență corectă</mark> și{" "}
                      <mark>nu avem erori</mark> sau{" "}
                      <mark>erorile sunt nedetectabile</mark>
                    </li>
                    <li>
                      dacă la <mark>tactul n</mark>{" "}
                      <mark>starea registrului</mark> este{" "}
                      <mark>diferită de 0 se poate face detecția erorii</mark>,
                      prin calcularea stărilor S<sub>n+1</sub>, S<sub>n+2</sub>,
                      ..., S<sub>2n</sub>,{" "}
                      <mark>
                        până când se obține starea fixă: S<sub>x</sub>
                      </mark>
                      .
                    </li>
                    <li>
                      <mark style={{ backgroundColor: "#b3e882" }}>
                        Dacă există o eroare pe poziția i, starea fixă va fi la
                        tactul n+(n-i-1)
                      </mark>
                    </li>
                  </ul>
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              ></div>
              <img
                src={decodor}
                style={{
                  marginLeft: "1800px",
                  height: "500px",
                  width: "900px",
                }}
              />
            </div>
            <Typography variant="h5" style={{ marginTop: "25px" }}>
              <b>
                <PriorityHighIcon style={{ color: "red" }} />
                Observație :
              </b>
              <span className="obs">
                Sindromul S care se regăsește în starea RDR la momentul t=n : S
                <sub>n</sub> ≠ 0 nu este egal cu restul (r(x))/(g(x)), ci o
                modificare a formei acestuia, dar care permite însă detecția
                erorii.
              </span>
            </Typography>
          </div>
          <div className="DimensionareContainer">
            <Typography
              style={{
                alignSelf: "start",
                fontSize: "40px",
                color: "#d68322",
                marginLeft: "25px",
              }}
            >
              <img src={finish} style={{ width: "100px", height: "90px" }} />
            </Typography>
            <Typography
              style={{
                fontSize: "35px",
                marginBottom: "12px",
              }}
            >
              <b>
                Decoder cu RDR și{" "}
                <div
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #000",
                    height: "29px",
                    width: "29px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "23px",
                    marginRight: "7px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "center",
                      marginBottom: "2px",
                      fontSize: "40px",
                      marginRight: "3px",
                    }}
                  >
                    +
                  </span>
                </div>
                exterioare pentru corecția erorilor
              </b>
            </Typography>
            {/* <div className="flashcards"></div> */}
            <div
              className={`flashCard ${isFlipped[7] ? "Flipped" : ""}`}
              onClick={() => flipCard(7)}
              style={{ alignSelf: "start" }}
            >
              <div className="Front">
                <h2>
                  Cum se corectează erorile identificate la pasul anterior?
                </h2>
              </div>
              <div className="Back">
                <h3>
                  <ul className="listCoDec">
                    <li>
                      odată ce întregul cuvânt este recepționat (după cele n
                      tacte), eroarea poate deveni detectabilă după cum am
                      observat la pasul anterior
                    </li>
                    <li>
                      dacă la <mark>tactul n</mark>
                      <mark>starea registrului</mark> este
                      <mark>
                        diferită de 0(practic încercăm prin această metodă
                        matematică să localizăm eroarea din secvența
                        recepționată)
                      </mark>
                      , deci se trece la calcularea stărilor S<sub>n+1</sub>, S
                      <sub>n+2</sub>, ..., S<sub>2n</sub>,
                      <mark>
                        până când se obține starea fixă: S<sub>x</sub>
                      </mark>
                    </li>
                    <li>
                      <mark style={{ backgroundColor: "#b3e882" }}>
                        dacă există o eroare pe poziția i, starea fixă va fi la
                        tactul n+(n-i-1)
                      </mark>
                    </li>
                    <li>
                      în cazul codurilor ciclice, corecția se realizează pe
                      durata (n+1, 2n), adunând valoarea „1” pe poziția ce
                      conține eroarea
                    </li>
                    <li>
                      deci pentru corecția erorilor cu coduri ciclice sunt
                      necesare 2n tacte.
                    </li>
                    <li>
                      <mark
                        style={{ backgroundColor: "yellow", color: "#000" }}
                      >
                        starea fixă a RS este [ 1 0 … 0 ]
                      </mark>
                      , adică toate celulele vor fi nule, mai puțin C
                      <sub>0</sub>.
                    </li>
                  </ul>
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={decoderptcorectie}
                  style={{
                    marginLeft: "1800px",
                    height: "500px",
                    width: "900px",
                  }}
                />
              </div>
            </div>

            <Typography variant="h5" style={{ marginTop: "25px" }}>
              <b>
                <PriorityHighIcon style={{ color: "red" }} />
                Observație 1:
              </b>
              <span className="obs">
                Dacă starea fixă va fi pe tactul 2n, atunci am avut stare fixă
                și pe tactul n.
              </span>
              <Typography variant="h5" style={{ marginTop: "25px" }}>
                <b>
                  <PriorityHighIcon style={{ color: "red" }} />
                  Observație 2:
                </b>
                <span className="obs">
                  De remarcat faptul că daca starea ( 1 0 0 ....0 ) s-ar obține
                  pe durata (1, n ), aceasta ar genera corecții false, de unde
                  necesitatea ca funcționarea P<sub>2</sub> să fie întreruptă.
                </span>
              </Typography>
            </Typography>
          </div>
        </div>
        <ScrollMessage />
      </div>
    </Layout>
  );
};

export default Lecture;
