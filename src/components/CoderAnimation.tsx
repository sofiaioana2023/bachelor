import React from "react";
import { labContext } from "../helpers/Contexts";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { MySketch } from "../componentsLab/MySketck";
import { Box, Button } from "@mui/material";

const CoderAnimation = () => {
  const { labState, setLabState } = React.useContext(labContext);
  const [userInput, isUserInput] = React.useState<boolean>(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isInputDisabled, setIsInputDisabled] = React.useState(false);
  const [informationByUser, setInformationByUser] = React.useState<string>("");
  let C2 = 0; // ecran
  let C1 = 0; // ecran
  let C0 = 0; // ecran
  let valoareBitRedundant = 0;
  let celuleRegistru = [C2, C1, C0];
  const informatie = informationByUser.split("").map(Number);

  let sumator1 = ""; // ecran
  let sumator2 = ""; // ecran
  let cuvantDeCod = ""; // ecran
  let stareRDRLam: number[] = []; // ecran
  let tact =
    "Registrul și sumatoarele se află inițial în starea de blocare, apasă pe butonul START pentru a începe codarea.";
  let tactm = "4";
  let tactCanvas = 0;
  const [wrapProps, setWrapProps] = React.useState<{
    bitDeInfo?: number;
    celuleRegistru?: number[];
    sumator1?: string;
    sumator2?: string;
    valoareBitRedundant?: number;
    cuvantDeCod?: string;
    tact: string;
    tactCanvas: number;
    informationByUser: string;
    currentStep: number;
  }>({
    sumator1: "1",
    sumator2: "1",
    valoareBitRedundant,
    cuvantDeCod,
    celuleRegistru,
    bitDeInfo: undefined,
    tact,
    tactCanvas,
    informationByUser: "",
    currentStep: 0,
  });

  function* generator(i: number) {
    yield firstFor(i);
    yield firstFor(i + 1);
    yield firstFor(i + 2);
    yield firstFor(i + 3);
    yield secondFor(1);
    yield secondFor(2);
    yield secondFor(3);
  }

  const firstFor = (i: number) => {
    setIsInputDisabled(true);
    tact = `Coderul este la tactul ${i.toString()}`;
    sumator1 = String(celuleRegistru[1] ^ celuleRegistru[2]);
    sumator2 = String(
      celuleRegistru[1] ^ celuleRegistru[2] ^ informatie[i - 1]
    );
    console.log(sumator2, "((((((");
    C2 = Number(sumator2);
    celuleRegistru.unshift(C2);
    celuleRegistru.pop();
    console.log(`La tactul ${i} valorile din registru sunt ${celuleRegistru}`);
    if (i === informatie.length) {
      stareRDRLam = celuleRegistru;
    }
    cuvantDeCod += informatie[i - 1];
    setWrapProps((prev) => {
      return {
        ...prev,
        celuleRegistru,
        bitDeInfo: informatie[i - 1],
        cuvantDeCod,
        sumator2,
        tact,
        currentStep: i,
      };
    });
    return {
      celuleRegistru,
      bitDeInfo: informatie[i - 1],
      sumator2,
      cuvantDeCod,
      tact,
    };
  };

  const secondFor = (k: number) => {
    console.log(stareRDRLam);
    tact = `Coderul este la tactul ${Number(tactm) + k}`;
    tactCanvas = Number(tactm) + k;

    sumator1 = String(stareRDRLam[1] ^ stareRDRLam[2]);
    sumator2 = String(Number(sumator1) ^ Number(sumator1));
    valoareBitRedundant = Number(sumator1);
    C2 = Number(sumator2);
    celuleRegistru.unshift(C2);
    celuleRegistru.pop();
    console.log(
      `La tactul ${
        k + informatie.length
      } valorile din registru sunt ${celuleRegistru} si bitul redundant este ${valoareBitRedundant}`
    );
    cuvantDeCod += valoareBitRedundant.toString();
    setWrapProps({
      ...wrapProps,
      sumator1,
      sumator2,
      valoareBitRedundant,
      cuvantDeCod,
      tact,
      tactCanvas,
      currentStep: k + 4,
    });
    return {
      sumator1,
      sumator2,
      valoareBitRedundant,
      cuvantDeCod,
      tact,
      tactCanvas,
    };
  };

  const gen = React.useMemo(() => generator(1), [userInput, informationByUser]);

  const sketchProps = wrapProps;
  const handlesetInformationByUser = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInformationByUser(e.target.value);
    setWrapProps((prev) => {
      return { ...prev, informationByUser: e.target.value };
    });
    isUserInput(true);
  };
  const handleStartClick = () => {
    if (userInput) {
      gen.next();
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: "800px",
          height: "500px",
          position: "relative",
          margin: "0px 500px 400px 0px",
        }}
      >
        <ReactP5Wrapper sketch={(p5) => MySketch(p5, sketchProps)} />
      </Box>
      <form>
        <label>Introdu biții de informație :</label>
        <input
          type="text"
          disabled={isInputDisabled}
          placeholder="a6a5a4a3"
          value={informationByUser}
          onChange={handlesetInformationByUser}
        />
      </form>

      {userInput && (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontWeight: "800",
            margin: "25px 0px",
            width: "300px",
            height: "60px",
            fontSize: "20px",
          }}
          onClick={handleStartClick}
        >
          START
        </Button>
      )}
      {tact === "7" && <div>Selectează bitul care va fi eronat</div>}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontWeight: "800px",
            margin: "25px 0px",
            width: "300px",
            height: "60px",
            fontSize: "30px",
          }}
          onClick={() => setLabState("meniu")}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "aliceblue",
            fontWeight: "800px",
            margin: "25px 0px",
            width: "300px",
            height: "60px",
            fontSize: "30px",
          }}
          onClick={() => setLabState("meniu")}
        >
          NEXT
        </Button>
      </div>
      <div>{informatie}</div>
    </div>
  );
};

export default CoderAnimation;
