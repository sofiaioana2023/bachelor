import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CoderAnimation from "../components/CoderAnimation";
import Meniu from "../componentsLab/Meniu";
import EndLab from "../componentsLab/EndLab";
import { labContext } from "../helpers/Contexts";
import AlegePol from "../componentsLab/AlegePol";

const Application = () => {
  const [labState, setLabState] = useState<string>("meniu");

  return (
    <Layout>
      <div className="MeniuLab">
        <div className="applicationLabStates">
          <labContext.Provider value={{ labState, setLabState }}>
            {labState === "meniu" && <Meniu />}
            {labState === "coder" && <CoderAnimation />}
            {labState === "end" && <EndLab />}
            {labState === "alegepolinom" && <AlegePol />}
          </labContext.Provider>
        </div>
      </div>
    </Layout>
  );
};

export default Application;
