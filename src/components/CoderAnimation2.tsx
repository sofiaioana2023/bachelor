import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { MySketch2 } from "../componentsLab/MySketck2";
import { labContext } from "../helpers/Contexts";
import decoderschema from "../icons/decoderschema.png";
import slide1 from "../icons/tact00.png";
import slide2 from "../icons/pol2tact1.png";
import slide3 from "../icons/pol22.png";
import slide4 from "../icons/pol23.png";
import slide5 from "../icons/pol24.png";
import slide6 from "../icons/pol25.png";
import slide7 from "../icons/pol26.png";
import slide8 from "../icons/pol2tact7.png";
import EndLab from "../componentsLab/EndLab";
import slide1FR from "../icons/SLIDE0FR.png";
import slide1EN from "../icons/SLIDE0ENG.png";
import decoden from "../icons/DECODENG.png"
import decodfr from "../icons/DECODFR.png";
import slide2en from "../icons/slide21.png";
import slide3en from "../icons/slide22.png";
import slide4en from "../icons/slide23.png";
import slide5en from "../icons/slide24.png";
import slide6en from "../icons/slide25.png";
import slide7en from "../icons/slide26.png";
import slide8en from "../icons/slide27.png";
import slide2fr from "../icons/slidefr21.png";
import slide3fr from "../icons/slidefr22.png";
import slide4fr from "../icons/slidefr23.png";
import slide5fr from "../icons/slidefr24.png";
import slide6fr from "../icons/slidefr25.png";
import slide7fr from "../icons/slidefr26.png";
import slide8fr from "../icons/slidefr27.png";



export interface IDecoderProps{
  tactDecoderDom:number,
  C0d:number,
  C1d:number,
  C2d:number,
  S4 :number,
  S5:number,
  decoderCells:number[],
  decoderCells7:number[],
  pozeinr:number,
  contorStareFixaGasita:number,
  cuvantdecodreceptionatsicorectat:number[]
}

const CoderAnimation2 = () => {
  const { t, i18n } = useTranslation();
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
  const slidesFR = [
    slide1FR,
    slide2fr,
    slide3fr,
    slide4fr,
    slide5fr,
    slide6fr,
    slide7fr,
    slide8fr,
  ];
  const slidesEN = [
    slide1EN,
    slide2en,
    slide3en,
    slide4en,
    slide5en,
    slide6en,
    slide7en,
    slide8en,
  ];
  
  const selectedLanguage = i18n.language
  console.log("dkdkkdkddkdk sle", selectedLanguage)
  const [decodingVariables, setdecodingVariable] = useState({});
  const [decodingStep,setDecodingStep] = useState(1)
  const [decoderProps,setDecoderProps] = useState<IDecoderProps>({
    tactDecoderDom:0,
    C0d:0,
    C1d:0,
    C2d:0,
    S4 :0,
    S5:0,
    decoderCells:[0,0,0],
    decoderCells7:[],
    pozeinr:0,
    contorStareFixaGasita:0,
    cuvantdecodreceptionatsicorectat:[]
  })
  // VARIABILE PT DECODARE
  // let cuvantdecodreceptionatsicorectat: number[] = []; //ecran
  
  // let C0d = 0; //ecran
  // let C1d = 0; //ecran
  // let C2d = 0; //ecran
  // let celuleDecodor = [C0d, C1d, C2d];

  // let celuleDecodor7: number[] = [];
  let contorStareFixa = 8;
  // let S4 = 0; //ecran
  // let S5 = 0; //ecran
  let tactDecoderDomEroare = 0;

  //VARIABILE PT CODARE
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
    sumator1 = String(celuleRegistru[0] ^ celuleRegistru[2]);
    sumator2 = String(
      celuleRegistru[0] ^ celuleRegistru[2] ^ informatie[i - 1]
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
      r: errorWord,
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

  if (positionErrorByUser && wrapProps.currentStep===7) {
    // let auxErrorWord: number[] = [];
    // auxErrorWord = errorWord;
    // auxErrorWord[errorWord.length - 1 - Number(positionErrorByUser)] =
    // auxErrorWord[errorWord.length - 1 - Number(positionErrorByUser)] ^ 1;
    // setErrorWord(auxErrorWord)
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
    let auxErrorWord: number[] = [];
    auxErrorWord = errorWord;
    auxErrorWord[errorWord.length - 1 - Number(e.target.value)] =
    auxErrorWord[errorWord.length - 1 - Number(e.target.value)] ^ 1;
    setErrorWord(auxErrorWord)
    setPositionErrorByUser(e.target.value);
    setWrapProps({
      ...wrapProps,
      positionErrorByUser: e.target.value,
    });
  };

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
  let r = errorWord;

  const firstForDecoder = (i: number) => {
   let tactDecoderDom = i;
   let C0d = decoderProps.C1d;
   let C1d = decoderProps.C2d;
   let S4 = decoderProps.decoderCells[0] ^decoderProps.decoderCells[2];
   let S5 = S4 ^ errorWord[i - 1];


   let  C2d = S5;
   let decoderCells = decoderProps.decoderCells
   decoderCells.unshift(S5);
   decoderCells.pop();

    if (i === 7) {
      setDecoderProps(prev=>{return{...prev,decoderCells7:decoderCells}})
    }
    setDecoderProps((prev) => {
      return {
        ...prev,
        decoderCells,
        tactDecoderDom,
        S4,
        S5,
        C0d,
        C1d,
        C2d,
      };
    }); 
  };
const handleDecoderFlow = () =>{
  if(decodingStep<15){if(wrapProps.currentStep>=7){
    setDecodingStep(prev=>prev+1)
    setisDecoding(true);
    setIsDecodingStarted(true);
    if(decodingStep>7) secondForDecoder(decodingStep)
    else firstForDecoder(decodingStep)
  }}
}

  const secondForDecoder = (contorStareFixa: number) => {
    
    tactDecoderDomEroare = contorStareFixa;
    let tactDecoderDom = tactDecoderDomEroare;

    let C0d = decoderProps.C1d;
    let C1d = decoderProps.C2d;
    let S4 = decoderProps.decoderCells7[2] ^ decoderProps.decoderCells7[0];
   let  S5 = S4;
   let  C2d = S5;
   let decoderCells7 = decoderProps.decoderCells7
   decoderCells7.unshift(S5);
   decoderCells7.pop();
   let pozeinr = 0;
 
   let  contorStareFixaGasita = 0
   let cuvantdecodreceptionatsicorectat:number[] = []
    if (
      decoderCells7[0] === 0 &&
      decoderCells7[1] === 0 &&
      decoderCells7[2] === 1
    ) {
      setIsStareFixaGasita(true);    
      contorStareFixaGasita = contorStareFixa;
      pozeinr = 13 - contorStareFixaGasita;
      let r = errorWord
      r[r.length - pozeinr - 1] = r[r.length - pozeinr - 1] ^ 1;
      cuvantdecodreceptionatsicorectat = r;
      console.log(contorStareFixaGasita,"<-cuvant lung")
    }
    setDecoderProps((prev) => {
      return {
        ...prev,
        decoderCells7,
        tactDecoderDomEroare,
        S4,
        S5,
        contorStareFixaGasita:contorStareFixaGasita?contorStareFixaGasita:decoderProps.contorStareFixaGasita,
        tactDecoderDom,
        contorStareFixa,
        cuvantdecodreceptionatsicorectat:cuvantdecodreceptionatsicorectat.length?cuvantdecodreceptionatsicorectat:decoderProps.cuvantdecodreceptionatsicorectat,
        pozeinr,
        C0d,
        C1d,
        C2d
      };
    });
  };

  return (
    <>
        {decoderProps.tactDecoderDom < 14 ? 
      <div>
      <Box
        sx={{
          width: "800px",
          height: "500px",
          position: "relative",
          margin: "0px 400px 15px 0px",
        }}
      >
        <ReactP5Wrapper sketch={(p5) => MySketch2(p5, {...sketchProps, errorWord:errorWord.join(""), positionErrorByUser,decoderProps,selectedLanguage})} />
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
              <div style={{marginTop:"35px"}}>
                <b>{t("După codare, mesajul este transmis pe canalul de comunicație(unde radio/cablu coaxial/fibră optică)")}</b>
              </div>
            ) : wrapProps.transmissionEnded ? (
              <div className="transmisia">
                {positionErrorByUser?<b>{t("La recepție mesajul transmis pe canal va fi decodat pentru a identifica și corecta erorile dacă există")} </b>: <b>
                 { t("S-a terminat") }<del>{t("transmisia")}</del>
                </b>}
                
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
              { selectedLanguage ==="ro" && <b>{wrongInformation}</b>}
            </div>
          )}
          
          {userInput  && (
            <Button
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "aliceblue",
                fontWeight: "800",
                margin: "10px 0px",
                width: "300px",
                height: "40px",
                fontSize: "20px",
              }}
              onClick={handleStartClick}
            >
              {tactDOM === 0 ? (
                <div> {t("START")}</div>
              ) : tactDOM <= 7 && !wrapProps.transmissionEnded ? (
                tactDOM === 7? <div>{t("Secvență codată")}</div> : <div> {t("Tact")} {tactDOM}</div>
              ) : (
                <div onClick={handleDecoderFlow}>
                  {isDecoding ? (
                    isDecodingStarted ? (
                      <div>{t("Tact decoder")} {decoderProps.tactDecoderDom}</div>
                    ) : (
                      <p>"START"</p>
                    )
                  ) : (
                    <div>{t("START")}</div>
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
                <b>{t("Starea fixă se regăsește la tactul")} {decoderProps.contorStareFixaGasita} {t("unde se va corecta bitul eronat de la poziția")} {positionErrorByUser}</b>
              ) : (
                <b>{t("Se caută starea fixă a registrului")}</b>
              )
            ) : (
              <input
                type="text"
                disabled={!!positionErrorByUser}
                placeholder="0123456"
                value={positionErrorByUser}
                onChange={handlePositionErrorInput}
                className="inputBiti"
              />
            )}
          </form>
        )}
      </Box>

      { selectedLanguage === "ro" && <img
        src={wrapProps.transmissionEnded ? decoderschema : slides[tactDOM]}
        style={{ width: "1300px", height: "760px", marginTop: "20px" }}
      />}
      { selectedLanguage === "fr" && <img
        src={wrapProps.transmissionEnded ? decodfr : slidesFR[tactDOM]}
        style={{ width: "1300px", height: "760px", marginTop: "20px" }}
      />}
      { selectedLanguage === "en" && <img
        src={wrapProps.transmissionEnded ? decoden : slidesEN[tactDOM]}
        style={{ width: "1300px", height: "760px", marginTop: "20px" }}
      />}

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
          onClick={() => setLabState("alegepolinom")}
        >
          {t("BACK")}
        </Button>
        
        {/* <Button
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
        </Button> */}
        
        
      </div>
    </div> : <EndLab/>}
      
   </>
  );
};

export default CoderAnimation2
