import React, { useEffect, useMemo, useState } from "react";
import { labContext } from "../helpers/Contexts";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { MySketch } from "../componentsLab/MySketck";
import { Box, Button, TextField } from "@mui/material";
import slide1 from "../icons/tact00.png";
import slide2 from "../icons/tact1.png";
import slide3 from "../icons/tact2.png";
import slide4 from "../icons/tact3.png";
import slide5 from "../icons/tact4.png";
import slide6 from "../icons/tact5.png";
import slide7 from "../icons/tact6.png";
import slide8 from "../icons/tact7.png";
import decoderschema from "../icons/decoderschema.png";
import { useTranslation } from "react-i18next";

const CoderAnimation = () => {
  const { t } = useTranslation();
  const { labState, setLabState } = React.useContext(labContext);
  const [userInput, isUserInput] = React.useState<boolean>(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isInputDisabled, setIsInputDisabled] = React.useState(false);
  const [informationByUser, setInformationByUser] = React.useState<string>("");
  const [tactDOM, setTactDOM] = React.useState<number>(0);
  const [positionErrorByUser, setPositionErrorByUser] =
    React.useState<string>("");
  const [errorWord, setErrorWord] = React.useState<number[]>([]);
  const [wrongInformation, setWrongInformation] = React.useState<string>("");
  const [isDecoding, setisDecoding] = React.useState<boolean>(false);
  const [isDecodingStarted, setIsDecodingStarted] =
    React.useState<boolean>(false);
  const [k, setK] = useState(1);
  const [isStareFixaGasita, setIsStareFixaGasita] =
    React.useState<boolean>(false);
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];
  // VARIABILE PT DECODARE
  let cuvantdecodreceptionatsicorectat: number[] = []; //ecran
  let pozeinr = 0;
  let C0d = 0; //ecran
  let C1d = 0; //ecran
  let C2d = 0; //ecran
  let celuleDecodor = [C0d, C1d, C2d];
  let contorStareFixaGasita = 0;

  let celuleDecodor7: number[] = [];
  let contorStareFixa = 8;
  let S4 = 0; //ecran
  let S5 = 0; //ecran
  let tactDecoderDom = 0; //ecran
  let tactDecoderDomEroare = 0;

  //VARIABILE PT CODARE
  let C2 = 0; // ecran
  let C1 = 0; // ecran
  let C0 = 0; // ecran

  let valoareBitRedundant = 0;
  let celuleRegistru = [C2, C1, C0];
  const informatie = informationByUser.split("").map(Number);
  let auxErrorWord = [];
  let sumator1 = ""; // ecran
  let sumator2 = ""; // ecran
  let cuvantDeCod = ""; // ecran
  let stareRDRLam: number[] = []; // ecran
  let tact =
    "Registrul și sumatoarele se află inițial în starea de blocare, apasă pe butonul START pentru a începe codarea.";
  let tactm = "4";
  let tactCanvas = 0;
  let copieCuvantCodat = " ";

  let cuvantEronat: number[] = [];
  cuvantEronat = cuvantDeCod.split("").map(Number);

  // PROPS PENTRU CANVAS
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
    transmissionEnded: boolean;
    positionErrorByUser: string;
    errorWord: number[];
    tactDecoderDom: number;
    celuleDecodor: (string | number)[];
    S4: number;
    S5: number;
    contorStareFixaGasita: number;
    cuvantdecodreceptionatsicorectat: number[];
    celuleDecodor7: number[];
    tactDecoderDomEroare: number;
    r: number[];
    pozeinr: number;
    C01: number;
    C1d: number;
    C2d: number;
    contorStareFixa?: number;
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
    transmissionEnded: false,
    positionErrorByUser: "",
    errorWord: [],
    tactDecoderDom: 1,
    celuleDecodor: [],
    S4: 0,
    S5: 0,
    contorStareFixaGasita: 0,
    cuvantdecodreceptionatsicorectat: [],
    celuleDecodor7: [],
    tactDecoderDomEroare: 1,
    r: [],
    pozeinr: 0,
    C01: 0,
    C1d: 0,
    C2d: 0,
  });

  // ALGORITM CODARE

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
    tactCanvas = i;
    setTactDOM(tactCanvas);
    sumator1 = String(celuleRegistru[1] ^ celuleRegistru[2]);
    sumator2 = String(
      celuleRegistru[1] ^ celuleRegistru[2] ^ informatie[i - 1]
    );

    C2 = Number(sumator2);
    celuleRegistru.unshift(C2);
    celuleRegistru.pop();

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
        tactCanvas,
      };
    });
    return {
      celuleRegistru,
      bitDeInfo: informatie[i - 1],
      sumator2,
      cuvantDeCod,
      tact,
      tactCanvas,
    };
  };

  const secondFor = (k: number) => {
    // console.log(stareRDRLam);
    tact = `Coderul este la tactul ${Number(tactm) + k}`;
    tactCanvas = Number(tactm) + k;
    setTactDOM(tactCanvas);

    sumator1 = String(stareRDRLam[1] ^ stareRDRLam[2]);
    sumator2 = String(Number(sumator1) ^ Number(sumator1));
    valoareBitRedundant = Number(sumator1);
    C2 = Number(sumator2);
    celuleRegistru.unshift(C2);
    celuleRegistru.pop();

    cuvantDeCod += valoareBitRedundant.toString();
    if (tactCanvas === 7) {
      setErrorWord(cuvantDeCod.split("").map(Number));
    }
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

  if (positionErrorByUser) {
    errorWord[errorWord.length - 1 - Number(positionErrorByUser)] =
      errorWord[errorWord.length - 1 - Number(positionErrorByUser)] ^ 1;
    auxErrorWord = errorWord;
    // console.log(` cuvant eronat are valoarea ${auxErrorWord}`);
  }
  const gen = React.useMemo(() => generator(1), [userInput, informationByUser]);

  const sketchProps = wrapProps;
  const handlesetInformationByUser = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const userInputValue = e.target.value;
    if (/^[01]*$/.test(userInputValue)) {
      if (userInputValue.length <= 4) {
        setInformationByUser(userInputValue);
        setWrapProps((prev) => {
          return { ...prev, informationByUser: userInputValue };
        });
        if (userInputValue.length === 4) {
          isUserInput(true);
          setWrongInformation("");
        } else {
          isUserInput(false);
          setWrongInformation("Introdu 4 caractere, fie 0 fie 1");
        }
      } else {
        setWrongInformation("Introdu doar 4 caractere, fie 0 fie 1");
      }
    } else {
      setWrongInformation("Introdu doar valorile egale cu 0 sau 1");
    }
  };

  const handleStartClick = () => {
    if (userInput) {
      gen.next();
    }
  };

  const handlePositionErrorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPositionErrorByUser(e.target.value);
    setWrapProps({
      ...wrapProps,
      positionErrorByUser: e.target.value,
    });
  };

  // console.log(`eroarea este pe pozitie ${positionErrorByUser}`);

  useEffect(() => {
    if (tactDOM === 7) {
      setTimeout(() => {
        setWrapProps((prev) => {
          return { ...prev, transmissionEnded: true };
        });
      }, 4000);
    }
  }, [tactDOM]);

  //ALGORITM DECODARE

  let r = errorWord;
  // console.log(`cuvantul eronat arata asa : ${errorWord}`);
  function* generatorDecoder(i: number) {
    yield firstForDecoder(i);
    yield firstForDecoder(i + 1);
    yield firstForDecoder(i + 2);
    yield firstForDecoder(i + 3);
    yield firstForDecoder(i + 4);
    yield firstForDecoder(i + 5);
    yield firstForDecoder(i + 6);
    if (k) {
      yield secondForDecoder(wrapProps.contorStareFixa || 0);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 1);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 2);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 3);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 4);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 5);
      yield secondForDecoder(wrapProps.contorStareFixa || 0 + 6);
    }
  }

  const firstForDecoder = (i: number) => {
    console.log(i, "000000");
    tactDecoderDom = i;
    C0d = C1d;
    C1d = C2d;
    S4 = celuleDecodor[2] ^ celuleDecodor[1];
    S5 = S4 ^ r[i - 1];
    C2d = S5;
    celuleDecodor.unshift(S5);
    celuleDecodor.pop();
    console.log(celuleDecodor, "=====");
    // console.log(`celule decodor pana la tactiul 7 sunt ${celuleDecodor}`);
    if (i === 7) {
      console.log("meet,", celuleDecodor);
      celuleDecodor7 = celuleDecodor;
    }

    setWrapProps((prev) => {
      return {
        ...prev,
        celuleDecodor,
        tactDecoderDom,
        celuleDecodor7,
        S4,
        S5,
        C0d,
        C1d,
        C2d,
      };
    });

    return {
      celuleDecodor,
      tactDecoderDom,
      celuleDecodor7,
      S4,
      S5,
      C0d,
      C1d,
      C2d,
    };
  };

  const secondForDecoder = (contorStareFixa: number) => {
    tactDecoderDomEroare = contorStareFixa;
    tactDecoderDom = tactDecoderDomEroare;

    C0d = C1d;
    C1d = C2d;
    S4 = celuleDecodor7[2] ^ celuleDecodor7[1];
    S5 = S4;
    C2d = S5;
    celuleDecodor7.unshift(S5);
    celuleDecodor7.pop();
    // if (k) {
    //   console.log(
    //     `la tactul ${contorStareFixa} registrul contine val ${celuleDecodor7}`
    //   );
    // }
    if (
      celuleDecodor7[0] === 0 &&
      celuleDecodor7[1] === 0 &&
      celuleDecodor7[2] === 1
    ) {
      setIsStareFixaGasita(true);
      setK(0);
      contorStareFixaGasita = contorStareFixa;
      pozeinr = 13 - contorStareFixaGasita;
      r[r.length - pozeinr - 1] = r[r.length - pozeinr - 1] ^ 1;
      cuvantdecodreceptionatsicorectat = r;
    }
    setWrapProps((prev) => {
      return {
        ...prev,
        celuleDecodor7,
        tactDecoderDomEroare,
        S4,
        S5,
        contorStareFixaGasita,
        tactDecoderDom,
        contorStareFixa,
        cuvantdecodreceptionatsicorectat,
        r,
        pozeinr,
      };
    });

    return {
      celuleDecodor7,
      tactDecoderDomEroare,
      S4,
      S5,
      contorStareFixaGasita,
      tactDecoderDom,
      contorStareFixa,
      cuvantdecodreceptionatsicorectat,
      r,
      pozeinr,
    };
  };

  const genDecoder = React.useMemo(() => generatorDecoder(1), []);

  const decoding = () => {
    console.log(
      "decoding...tact ceva:",
      wrapProps.contorStareFixa,
      " si stareFixaGasita:",
      wrapProps.contorStareFixaGasita,
      "celule:",
      wrapProps.celuleDecodor7,
      "---",
      k
    );
    genDecoder.next();
    setisDecoding(true);
    setIsDecodingStarted(true);
  };

  return (
    <div>
      <Box
        sx={{
          width: "800px",
          height: "500px",
          position: "relative",
          margin: "0px 400px 15px 0px",
        }}
      >
        <ReactP5Wrapper sketch={(p5) => MySketch(p5, sketchProps)} />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            {tactDOM === 7 && !wrapProps.transmissionEnded ? (
              <div className="transmisia">
                <b>{t("A început transmisia")}</b>
              </div>
            ) : wrapProps.transmissionEnded ? (
              <div className="transmisia">
                <b>
                  "S-a terminat" <del>"transmisia"</del>
                </b>
              </div>
            ) : (
              <>
                <label className="labelBiti">
                  {t("Introdu biții de informație")} :
                </label>
                <input
                  type="text"
                  disabled={isInputDisabled}
                  placeholder="a6a5a4a3"
                  value={informationByUser}
                  onChange={handlesetInformationByUser}
                  className="inputBiti"
                />
              </>
            )}
          </form>
          {!userInput && (
            <div className="transmisia">
              <b>{wrongInformation}</b>
            </div>
          )}
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
              {tactDOM === 0 ? (
                <div> {t("START")}</div>
              ) : tactDOM <= 7 && !wrapProps.transmissionEnded ? (
                `Tact  ${tactDOM}`
              ) : (
                <div onClick={decoding}>
                  {isDecoding ? (
                    isDecodingStarted ? (
                      <div>Tact Decoder {wrapProps.tactDecoderDom}</div>
                    ) : (
                      <p>"START"</p>
                    )
                  ) : (
                    <div>{t("Începe decodarea")}</div>
                  )}
                </div>
              )}
            </Button>
          )}
        </div>

        {tactDOM === 7 && wrapProps.transmissionEnded && (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label className="labelBiti">
              {isDecoding ? (
                ""
              ) : (
                <div>
                  {t(
                    "Introdu poziția bitului din intervalul [0,6] care a fost eronat pe timpul transmisiei "
                  )}
                </div>
              )}
            </label>
            {isDecoding ? (
              isStareFixaGasita ? (
                "stare gasita"
              ) : (
                "nu s-a gasit starea"
              )
            ) : (
              <input
                type="text"
                // disabled={isInputDisabled}
                placeholder="0123456"
                value={positionErrorByUser}
                onChange={handlePositionErrorInput}
                className="inputBiti"
              />
            )}
          </form>
        )}
      </Box>

      <img
        src={isDecoding ? decoderschema : slides[tactDOM]}
        style={{ width: "1300px", height: "760px", marginTop: "20px" }}
      />

      <div
        style={{
          marginTop: "50px",
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
            boxShadow:
              " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
          }}
          onClick={() => setLabState("meniu")}
        >
          {t("BACK")}
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
            boxShadow:
              " 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
          }}
          onClick={() => setLabState("end")}
        >
          {t("NEXT")}
        </Button>
      </div>
      <p>{wrapProps.celuleDecodor}</p>
    </div>
  );
};

export default CoderAnimation;
