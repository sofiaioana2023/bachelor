import React, { useContext, useEffect, useRef } from "react";
import { labContext } from "../helpers/Contexts";
import { Button, Typography } from "@mui/material";

const EndLab = () => {
  const { labState, setLabState, userName, setUserName } =
    useContext(labContext);

  const handleKeyPress = (event: any) => {
    console.log("Key pressed:", event.key);
    console.log("Key code:", event.keyCode);
    if (event.key === " " || event.key === "Enter") {
      setLabState("meniu");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    console.log("Active Element:", document.activeElement);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      onClick={() => setLabState("meniu")}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        fontWeight: "500px",
      }}
    >
      <Typography variant="h2">
        <b> Felicitări {userName}, ai ajuns la finalul laboratorului!</b>
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#000",
          color: "aliceblue",
          fontWeight: "800px",
          margin: "125px 0px 0px 0px",

          width: "500px",
          height: "60px",
          fontSize: "30px",
          alignSelf: "center",
          boxShadow:
            " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
        }}
        onClick={() => setLabState("meniu")}
      >
        BACK TO THE MENU
      </Button>
    </div>
  );
};

export default EndLab;
