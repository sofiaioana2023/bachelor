
import Layout from "../components/Layout";
import { useState } from "react";
import CoderAnimation from "../components/CoderAnimation";
import CoderAnimation2 from "../components/CoderAnimation2";
import Meniu from "../componentsLab/Meniu";
import EndLab from "../componentsLab/EndLab";
import { labContext } from "../helpers/Contexts";
import AlegePol from "../componentsLab/AlegePol";

const Application = () => {
  const [labState, setLabState] = useState<string>("meniu");
  const [userName, setUserName] = useState<string>("");

  return (
    <Layout>
      <div className="MeniuLab">
        <div className="applicationLabStates">
          <labContext.Provider
            value={{ labState, setLabState, setUserName, userName }}
          >
            {labState === "meniu" && <Meniu />}
            {labState === "coder" && <CoderAnimation />}
            {labState === "coder2" && <CoderAnimation2 />}
            {labState === "end" && <EndLab />}
            {labState === "alegepolinom" && <AlegePol />}
          </labContext.Provider>
        </div>
      </div>
    </Layout>
  );
};

export default Application;
