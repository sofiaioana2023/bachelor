import React, { useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AlertProps,
  Box,
  Button,
  Snackbar,
  Typography,
} from "@mui/material";

import finish from "../icons/finish.png";
import step1to4 from "../icons/steps1to4.png";
import decoderptcorectie from "../icons/decoderptcorectie.png";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import codor from "../icons/codeec.png";

import decodor from "../icons/decod.png";
import CeSuntRDR from "../components/LectureComp/CeSuntRDR";
import CodareAlgebrica from "../components/LectureComp/CodareAlgebrica";
import ScrollMessage from "../components/ScrollMessage";
import { useTranslation } from "react-i18next";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAlert from "@mui/material/Alert";

const Lecture = () => {
  const [isFlipped, setIsFlipped] = useState(Array(10).fill(false));

  const flipCard = (index: number) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };
  const { t, i18n} = useTranslation();
  const selectedLanguage = i18n.language

  const navigate = useNavigate();
  const simulate = () => {
    navigate("/application");
  };

  return (
    <Layout>
      <div className="containerLecture">
        <div className="backgroundCurs" style={{ marginBottom: "25px" }}>
          <div className="HammingCode1">
            <b>
              {t(
                "Codul Hamming ciclic corector de o eroare: algoritmul de codare și decodare ciclică prin RDR cu sumatoare modulo 2 exterioare"
              )}
            </b>
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
              <b>{t("Introducere")}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5">
              <span style={{ marginLeft: "25px" }}></span>
              {t(
                "Codurile ciclice corectoare de o eroare, de lungime n sunt de fapt coduri Hamming ciclice corectoare de o eroare cu structură sistematică. Acestea pot fi comparate cu codul BCH, corector de o singură eroare (t = 1), de lungime n = 2"
              )}
              <sup>k</sup>-1,{" "}
              {t(
                "al cărui polinom generator g(x) este chiar polinomul primitiv de gradul k care generează pe GF(2)"
              )}
              <sup>k</sup>.
            </Typography>
            <Typography variant="h5">
              <span style={{ marginLeft: "25px" }}></span>
              {t(
                "Spre deosebire codurile Hamming bloc, ale căror cuvinte de cod aveau structură nesistematică, în cazul codurilor Hamming ciclice corectoare de o eroare, forma cuvântului de cod este una sistematică."
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
              <b>{t("Cuprins")}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box style={{ margin: "50px 20px" }}>
                <Timeline
                  position="alternate"
                  style={{ backgroundColor: "#B5B5B3" }}
                >
                  <TimelineItem style={{ backgroundColor: "#B5B5B3" }}>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "#4285F5",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <TimelineConnector
                        style={{
                          backgroundColor: "#000",
                          height: "80px",
                          width: "5px",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <a
                        href="#CodareAlgebrica"
                        style={{ fontSize: "1.5vw", letterSpacing: "3px" }}
                      >
                        {" "}
                        <i>
                          <b>{t("Codare algebrică")}</b>
                        </i>
                      </a>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem style={{ backgroundColor: "#B5B5B3" }}>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "#f5ab3d",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <TimelineConnector
                        style={{
                          backgroundColor: "#000",
                          height: "80px",
                          width: "5px",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent>
                      {" "}
                      <a
                        href="#CeSuntRDR"
                        style={{ fontSize: "1.5vw", letterSpacing: "3px" }}
                      >
                        <p className="hoverchild2">
                          <i>
                            <b>
                              {t(
                                "Ce este un registru de deplasare cu reacție (RDR) ?"
                              )}
                            </b>
                          </i>
                        </p>
                      </a>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem style={{ backgroundColor: "#B5B5B3" }}>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "#31A853",
                          height: "25px",
                          width: "25px",
                        }}
                      />
                      <TimelineConnector
                        style={{
                          backgroundColor: "#000",
                          height: "80px",
                          width: "5px",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent>
                      <a
                        href="#(De)codareCiclicaPrinRDR"
                        style={{ fontSize: "1.5vw", letterSpacing: "3px" }}
                      >
                        <p className="hoverchild3">
                          <i>
                            <b>
                              {t(
                                "Algoritm de (de)codare ciclică utilizând RDR"
                              )}
                            </b>
                          </i>
                        </p>
                      </a>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion id="CodareAlgebrica">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
              <b>{t("Codare algebrică")}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "auto",
              }}
            >
              <CodareAlgebrica />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
              <b>{t("Ce este un registru de deplasare cu reacție (RDR) ?")}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                margin: "auto",
              }}
              id="CeSuntRDR"
            >
              <CeSuntRDR />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
              <b>{t("Algoritm de (de)codare ciclică utilizând RDR")}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            //acordeon dimensionare
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
                  <b>{t("Dimensionare")}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
                    <img
                      src={step1to4}
                      style={{ width: "100px", height: "90px" }}
                    />
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "35px",
                      letterSpacing: "5px",
                      marginBottom: "12px",
                    }}
                  >
                    <b>{t("Dimensionare:")}</b>
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
                          {t("Lungimea cuvantului de cod")}
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
                        <h3 className="information">
                          {t("biți de informație")}
                        </h3>
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
                        <h3 className="control">{t("biți de control")}</h3>
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
                        <h3>{t("corectează o singură eroare")}</h3>
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
                            <span
                              className="biggerLetter"
                              style={{ color: "#000" }}
                            >
                              ]
                            </span>
                          </span>
                        </h2>
                      </div>
                      <div className="back">
                        <h3> {t("cuvânt de cod cu structură sistematică")}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* acordeoncoder */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
                  <b>{t("Coder")}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="DimensionareContainer">
                  <Typography
                    style={{
                      alignSelf: "start",
                      fontSize: "40px",
                      color: "#d68322",
                      marginLeft: "25px",
                    }}
                  >
                    <img
                      src={step1to4}
                      style={{ width: "100px", height: "90px" }}
                    />
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "35px",
                      marginBottom: "12px",
                    }}
                  >
                    <b>
                      {t("Coder cu RDR și")}
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
                          margin: "0px 7px",
                        }}
                      >
                        <span style={{ margin: "0px 3px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              verticalAlign: "center",
                              marginBottom: "2px",
                              fontSize: "40px",
                              marginRight: "5px",
                            }}
                          >
                            +
                          </span>
                        </span>
                      </div>
                      {t("exterioare")}
                    </b>
                  </Typography>

                  <div
                    className={`flashCard ${isFlipped[5] ? "Flipped" : ""}`}
                    onClick={() => flipCard(5)}
                    style={{ alignSelf: "start" }}
                  >
                    <div className="Front">
                      <h2>
                        {t("Ce se întâmplă pe durata primelor")}
                        <span className="information"> m</span>
                        {t(" perioade de tact?")}
                      </h2>
                    </div>
                    <div className="Back">
                      <h3>
                        <ul className="listCoDec">
                          <li>{t("comutatorul K se află în poziția 1")}</li>
                          <li>
                            {t(
                              "biții de la intrare ajung la ieșire, astfel ca"
                            )}{" "}
                            <span className="information">
                              {t("biții de informație")}
                            </span>{" "}
                            {t(
                              "se vor afla pe cele mai semnificative poziții în cuvântul de cod v"
                            )}
                          </li>
                          <li>
                            {t("biții de la intrare se adună prin sumatorul")} S
                            <sub>2</sub>{" "}
                            {t(
                              "cu valorile din celulele registrului, formând în registru relații liniare"
                            )}
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
                        {t("Ce se întâmplă pe durata următoarelor")}{" "}
                        <span className="control">k</span>{" "}
                        {t("perioade de tact?")}
                      </h2>
                    </div>
                    <div className="Back">
                      <h3>
                        <ul className="listCoDec">
                          <li>
                            {t(
                              "comutatorul K este în poziția 2, la intrare nu se vor mai afla biți"
                            )}
                          </li>
                          <li>
                            {t("în sumatorul")} S<sub>1</sub>{" "}
                            {t(
                              "se adună relațiile liniare existente în celulele registrului, obținându-se astfel la ieșire "
                            )}
                            <span className="control">
                              {t("biții de control")}
                            </span>
                          </li>
                          <li>
                            {t("în celula")} C<sub>k-1</sub>
                            {t("se obține 0 datorită sumatorului S")}{" "}
                            <sub>2</sub> {t("care adună ieșirea sumatorului")} S
                            <sub>1</sub> {t("de două ori")}
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
                      {t("Observație:")}
                    </b>
                    <span className="obs">
                      {t(
                        "Conexiunea dintre celule și sumatorul S1 se realizează atunci când valoarea coeficientului corespunzător din g(x) este 1"
                      )}
                      ({t("celula")} C<sub>0</sub>{" "}
                      {t(
                        "este tot timpul conectată la sumatorul S1 deoarece coeficientul"
                      )}
                      g<sub>0</sub> = 1.)
                    </span>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* acordeon detectie */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
                  <b>{t("Decoder pentru detectia erorilor")}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="DimensionareContainer">
                  <Typography
                    style={{
                      alignSelf: "start",
                      fontSize: "40px",
                      color: "#d68322",
                      marginLeft: "25px",
                    }}
                  >
                    <img
                      src={step1to4}
                      style={{ width: "100px", height: "90px" }}
                    />
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "35px",
                      marginBottom: "12px",
                    }}
                  >
                    <b>
                      {t("Decoder cu RDR și")}{" "}
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
                      {t("exterioare pentru detecția erorilor")}
                    </b>
                  </Typography>
                  {/* <div className="flashcards"></div> */}
                  <div
                    className={`flashCard ${isFlipped[7] ? "Flipped" : ""}`}
                    onClick={() => flipCard(7)}
                    style={{ alignSelf: "start" }}
                  >
                    <div className="Front">
                      <h2>{t("Cum funcționează decoderul ?")}</h2>
                    </div>
                    <div className="Back">
                      <h3>
                        <ul className="listCoDec">
                          <li>
                            {t("Starea inițială a registrului este")}{" "}
                            <mark>0</mark>
                          </li>
                          <li>
                            {t(
                              "pe primele n perioade de tact secvența r se adună cu valorile selectate din registru, rezultatul se înscrie în celula"
                            )}{" "}
                            C<sub>k-1</sub>.
                          </li>
                          <li>
                            {t("la")} <mark>{t("tactul")} n</mark>{" "}
                            {t("se verifică")}{" "}
                            <mark>{t("starea registrului ")}</mark>:{" "}
                            {t("dacă este")} <mark>0</mark>
                            {t("atunci")}{" "}
                            <mark>{t("r este o secvență corectă")}</mark>{" "}
                            {t("și")} <mark>{t("nu avem erori")}</mark>{" "}
                            {t("sau")}{" "}
                            <mark>{t("erorile sunt nedetectabile")}</mark>
                          </li>
                          <li>
                            {t("dacă la")} <mark>{t("tactul")} n</mark>{" "}
                            <mark>{t("starea registrului")}</mark> {t("este")}{" "}
                            <mark>
                              {t("diferită de 0 se poate face detecția erorii")}
                            </mark>
                            ,{t("prin calcularea stărilor S")}
                            <sub>n+1</sub>, S<sub>n+2</sub>, ..., S<sub>2n</sub>
                            ,{" "}
                            <mark>
                              {t("până când se obține starea fixă: S")}
                              <sub>x</sub>
                            </mark>
                            .
                          </li>
                          <li>
                            <mark style={{ backgroundColor: "#b3e882" }}>
                              {t(
                                "Dacă există o eroare pe poziția i, starea fixă va fi la tactul n+(n-i-1)"
                              )}
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
                      {t("Observație")} :
                    </b>
                    <span className="obs">
                      {t(
                        "Sindromul S care se regăsește în starea RDR la momentul t=n"
                      )}{" "}
                      : S<sub>n</sub> ≠ 0{" "}
                      {t(
                        "nu este egal cu restul (r(x))/(g(x)), ci o modificare a formei acestuia, dar care permite însă detecția erorii."
                      )}
                    </span>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* acordeoncorectie */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "26px", letterSpacing: "3px" }}>
                  <b>{t("Decoder pentru corectia erorilor")}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="DimensionareContainer">
                  <Typography
                    style={{
                      alignSelf: "start",
                      fontSize: "40px",
                      color: "#d68322",
                      marginLeft: "25px",
                    }}
                  >
                    <img
                      src={finish}
                      style={{ width: "100px", height: "90px" }}
                    />
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "35px",
                      marginBottom: "12px",
                    }}
                  >
                    <b>
                      {t("Decoder cu RDR și")}
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
                      {t("exterioare pentru corecția erorilor")}
                    </b>
                  </Typography>
                 
                  <div
                    className={`flashCard ${isFlipped[7] ? "Flipped" : ""}`}
                    onClick={() => flipCard(7)}
                    style={{ alignSelf: "start" }}
                  >
                    <div className="Front">
                      <h2>
                        {t(
                          "Cum se corectează erorile identificate la pasul anterior?"
                        )}
                      </h2>
                    </div>
                    <div className="Back">
                      <h3>
                        <ul className="listCoDec">
                          <li>
                            {t(
                              "odată ce întregul cuvânt este recepționat (după cele n tacte), eroarea poate deveni detectabilă după cum am observat la pasul anterior"
                            )}
                          </li>
                          <li>
                            {t("dacă")} t{"la"} <mark>{t("tactul")} n</mark>
                            <mark>{t("starea registrului")}</mark> {t("este")}
                            <mark>
                              {t(
                                "diferită de 0(practic încercăm prin această metodă matematică să localizăm eroarea din secvența recepționată) "
                              )}
                            </mark>
                            , {t("deci se trece la calcularea stărilor")}S
                            <sub>n+1</sub>, S<sub>n+2</sub>, ..., S<sub>2n</sub>
                            ,
                            <mark>
                              {t("până când se obține starea fixă:")} S
                              <sub>x</sub>
                            </mark>
                          </li>
                          <li>
                            <mark style={{ backgroundColor: "#b3e882" }}>
                              {t(
                                "dacă există o eroare pe poziția i, starea fixă va fi la tactul n+(n-i-1)"
                              )}
                            </mark>
                          </li>
                          <li>
                            {t(
                              "în cazul codurilor ciclice, corecția se realizează pe durata (n+1, 2n), adunând valoarea „1” pe poziția ce conține eroarea"
                            )}
                          </li>
                          <li>
                            {t(
                              "deci pentru corecția erorilor cu coduri ciclice sunt necesare 2n tacte."
                            )}
                          </li>
                          <li>
                            <mark
                              style={{
                                backgroundColor: "yellow",
                                color: "#000",
                              }}
                            >
                              {t("starea fixă a RS este [ 1 0 … 0 ]")}
                            </mark>
                            , {t("adică toate celulele vor fi nule, mai puțin")}{" "}
                            C<sub>0</sub>.
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
                      {selectedLanguage ==="ro" &&<img
                        src={decoderptcorectie}
                        style={{
                          marginLeft: "1800px",
                          height: "500px",
                          width: "900px",
                        }}
                      />}
                    </div>
                  </div>

                  <Typography variant="h5" style={{ marginTop: "25px" }}>
                    <b>
                      <PriorityHighIcon style={{ color: "red" }} />
                      {t("Observație")} 1:
                    </b>
                    <span className="obs">
                      {t(
                        "Dacă starea fixă va fi pe tactul 2n, atunci am avut stare fixă și pe tactul n."
                      )}
                    </span>
                    <Typography variant="h5" style={{ marginTop: "25px" }}>
                      <b>
                        <PriorityHighIcon style={{ color: "red" }} />
                        {t("Observație")} 2:
                      </b>
                      <span className="obs">
                        {t(
                          "De remarcat faptul că daca starea ( 1 0 0 ....0 ) s-ar obține pe durata (1, n ), aceasta ar genera corecții false, de unde necesitatea ca funcționarea "
                        )}
                        P<sub>2</sub> {t("să fie întreruptă")}.
                      </span>
                    </Typography>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Button
          variant="contained"
          color="success"
          style={{ height: "80px", fontSize: "26px", letterSpacing: "5px" }}
          onClick={simulate}
        >
          <b>{t("Simuleaza codare si decodarea")}</b>
        </Button>
      </div>
    </Layout>
  );
};

export default Lecture;
