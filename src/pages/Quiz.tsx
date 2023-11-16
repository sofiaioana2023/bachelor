import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import quizRO from "../helpers/testDataRO";
import quizEN from "../helpers/testDataEN";
import quizFR from "../helpers/testDataFR";
import { Button, CircularProgress, Typography } from "@mui/material";
import solutionPNG from "../icons/icons8-solution-96.png";
import questionIcon from "../icons/icons8-question-64.png";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import good from "../icons/icons8-good-60.png";
import prize from "../icons/icons8-prize-60.png";
import sadscor from "../icons/sadscor.png";
import like from "../icons/icons8-correct-64.png";
import dislike from "../icons/icons8-incorrect-64.png";
import { useTranslation } from "react-i18next";
interface QuizItem {
  question: string;
  answers: string[];
  correctAnswers: string[];
}

interface AnswerButtonProps {
  answer: string;
  onClick: () => void;
  isClicked: boolean;
}
function AnswerButton({ answer, onClick, isClicked }: AnswerButtonProps) {
  return (
    <Button
      variant="text"
      style={{
        width: "600px",
        backgroundColor: isClicked ? "#7ECEED" : "#ebedaf",
        margin: "10px",
        color: "#000",
        height: "100px",
      }}
      onClick={onClick}
    >
      <b>{answer}</b>
    </Button>
  );
}

const Quiz = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isSolutionShown, setIsSolutionShown] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [userScor, setUserScor] = useState<number>(0);
  const [isGreen, setIsGreen] = useState<boolean>(false);
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);

  const [image, setImage] = useState<string>("");
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  useEffect(() => {
    if (i18n.language === "en") {
      setQuiz(quizEN);
    } else if (i18n.language === "fr") {
      setQuiz(quizFR);
    } else setQuiz(quizRO);
  }, [i18n.language]);

  const next = () => {
    setIsSolutionShown(true);
    if (userAnswer.length === 0 && !isSolutionShown) {
      alert("Selecteaza un raspuns");
    } else {
      setTimeout(() => {
        setIsSolutionShown(false);
        setIndex(index + 1);
      }, 3000);

      const isCorrect =
        userAnswer.length === quiz![index].correctAnswers.length &&
        userAnswer.every((answer) =>
          quiz![index].correctAnswers.includes(answer)
        );

      if (isCorrect) {
        console.log("correct");
        setIsGreen(true);
        setAnswerHistory((prev) => [...prev, true]);
        setUserScor(userScor + 1);
      } else {
        setIsGreen(false);
        setAnswerHistory((prev) => [...prev, false]);
        console.log("incorrect");
      }

      console.log(userAnswer);
      console.log(`correct answers: ${quiz![index].correctAnswers}`);

      setUserAnswer([]);
    }
    if (userScor >= 0 && userScor < quiz!.length / 2) {
      setImage(sadscor);
    } else if (userScor >= quiz!.length / 2 && userScor <= quiz!.length - 1) {
      setImage(good);
    } else if (userScor === quiz!.length) {
      setImage(prize);
    }
  };

  const saveUserAnswer = (answer: string) => {
    if (userAnswer.includes(answer)) {
      setUserAnswer(
        userAnswer.filter((selectedAnswer) => selectedAnswer !== answer)
      );
    } else {
      setUserAnswer([...userAnswer, answer]);
    }
  };

  const goBack = () => {
    setIndex(0);
    setUserScor(0);
    setAnswerHistory([]);
  };

  return (
    <Layout>
      <div className="backgroundQuiz">
        <div className="test">
          {index <= quiz!.length - 1 && (
            <div
              style={{
                width: "1000px",
                height: "30px",
                backgroundColor: "#7eceed",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                marginBottom: "150px",
                boxShadow:
                  "0 -20px 10px -20px rgba(0,0,0,0.45) inset, 20px 0 10px -20px rgba(0,0,0,0.45) inset",
              }}
            >
              {quiz.map((_, index) => (
                <div
                  style={{
                    background:
                      answerHistory[index] === undefined
                        ? "transparent"
                        : answerHistory[index]
                        ? "green"
                        : "red",
                    width: `${1000 / quiz.length}px`,
                    marginRight: "1px",
                    borderRadius: "10px",
                    height: "30px",
                  }}
                ></div>
              ))}
            </div>
          )}
          {index <= quiz!.length - 1 ? (
            <div className="quizQA">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={questionIcon}
                  style={{ margin: " 35px 15px 0px 15px", height: "68px" }}
                />
                <p style={{ margin: "50px 0px 80px 0px", textAlign: "center" }}>
                  <b>{quiz![index].question}</b>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {quiz![index].answers.map(
                  (answer, answerIndex) =>
                    !isSolutionShown && (
                      <AnswerButton
                        key={answerIndex}
                        answer={answer}
                        onClick={() => {
                          saveUserAnswer(answer);
                        }}
                        isClicked={userAnswer.includes(answer)}
                      />
                    )
                )}

                {isSolutionShown && (
                  <div
                    style={{
                      height: "500px",
                      width: "1050px",
                      border: "3px solid #ebedaf",
                    }}
                  >
                    <p style={{ margin: "15px" }}>
                      <em>
                        <b style={{ letterSpacing: "2px" }}>{t("Soluție")}:</b>
                      </em>
                    </p>
                    <div style={{ margin: "0px 25px 0px 55px" }}>
                      {quiz![index].correctAnswers.map((correctAnswer) => (
                        <li>{correctAnswer};</li>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                      }}
                    >
                      <img
                        src={solutionPNG}
                        style={{
                          margin: " 0 auto",
                          height: "150px",
                          width: "150px",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="scornextButton">
                <div className="scorCercle">
                  <b>{index + 1}</b>
                  <span
                    style={{
                      fontSize: "23px",
                    }}
                  >
                    /{quiz!.length}
                  </span>
                </div>
                <Button
                  variant="contained"
                  onClick={next}
                  style={{
                    backgroundColor:
                      userAnswer.length === 0 ? "#ebedaf" : "#7ECEED",
                    width: "130px",
                    height: "50px",
                    marginTop: "25px",
                  }}
                  disabled={userAnswer.length === 0}
                >
                  <Typography style={{ color: "#000" }}>
                    <b>{userAnswer.length === 0 ? "DISABLED" : "NEXT"}</b>
                  </Typography>
                </Button>
              </div>
            </div>
          ) : (
            <div className="quizQA">
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    width: "400px",
                    textAlign: "center",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.9,
                    boxShadow: "0px 9px 30px rgba(130, 200, 30, 0.8)",
                    letterSpacing: "2px",
                  }}
                >
                  <b>{t("Rezultatul tău:")}</b>
                </div>
              </div>
              <div className="finalQuiz">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "1000px",
                    marginTop: "15px",
                  }}
                >
                  <div style={{ display: "flex", width: "100px" }}>
                    <img src={like} width={64} height={64} />
                    <div style={{ margin: "10px 0px 0px 50px " }}>
                      {userScor}
                    </div>
                  </div>
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                      value={userScor}
                      text={`${userScor}/${quiz!.length}`}
                      minValue={0}
                      maxValue={quiz!.length}
                    />
                  </div>
                  <div style={{ display: "flex", width: "100px" }}>
                    <img src={dislike} width={64} height={64} />
                    <div style={{ margin: "10px 0px 0px 50px " }}>
                      {quiz!.length - userScor}
                    </div>
                  </div>
                </div>
                <img
                  src={image}
                  width={250}
                  height={250}
                  style={{ margin: "35px 0px" }}
                />
                <div
                  style={{
                    width: "800px",
                    textAlign: "center",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.9,
                    boxShadow: "0px 9px 30px rgba(130, 200, 30, 0.8)",
                    letterSpacing: "2px",
                  }}
                >
                  <b>
                    {userScor >= 0 && userScor < quiz!.length / 2 ? (
                      <div>{t("Antrenează-te mai mult")}"</div>
                    ) : userScor >= quiz!.length / 2 &&
                      userScor <= quiz!.length - 1 ? (
                      <div>
                        {t(
                          "Ești pe drumul cel bun! Antrenează-te în continuare !"
                        )}
                      </div>
                    ) : (
                      <div>
                        {t(
                          "Felicitări!Ai răspuns corect la toate întrebările!"
                        )}
                      </div>
                    )}
                  </b>
                </div>
                <Button
                  variant="outlined"
                  onClick={goBack}
                  style={{
                    width: "200px",
                    height: "80px",
                    backgroundColor: "#7ECEED",
                    color: "#000",
                    letterSpacing: "3px",
                    margin: "70px 0px 0px 0px",
                  }}
                >
                  <b>{t("START NEW QUIZ")}</b>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
