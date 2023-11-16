import React, { useContext, useEffect, useRef, useState } from "react";
import { labContext } from "../helpers/Contexts";
import { Button, Typography } from "@mui/material";
import phone from "../icons/backtomenuphoto.png";
import MAP from "../icons/MAP.png";
import { handleAplicatie } from "../pages/HomePage";
import { handleCurs } from "../pages/HomePage";
import { handleQuiz } from "../pages/HomePage";
import { useTranslation } from "react-i18next";
const EndLab = () => {
  const { labState, setLabState, userName, setUserName } =
    useContext(labContext);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const { t } = useTranslation();
  const refreshTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  useEffect(() => {
    const timeID = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  }, []);

  const moveToMenu = () => {
    setIsHovered(!isHovered);
    setLabState("meniu");
  };

  return (
    <div style={{ height: "1400px", width: "1300px" }}>
      <div
        onClick={() => setLabState("meniu")}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "500px",
        }}
      >
        <Typography
          variant="h2"
          style={{ margin: "0px 0px 150px 0px", textAlign: "center" }}
        >
          <b>
            {t("Felicitări")} {userName},
            {t("ai ajuns la finalul laboratorului!")}
          </b>
        </Typography>
        <div className="phoneButton">
          <img src={phone} />
          <button
            className={
              isHovered ? "positionedButton:hover" : "positionedButton"
            }
            style={{
              color: "aliceblue",
              fontWeight: "800px",
              margin: "125px 0px 100px 0px",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              fontSize: "30px",
              alignSelf: "center",
              boxShadow:
                " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
            }}
            onClick={moveToMenu}
          ></button>
          <div className="time">
            <b>{time}</b>
          </div>
        </div>

        <div className="mapButtons">
          <img src={MAP} style={{ height: "400px", width: "500px" }} />
          <a title={t("Quiz")}>
            <button
              className={
                isHovered ? "positionedButton1:hover" : "positionedButton1"
              }
              style={{
                color: "aliceblue",
                fontWeight: "800px",
                margin: "125px 0px 100px 0px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "30px",
                alignSelf: "center",
                boxShadow:
                  " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
              }}
              onClick={handleQuiz}
            ></button>
          </a>
          <a title={t("Curs")}>
            <button
              className={
                isHovered ? "positionedButton2:hover" : "positionedButton2"
              }
              style={{
                color: "aliceblue",
                fontWeight: "800px",
                margin: "125px 0px 100px 0px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "30px",
                alignSelf: "center",
                boxShadow:
                  " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
              }}
              onClick={handleCurs}
            ></button>
          </a>
          <a title={t("Lucrare de laborator")}>
            <button
              className={
                isHovered ? "positionedButton3:hover" : "positionedButton3"
              }
              style={{
                color: "aliceblue",
                fontWeight: "800px",
                margin: "125px 0px 100px 0px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "30px",
                alignSelf: "center",
                boxShadow:
                  " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
              }}
              onClick={handleAplicatie}
            ></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EndLab;
