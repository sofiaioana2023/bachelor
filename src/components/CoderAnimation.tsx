import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { use } from "i18next";
import { labContext } from "../helpers/Contexts";
import Box from "@mui/material/Box";

export function MySketch(p5: any, props: any) {
  const {
    celuleRegistru,
    valoareBitRedundant,
    sumator1,
    sumator2,
    bitDeInfo,
    cuvantDeCod,
    tact,
  } = props;
  p5.preload = () => {
    p5.loadFont(
      "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
    );
  };
  let xPosition = 60;
  let yPosition = 415;
  let bitDeInformatie = p5.createP(JSON.stringify(bitDeInfo));
  let bitDeInformatieSus = p5.createP(JSON.stringify(bitDeInfo));
  let bitC2 = p5.createP(JSON.stringify(celuleRegistru[0]));
  let bitC1 = p5.createP(JSON.stringify(celuleRegistru[1]));
  let bitC1Jos = p5.createP(JSON.stringify(celuleRegistru[1]));
  let bitC0 = p5.createP(JSON.stringify(celuleRegistru[2]));
  let bitC0Dreapta = p5.createP(JSON.stringify(celuleRegistru[2]));
  let bitC0Jos = p5.createP(JSON.stringify(celuleRegistru[2]));
  let bitC0JosStanga = p5.createP(JSON.stringify(celuleRegistru[2]));
  let valoareS2 = p5.createP(JSON.stringify(sumator2));
  let valoareS2Sus = p5.createP(JSON.stringify(sumator2));
  let valoareS2SusDreapta = p5.createP(JSON.stringify(sumator2));
  let valoareS1 = p5.createP(JSON.stringify(sumator1));
  let cuvantulDeCod = p5.createP(cuvantDeCod);
  let TACTREGISTRU = p5.createP(tact);
  p5.setup = () => {
    console.log(celuleRegistru, "zzz");
    p5.createCanvas(1200, 500, p5.WEBGL);

    bitC2.style("color", "white");
    bitC2.style("font-weight", "600");
    bitC2.position(135, 120);

    bitC1.style("color", "white");
    bitC1.style("font-weight", "600");
    bitC1.position(155, 120);

    bitC0.style("color", "white");
    bitC0.style("font-weight", "600");
    bitC0.position(175, 120);

    bitDeInformatie.style("color", "red");
    bitDeInformatie.style("font-weight", "600");
    bitDeInformatie.position(60, 415);
    bitDeInformatieSus.style("color", "red");
    bitDeInformatieSus.style("font-weight", "600");
    bitDeInformatieSus.position(60, 415);
    let S1 = p5.createP("S1");
    S1.style("color", "yellow");
    S1.style("font-weight", "600");
    S1.position(154, 215);

    valoareS1.style("color", "yellow");
    valoareS1.style("font-weight", "600");
    valoareS1.position(157, 265);

    let S2 = p5.createP("S2");
    S2.style("color", "yellow");
    S2.style("font-weight", "600");
    S2.position(154, 310);

    valoareS2.style("color", "yellow");
    valoareS2.style("font-weight", "600");
    valoareS2.position(110, 312);
    // let valoareRedundant = p5.createP(JSON.stringify(valoareBitRedundant));
    // valoareRedundant.style("color", "yellow");
    // valoareRedundant.style("font-weight", "600");
    // valoareRedundant.position(450, 420);

    cuvantulDeCod.style("color", "white");
    cuvantulDeCod.style("font-weight", "600");
    cuvantulDeCod.position(300, 415);

    TACTREGISTRU.style("color", "#000");
    TACTREGISTRU.style("font-weight", "600");
    TACTREGISTRU.position(60, 80);

    p5.background(250);
  };
  p5.draw = () => {
    const c = p5.color(255, 100, 100);
    const c2 = p5.color(100, 100, 100);
    const c3 = p5.color(20, 20, 20);
    const c5 = p5.color(30, 30, 30);

    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.fill(c);
    // p5.text(text, 0, 50) // Adjusted text coordinates
    p5.translate(-550, -150);
    p5.rect(0, 0, 30, 220);
    p5.translate(30, 0);
    p5.rect(0, 0, 30, 30);
    p5.translate(30, 0);
    p5.triangle(0, -5, 0, 35, 30, 15);
    p5.fill(c2);
    p5.translate(20, -5);
    p5.rect(0, 0, 20, 40);
    p5.fill(c);
    p5.rect(22.5, 40, 15, 60);
    p5.fill(c2);
    p5.translate(20, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 5);
    p5.fill(c);
    p5.rect(0, 0, 30, 30);
    p5.translate(30, 0);
    p5.rect(0, 0, 30, 100);
    p5.translate(30, 100);
    p5.rect(0, 0, -70, 30);
    p5.translate(-70, 0);
    p5.fill(c2);
    p5.rect(0, -10, -40, 50);
    p5.fill(c);
    p5.translate(-35, 40);
    p5.rect(0, 0, 30, 25);
    p5.translate(0, 25);
    p5.triangle(-5, 0, 35, 0, 15, 30);
    p5.fill(c2);
    p5.translate(0, 30);
    p5.fill(c);
    p5.translate(-5, 0);
    p5.rect(0, 0, -62, 25);
    p5.translate(0, 37.5);
    p5.triangle(0, 20, 40, 20, 20, -30);
    p5.fill(c2);
    p5.translate(5, -37.5);
    p5.rect(-5, -12.5, 40, 50);
    p5.fill(c);
    p5.translate(0, 55);
    p5.rect(0, 0, 30, 50);
    p5.fill(c);
    p5.translate(0, 50);
    p5.rect(-50, 0, 400, 30);

    p5.pop();
    ///miscare biti
    bitDeInformatie.style("color", "white");
    bitDeInformatieSus.style("color", "white");
    valoareS1.style("color", "white");
    valoareS2Sus.style("color", "white");
    valoareS2.style("color", "white");
    valoareS2SusDreapta.style("color", "white");
    bitC1Jos.style("color", "white");
    bitC0Dreapta.style("color", "white");
    bitC0Jos.style("color", "white");
    bitC0JosStanga.style("color", "white");

    if (bitDeInformatie.position().x <= 299) {
      bitDeInformatie.position(60 + p5.frameCount * 3, 415);
      if (bitDeInformatie.position().x >= 298) {
        bitDeInformatie.html(""); // Hide the bit when it's very close to 299
      }
    }

    if (bitDeInformatieSus.position().y >= 320) {
      bitDeInformatieSus.position(160, 415 - p5.frameCount);
      if (bitDeInformatieSus.position().y === 320) {
        bitDeInformatieSus.html("");
      }
    }

    if (valoareS1.position().y <= 325) {
      valoareS1.position(157, 265 + p5.frameCount);
      if (valoareS1.position().y === 325) {
        valoareS1.html("");
      }
    }

    if (valoareS2.position().x >= 60) {
      valoareS2.position(132 - p5.frameCount, 312);
      if (valoareS2.position().x === 60) {
        valoareS2.html("");
      }
    }

    if (valoareS2Sus.position().y >= 120) {
      valoareS2Sus.position(60, 312 - p5.frameCount * 3);
      if (valoareS2Sus.position().y === 120) {
        valoareS2Sus.html("");
      }
    }
    if (valoareS2SusDreapta.position().x <= 120) {
      valoareS2SusDreapta.position(60 + p5.frameCount, 120);
      if (valoareS2SusDreapta.position().x === 120) {
        valoareS2SusDreapta.html("");
      }
    }

    if (bitC1Jos.position().y <= 197) {
      bitC1Jos.position(155, 120 + p5.frameCount);
      if (bitC1Jos.position().y === 197) {
        bitC1Jos.html("");
      }
    }
    if (bitC0Dreapta.position().x <= 230) {
      bitC0Dreapta.position(175 + p5.frameCount, 120);
      if (bitC0Dreapta.position().x === 230) {
        bitC0Dreapta.html("");
      }
    }
    if (bitC0Jos.position().y <= 210) {
      bitC0Jos.position(230, 120 + p5.frameCount);
      if (bitC0Jos.position().y === 210) {
        bitC0Jos.html("");
      }
    }
    if (bitC0JosStanga.position().x >= 0) {
      bitC0JosStanga.position(230 - p5.frameCount, 210);

      if (bitC0JosStanga.position().x === 180) {
        bitC0JosStanga.html("");
      }
    }
  };
}

const CoderAnimation = () => {
  const { labState, setLabState } = React.useContext(labContext);
  let C2 = 0; // ecran
  let C1 = 0; // ecran
  let C0 = 0; // ecran
  let valoareBitRedundant = 0;
  let celuleRegistru = [C2, C1, C0];
  const informatie = [1, 0, 1, 0];
  let sumator1 = 0; // ecran
  let sumator2 = 0; // ecran
  let cuvantDeCod = ""; // ecran
  let stareRDRLam: number[] = []; // ecran
  let tact =
    "Registrul și sumatoarele se află în starea de blocare, apasă click pe buton pentru a începe codarea";
  let tactm = "4";
  const [wrapProps, setWrapProps] = React.useState<{
    bitDeInfo?: number;
    celuleRegistru?: number[];
    sumator1?: number;
    sumator2?: number;
    valoareBitRedundant?: number;
    cuvantDeCod?: string;
    tact: string;
  }>({
    sumator1,
    sumator2,
    valoareBitRedundant,
    cuvantDeCod,
    celuleRegistru,
    bitDeInfo: undefined,
    tact,
  });
  //   const handleEnteredInf = (e: any) => {
  //     setInformatie(e.target.value);
  //   };

  console.log(typeof informatie);
  function* generator(i: number) {
    console.log(i);
    yield firstFor(i);
    yield firstFor(i + 1);
    yield firstFor(i + 2);
    yield firstFor(i + 3);
    yield secondFor(1);
    yield secondFor(2);
    yield secondFor(3);
  }

  const firstFor = (i: number) => {
    tact = `Coderul este la tactul ${i.toString()}`;
    sumator1 = celuleRegistru[1] ^ celuleRegistru[2];
    sumator2 = celuleRegistru[1] ^ celuleRegistru[2] ^ informatie[i - 1];
    C2 = sumator2;
    celuleRegistru.unshift(C2);
    celuleRegistru.pop();
    console.log(`La tactul ${i} valorile din registru sunt ${celuleRegistru}`);
    if (i === informatie.length) {
      stareRDRLam = celuleRegistru;
    }

    cuvantDeCod += informatie[i - 1];
    setWrapProps({
      ...wrapProps,
      celuleRegistru,
      bitDeInfo: informatie[i - 1],
      cuvantDeCod,
      sumator2,
      tact,
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

    sumator1 = stareRDRLam[1] ^ stareRDRLam[2];
    sumator2 = sumator1 ^ sumator1;
    valoareBitRedundant = sumator1;
    C2 = sumator2;
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
    });
    return {
      sumator1,
      sumator2,
      valoareBitRedundant,
      cuvantDeCod,
      tact,
    };
  };
  //   //! INCEPUT
  //   cuvantDeCod = informatie.join("")
  //   for (let i = 1; i <= informatie.length; i++) {
  //     sumator1 = celuleRegistru[1] ^ celuleRegistru[2]
  //     sumator2 = celuleRegistru[1] ^ celuleRegistru[2] ^ informatie[i - 1]
  //     C2 = sumator2
  //     celuleRegistru.unshift(C2)
  //     celuleRegistru.pop()
  //     console.log(`La tactul ${i} valorile din registru sunt ${celuleRegistru}`)
  //     if (i === informatie.length) {
  //       stareRDRLam = celuleRegistru
  //     }
  //   }
  //   for (let k = 1; k <= 3; k++) {
  //     console.log(stareRDRLam)
  //     sumator1 = stareRDRLam[1] ^ stareRDRLam[2]
  //     sumator2 = sumator1 ^ sumator1
  //     valoareBitRedundant = sumator1
  //     C2 = sumator2
  //     celuleRegistru.unshift(C2)
  //     celuleRegistru.pop()
  //     console.log(
  //       `La tactul ${
  //         k + informatie.length
  //       } valorile din registru sunt ${celuleRegistru} si bitul redundant este ${valoareBitRedundant}`
  //     )
  //     cuvantDeCod += valoareBitRedundant.toString()
  //     console.log(cuvantDeCod)
  //   }

  const gen = React.useMemo(() => generator(1), []);
  const sketchProps = wrapProps;

  return (
    <div>
      <Box sx={{ width: "800px", height: "500px", position: "relative" }}>
        <ReactP5Wrapper sketch={(p5) => MySketch(p5, sketchProps)} />
      </Box>
      <div>
        <label>Introdu bitii de informatie</label>
        {/* <input value={informatie} onChange={handleEnteredInf} /> */}
      </div>
      <div>
        <label>C0:</label>
        {JSON.stringify(C0)}
      </div>
      <div>
        <label>C1:</label>
        {JSON.stringify(C1)}
      </div>
      <div>
        <label>C2:</label>
        {JSON.stringify(C2)}
      </div>
      <div>
        <label>sumator1:</label>
        {JSON.stringify(sumator1)}
      </div>
      <div>
        <label>sumator2:</label>
        {JSON.stringify(sumator2)}
      </div>
      <div>
        <label>cuvantDeCod:</label>
        {JSON.stringify(cuvantDeCod)}
      </div>
      <div>
        <label>stareRDRLam:</label>
        {JSON.stringify(stareRDRLam)}
      </div>
      {JSON.stringify(cuvantDeCod)}
      <button
        onClick={() => {
          console.log(gen.next().value);
        }}
      >
        press
      </button>
      <h3>{JSON.stringify(wrapProps)}</h3>
      <h5>{tact}</h5>
      <button onClick={() => setLabState("meniu")}>Back</button>
      <button onClick={() => setLabState("end")}>Next</button>
    </div>
  );
};

export default CoderAnimation;
