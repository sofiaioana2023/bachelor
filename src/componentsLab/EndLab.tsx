import React, { useContext } from "react";
import { labContext } from "../helpers/Contexts";

const EndLab = () => {
  const { labState, setLabState } = useContext(labContext);
  return (
    <div>
      <button onClick={() => setLabState("meniu")}> start again codarea</button>
    </div>
  );
};

export default EndLab;
