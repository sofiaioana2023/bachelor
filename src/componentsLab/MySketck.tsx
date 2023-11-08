import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { use } from "i18next";
import { labContext } from "../helpers/Contexts";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Person4, PieChart } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import { receiveMessageOnPort } from "worker_threads";

export function MySketch(p5: any, props: any) {
  const {
    celuleRegistru,
    valoareBitRedundant,
    sumator1,
    sumator2,
    bitDeInfo,
    cuvantDeCod,
    tact,
    tactCanvas,
    informationByUser,
    currentStep,
    transmissionEnded,
    errorWord,
    positionErrorByUser,
  } = props;
  let myFont = "";

  p5.preload = () => {
    myFont = p5.loadFont(
      "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
    );
  };
  let positionErrorByUserCanvas = p5.createP(positionErrorByUser);
  let receivedWordWithError = p5.createP(errorWord);
  console.log(`cuvantul eronat in canvas este ${receivedWordWithError}`);
  console.log(`pozitie eroare in canvas ${positionErrorByUserCanvas}`);
  let informatieIntrodusaDeUser = p5.createP(informationByUser);
  let informatie = p5.createP("a6a5a4a3");
  let informatieCODATA = p5.createP("a6a5a4a3a2a1a0");
  let bitDeControlDreapta = p5.createP(valoareBitRedundant);
  let bitDeControlJos = p5.createP(valoareBitRedundant);
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
  let valoareS2 = p5.createP(sumator2);
  let valoareS2Sus = p5.createP(sumator2);
  let valoareS2SusDreapta = p5.createP(sumator2);
  let valoareS1 = p5.createP(sumator1);
  let cuvantulDeCod = p5.createP(cuvantDeCod);
  let TACTREGISTRU = p5.createP(tact);
  let S3 = p5.createP("S3");
  let S4 = p5.createP("S4");
  let S5 = p5.createP("S5");
  let detec = p5.createP("DETECTOR 001");

  p5.setup = () => {
    p5.createCanvas(1200, 500, p5.WEBGL);
    p5.textFont(myFont);
    p5.background(100);

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
    bitDeInformatie.position(60, 425);
    bitDeInformatieSus.style("color", "red");
    bitDeInformatieSus.style("font-weight", "600");
    bitDeInformatieSus.position(60, 425);
    let S1 = p5.createP("S1");
    S1.style("color", "#ffa600");
    S1.style("font-weight", "600");
    S1.position(154, 223);

    valoareS1.style("color", "white");
    valoareS1.style("font-weight", "600");
    valoareS1.position(157, 265);

    let S2 = p5.createP("S2");
    S2.style("color", "#ffa600");
    S2.style("font-weight", "600");
    S2.position(154, 315);

    valoareS2.style("color", "white");
    valoareS2.style("font-weight", "600");
    valoareS2.position(110, 312);

    if (currentStep < 5) bitDeControlDreapta.style("color", "white");
    else bitDeControlDreapta.style("color", "white");
    bitDeControlDreapta.style("font-weight", "600");
    bitDeControlDreapta.position(177, 265);

    if (currentStep < 5) bitDeControlJos.style("color", "white");
    else bitDeControlJos.style("color", "white");
    bitDeControlJos.style("font-weight", "600");
    bitDeControlJos.position(240, 265);

    cuvantulDeCod.style("color", "white");
    cuvantulDeCod.style("font-weight", "600");
    cuvantulDeCod.position(250, 425);

    informatie.style("color", "#ffa600");
    informatie.style("font-weight", "800");
    informatie.position(15, 455);

    informatieCODATA.style("color", "#ffa600");
    informatieCODATA.style("font-weight", "800");
    informatieCODATA.position(1050, 455);

    informatieIntrodusaDeUser.style("color", "#ffa600");
    informatieIntrodusaDeUser.style("font-weight", "800");
    informatieIntrodusaDeUser.position(30, 425);

    TACTREGISTRU.style("color", "#000");
    TACTREGISTRU.style("font-weight", "600");
    TACTREGISTRU.position(5, 30);

    // receivedWordWithError.style("color", "red");
    // receivedWordWithError.style("font-weight", "700");
    // receivedWordWithError.position(200, 495);

    S3.style("color", "#ffa600");
    S3.style("font-weight", "600");
    S3.position(765, 345);
    S4.style("color", "#ffa600");
    S4.style("font-weight", "600");
    S4.position(950, 345);
    S5.style("color", "#ffa600");
    S5.style("font-weight", "600");
    S5.position(982, 122);
    detec.style("color", "#ffa600");
    detec.style("font-weight", "600");
    detec.position(830, 405);
  };
  p5.draw = () => {
    const c = p5.color(15, 34, 59);
    const c2 = p5.color(56, 65, 66);
    const c3 = p5.color(20, 20, 20);
    const c5 = p5.color(30, 30, 30);
    const yellow = p5.color(255, 165, 0);
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    if (tactCanvas === 7 && !transmissionEnded) {
      p5.fill(yellow);

      p5.beginShape();
      p5.vertex(-180, 40); // Top-left vertex
      p5.vertex(-110, 40); // Top-right vertex
      p5.vertex(-200, 140); // Bottom-right vertex
      p5.vertex(-200, 140); // Bottom-left vertex
      p5.endShape(p5.CLOSE); // CLOSE parameter connects the last and first vertices

      p5.beginShape();
      p5.vertex(-205, -30); // Top-left vertex
      p5.vertex(-110, -30); // Top-right vertex
      p5.vertex(-155, 40); // Bottom-right vertex
      p5.vertex(-205, 40); // Bottom-left vertex

      p5.endShape(p5.CLOSE); // CLOSE parameter connects the last and first vertices
    }
    p5.fill(c);
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
    if (tactCanvas >= 5) {
      p5.translate(20, -155);
      p5.rect(0, 0, 70, 20);
      p5.translate(70, 0);
      p5.rect(0, 0, 20, 160);
      if (bitDeControlDreapta.position().x <= 239) {
        bitDeControlDreapta.position(177 + p5.frameCount * 4, 265);
        if (bitDeControlDreapta.position().x >= 236) {
          bitDeControlDreapta.html("");
        }
      }
      if (bitDeControlJos.position().y <= 410) {
        bitDeControlJos.position(240, 265 + p5.frameCount * 4);
        if (bitDeControlJos.position().y >= 410) {
          bitDeControlJos.html("");
        }
      }
      if (positionErrorByUserCanvas) {
        receivedWordWithError.style("color", "red");
        receivedWordWithError.position(660, 495);
      }
    }

    //transmisia
    // if (tactCanvas < 7) {
    //   p5.fill(0);
    //   p5.text("a6a5a4a3a2a1", 212, 455);
    //   console.log("a6a5a6a4a3a2a1");
    // } else if (tactCanvas === 7) {
    //   p5.fill(0);
    //   p5.text("Atenție, începe transmisia!", 212, 455);
    //   console.log("Atenție, începe transmisia!");
    // }

    //continuare canal
    p5.fill(c);
    if (tactCanvas >= 5) {
      p5.translate(-90, 155);
    }

    p5.translate(100, 0);
    p5.rect(200, 0, 250, 30);
    p5.translate(100, 40);
    p5.rect(350, -10, 30, -330);
    p5.translate(380, -340);
    p5.rect(0, 0, 30, 30);
    p5.translate(20, 0);
    p5.triangle(0, -5, 0, 35, 30, 15);
    p5.fill(c2);
    p5.translate(20, 0);
    p5.rect(0, -5, 20, 40);
    p5.translate(20, -5);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, 0, 20, 40);
    p5.fill(c);
    p5.translate(21, 3);
    p5.rect(0, 0, 40, 30);
    p5.translate(40, 0);
    p5.triangle(0, -5, 0, 35, 30, 15);
    p5.fill(c2);
    p5.translate(20, 0);
    p5.rect(0, -10, 40, 50);
    p5.fill(c);
    p5.translate(100, 10);
    p5.rect(-60, -10, 130, 30);
    p5.translate(50, 0);
    p5.rect(0, -10, 30, 250);
    p5.translate(0, 240);
    p5.triangle(-5, 0, 35, 0, 15, 30);
    p5.fill(c);
    p5.translate(-396, -30);
    p5.rect(0, 0, 30, 30);
    p5.fill(c2);
    p5.translate(30, 0);
    p5.rect(0, -10, 40, 50);
    p5.fill(c);
    p5.translate(40, 0);
    p5.rect(0, 0, 20, 30);
    p5.translate(20, 0);
    p5.triangle(0, -5, 0, 35, 30, 15);
    p5.fill(c2);
    p5.translate(20, 0);
    p5.rect(0, -5, 20, 40);
    p5.translate(20, 0);
    p5.rect(1, -5, 20, 40);
    p5.translate(21, 0);
    p5.rect(1, -5, 20, 40);
    p5.fill(c);
    p5.translate(21, 5);
    p5.rect(0, -5, 20, 30);
    p5.translate(20, -5);
    p5.triangle(0, -5, 0, 35, 30, 15);
    p5.fill(c2);
    p5.translate(20, 0);
    p5.rect(0, -10, 40, 50);
    p5.fill(c);
    p5.translate(40, -10);
    p5.rect(0, +10, 30, 30);
    p5.translate(30, 0);
    p5.rect(0, -110, 30, 150);
    p5.translate(30, -110);
    p5.rect(0, 0, -250, 30);
    p5.translate(-250, 0);
    p5.rect(-30, 0, 30, 90);
    p5.translate(-30, 80);
    p5.triangle(-5, 0, 35, 0, 15, 30);
    p5.translate(92.5, 30);
    p5.rect(10, -45, 15, 50);
    p5.translate(10, -50);
    p5.rect(0, 0, 100, 15);
    p5.translate(100, 0);
    p5.rect(-10, 0, 15, 40);
    p5.translate(-18, 22);
    p5.triangle(-5, 0, 35, 0, 15, 30);
    p5.fill(c2);
    p5.translate(-100, 80);
    p5.rect(2, -8, 5, 25);
    p5.translate(5, -8);
    p5.rect(17, 0, 5, 25);
    p5.translate(22, 0);
    p5.rect(16, 0, 5, 25);
    p5.translate(-40, 25);
    p5.rect(0, 0, 80, 60);
    // p5.fill(c);
    // p5.translate(40, 25);
    // p5.rect(40, -8, 150, 20);
    // p5.translate(170, -78);
    // p5.rect(20, -160, 20, 250);
    // p5.translate(0, -180);
    // p5.rect(-50, 20, 90, 20);
    // p5.translate(-30, 0);
    // p5.rect(-23, -6, 20, 45);
    // p5.pop();

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
      bitDeInformatie.position(60 + p5.frameCount * 7, 415);
      if (bitDeInformatie.position().x >= 298 || currentStep === 0) {
        bitDeInformatie.html(""); // Hide the bit when it's very close to 299
      }
    }

    if (bitDeInformatieSus.position().y >= 320) {
      bitDeInformatieSus.position(160, 415 - p5.frameCount * 4);
      if (bitDeInformatieSus.position().y <= 320 || currentStep === 0) {
        bitDeInformatieSus.html("");
      }
    }

    if (valoareS1.position().y <= 325) {
      valoareS1.position(157, 265 + p5.frameCount * 2);
      if (valoareS1.position().y === 325 || currentStep === 0) {
        valoareS1.html("");
      }
    }

    if (valoareS2.position().x >= 60) {
      valoareS2.position(132 - p5.frameCount * 3, 312);
      if (valoareS2.position().x === 60 || currentStep === 0) {
        valoareS2.html("");
      }
    }

    if (valoareS2Sus.position().y >= 120) {
      valoareS2Sus.position(60, 312 - p5.frameCount * 3);
      if (valoareS2Sus.position().y === 120 || currentStep === 0) {
        valoareS2Sus.html("");
      }
    }
    if (valoareS2SusDreapta.position().x <= 120) {
      valoareS2SusDreapta.position(60 + p5.frameCount * 3, 120);
      if (valoareS2SusDreapta.position().x === 120 || currentStep === 0) {
        valoareS2SusDreapta.html("");
      }
    }

    {
      if (bitC1Jos.position().y <= 197) {
        bitC1Jos.position(155, 120 + p5.frameCount * (currentStep > 0 ? 4 : 0));
        if (bitC1Jos.position().y >= 197 || currentStep === 0) {
          bitC1Jos.html("");
        }
      }
      if (bitC0Dreapta.position().x <= 230) {
        bitC0Dreapta.position(
          175 + p5.frameCount * (currentStep > 0 ? 4 : 0),
          120
        );
        if (bitC0Dreapta.position().x >= 230) {
          bitC0Dreapta.html("");
        }
      }
      if (bitC0Jos.position().y <= 210) {
        bitC0Jos.position(230, 120 + p5.frameCount * (currentStep > 0 ? 4 : 0));
        if (bitC0Jos.position().y >= 210 || currentStep === 0) {
          bitC0Jos.html("");
        }
      }
      if (bitC0JosStanga.position().x >= 0) {
        bitC0JosStanga.position(
          230 - p5.frameCount * (currentStep > 0 ? 4 : 0),
          210
        );

        if (bitC0JosStanga.position().x >= 176) {
          bitC0JosStanga.html("");
        }
      }

      if (tactCanvas === 7) {
        if (cuvantulDeCod.position().x <= 660) {
          if (!transmissionEnded)
            cuvantulDeCod.position(250 + p5.frameCount, 425);
          if (cuvantulDeCod.position().x === 660 || transmissionEnded) {
            cuvantulDeCod.position(660, 425);
          }
        }
      }

      // setTimeout(moveBits, 3000);
    }
  };
}
