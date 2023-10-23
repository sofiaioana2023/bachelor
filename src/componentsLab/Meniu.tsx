import React, { useContext } from "react";
import { labContext } from "../helpers/Contexts";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Meniu = () => {
  const { setLabState, labState } = useContext(labContext);
  const navigate = useNavigate();

  return (
    <div className="MeniuLab">
      <h1 style={{ marginBottom: "300px" }}>
        Cod Hamming ciclic corector de eroare
      </h1>
      <div className="submenu">
        <Link to={"/lecture"}>
          <Button variant="contained" style={{ marginBottom: "10px" }}>
            Aspecte Teoretice
          </Button>
        </Link>
        <Button variant="contained" onClick={() => setLabState("coder")}>
          Coder
        </Button>

        {/* <Button onClick={() => setLabState("coder")}>
          click pentru a coda
        </Button> */}
      </div>
    </div>
  );
};

export default Meniu;
