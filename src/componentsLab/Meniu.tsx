import React, { useContext, useState } from "react";
import { labContext } from "../helpers/Contexts";
import {
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import title from "../icons/title.png";
import { useTranslation } from "react-i18next";

const Meniu = () => {
  const { t } = useTranslation();
  const { setLabState, labState, userName, setUserName } =
    useContext(labContext);

  const navigate = useNavigate();
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "300px",
          fontWeight: "500",
          textAlign: "center",
        }}
        className="titleApplication"
      >
        <img src={title} style={{ width: "1300px" }} />
      </div>

      <div className="submenu">
        <ThemeProvider theme={theme}>
          <div
            style={{
              letterSpacing: "3px",
              fontSize: "35px",
            }}
          >
            <b>{t("Enter name:")}</b>
          </div>
          <TextField
            color="primary"
            focused
            value={userName}
            onChange={handleUserName}
            style={{
              width: "400px",
              height: "80px",
              fontSize: "26px",
              margin: "25px 0px 0px 0px",
            }}
          />
        </ThemeProvider>

        <Link to={"/lecture"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontSize: "25px",

              margin: "25px 0px",
              width: "400px",
              height: "80px",
              boxShadow:
                " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
            }}
          >
            <b>{t("Aspecte Teoretice")}</b>
          </Button>
        </Link>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontSize: "25px",
            margin: "25px 0px",
            width: "400px",
            height: "80px",
            boxShadow:
              " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
          }}
          onClick={() => setLabState("alegepolinom")}
        >
          <b>{t("Începe simularea")}</b>
        </Button>
        <Link to={"/about"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontSize: "25px",
              margin: "25px 0px",
              width: "400px",
              height: "80px",
              boxShadow:
                " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
            }}
          >
            <b>{t("Autori")}</b>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Meniu;
