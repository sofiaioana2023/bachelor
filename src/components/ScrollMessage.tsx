import React, { useEffect, useState } from "react";
import congrats from "../icons/congrats.png";
import { Button } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";

const ScrollMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold =
        0.9 * (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPosition >= threshold) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTheApplication = () => {
    window.location.pathname = "/application";
  };

  return (
    <div id="scrollMessage" style={{ display: showMessage ? "block" : "none" }}>
      {/*
       */}
      <MoodIcon style={{ height: "50px", width: "50px" }} />
      Felicitări, ai parcurs tot cursul ! Acum poți parcurge{" "}
      <div onClick={goToTheApplication} className="buttonCONGRATS">
        lucrarea de laborator.
      </div>
    </div>
  );
};

export default ScrollMessage;
