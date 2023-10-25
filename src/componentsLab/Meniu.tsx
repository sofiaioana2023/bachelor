import React, { useContext } from "react";
import { labContext } from "../helpers/Contexts";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Meniu = () => {
  const { setLabState, labState } = useContext(labContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          marginBottom: "300px",
          fontSize: "40px",
        }}
      >
        (De)codarea codului Hamming ciclic corector de o eroare prin circuitul
        bazat pe RDR cu sumatoare modulo-2 exterioare
      </h1>
      <div className="submenu">
        <Link to={"/lecture"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontWeight: "800px",
              margin: "25px 0px",
              width: "300px",
              height: "60px",
            }}
          >
            <b>Aspecte Teoretice</b>
          </Button>
        </Link>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontWeight: "800px",
            margin: "25px 0px",
            width: "300px",
            height: "60px",
          }}
          onClick={() => setLabState("alegepolinom")}
        >
          <b>Începe simularea</b>
        </Button>
        <Link to={"/about"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "aliceblue",
              fontWeight: "800px",
              margin: "25px 0px",
              width: "300px",
              height: "60px",
            }}
          >
            <b>Autori</b>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Meniu;
