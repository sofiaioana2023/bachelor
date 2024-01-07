
import { IDecoderProps } from "../components/CoderAnimation2";
import { useTranslation } from "react-i18next";


export function MySketch2(p5: any, props: any) {
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
    selectedLanguage
  } = props ;
  let myFont = "";
 
  const decoderProps:IDecoderProps = props.decoderProps
  
  console.log(selectedLanguage)
  p5.preload = () => {
    myFont = p5.loadFont(
      "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
    );
  };

  let sursa = p5.createP("SURSĂ");
  let sursaengfr = p5.createP("SOURCE");
  let canal = p5.createP("CANAL");
  let canaleng = p5.createP("CHANNEL");
  let destinatar = p5.createP("DESTINATAR");
  let destinatarfr= p5.createP("RÉCEPTEUR");
  let destinatareng  = p5.createP("RECEIVER");


  let informatieIntrodusaDeUser = p5.createP(informationByUser);
  let informatie = p5.createP("a6a5a4a3");
  let informatieCODATA = p5.createP("a6a5a4a3a2a1a0");
  let bitDeControlDreapta = p5.createP(valoareBitRedundant);
  let bitDeControlJos = p5.createP(valoareBitRedundant);
  let detector0 = p5.createP(0)
  let detector1 = p5.createP(1)
  let errorWordP = p5.createP((errorWord));
  let errorbit1 = p5.createP((errorWord[6]))
  let errorbit2 = p5.createP((errorWord[5]))
  let errorbit3 = p5.createP((errorWord[4]))
  let errorbit4 = p5.createP((errorWord[3]))
  let errorbit5 = p5.createP((errorWord[2]))
  let errorbit6 = p5.createP((errorWord[1]))
  let errorbit7 = p5.createP((errorWord[0]))
  
  let errorbit1ToS3 = p5.createP((errorWord[6]))
  let errorbit2ToS3 = p5.createP((errorWord[5]))
  let errorbit3ToS3 = p5.createP((errorWord[4]))
  let errorbit4ToS3 = p5.createP((errorWord[3]))
  let errorbit5ToS3 = p5.createP((errorWord[2]))
  let errorbit6ToS3 = p5.createP((errorWord[1]))
  let errorbit7ToS3 = p5.createP((errorWord[0]))


  let correctbit1 = p5.createP((cuvantDeCod.split("")[6]))
  let correctbit2 = p5.createP((cuvantDeCod.split("")[5]))
  let correctbit3 = p5.createP((cuvantDeCod.split("")[4]))
  let correctbit4 = p5.createP((cuvantDeCod.split("")[3]))
  let correctbit5 = p5.createP((cuvantDeCod.split("")[2]))
  let correctbit6 = p5.createP((cuvantDeCod.split("")[1]))
  let correctbit7 = p5.createP((cuvantDeCod.split("")[0]))
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
  
  // let TACTREGISTRU = p5.createP(tact);
  let S3 = p5.createP("S3");
  let S4 = p5.createP("S4");
  let S5 = p5.createP("S5");
  let detec = p5.createP("DETEC. 001");
  let C0d = p5.createP(decoderProps.C0d)
  let C1d = p5.createP(decoderProps.C1d)
  let C1dd = p5.createP(decoderProps.C1d)
  let C2d = p5.createP(decoderProps.C2d)
  let C2dd = p5.createP(decoderProps.C2d)
 let S3value = p5.createP(decoderProps.S5)
 let S4value = p5.createP(decoderProps.S4)
  let C0dd = p5.createP(decoderProps.C0d)
 

  p5.setup = () => {
    p5.createCanvas(1200, 500, p5.WEBGL);
    p5.textFont(myFont);
    p5.background(100);

    bitC2.style("color", "white");
    bitC2.style("font-weight", "800");
    bitC2.position(135, 120);

    bitC1.style("color", "white");
    bitC1.style("font-weight", "800");
    bitC1.position(155, 120);

    bitC0.style("color", "white");
    bitC0.style("font-weight", "800");
    bitC0.position(175, 120);

    bitDeInformatie.style("color", "white");
    bitDeInformatie.style("font-weight", "800");
    bitDeInformatie.position(60, 425);
    bitDeInformatieSus.style("color", "white");
    bitDeInformatieSus.style("font-weight", "800");
    bitDeInformatieSus.position(60, 425);
    let S1 = p5.createP("S1");
    S1.style("color", "#ffa600");
    S1.style("font-weight", "800");
    S1.position(144, 223);

    valoareS1.style("color", "white");
    valoareS1.style("font-weight", "800");
    valoareS1.position(157, 265);

    let S2 = p5.createP("S2");
    S2.style("color", "#ffa600");
    S2.style("font-weight", "800");
    S2.position(154, 315);

    
    destinatar.position(48000, 1000);
    destinatarfr.position(49000, 1000);
    destinatareng.position(50000, 1000);
    sursa.position(48000,1000);
    sursaengfr.position(48000, 1000);
    canaleng.position(48000, 1000);
    canal.position(48000, 1000);
    if ( selectedLanguage === "ro" ){
      
      destinatar.style("color", "#000");
      destinatar.style("font-weight", "800");
      destinatar.style("font-size", "20px");
      destinatar.position(1045, 485);
    }else if (selectedLanguage === "en"){ 
      destinatareng.style("color", "#000");
      destinatareng.style("font-weight", "800");
      destinatareng.style("font-size", "20px");
      destinatareng.position(1045, 485);
     
    }else if (selectedLanguage === "fr") {
      destinatarfr.style("color", "#000");
      destinatarfr.style("font-weight", "800");
      destinatarfr.style("font-size", "20px");
      destinatarfr.position(1045, 485);
    }
    
    if ( selectedLanguage === "ro" || selectedLanguage === "fr"){
      
      canal.style("color", "#000");
      canal.style("font-weight", "800");
      canal.style("font-size", "20px");
    canal.position(400, 485);
    }else if (selectedLanguage === "en"){ 
      canaleng.style("color", "#000");
      canaleng.style("font-weight", "800");
      canaleng.style("font-size", "20px");
      canaleng.position(400, 485);
     
    }
    if ( selectedLanguage === "ro" ){
      
       sursa.style("color", "#000");
      sursa.style("font-weight", "800");
      sursa.style("font-size", "20px");
      sursa.position(25, 485);
    }else if (selectedLanguage === "en"  || selectedLanguage === "fr"){ 
      sursaengfr.style("color", "#000");
      sursaengfr.style("font-weight", "800");
      sursaengfr.style("font-size", "20px");
      sursaengfr.position(25, 485);
     
    }

    detector1.position(9000, 9000)
    detector1.style("color","white")
    detector1.style("font-weight","800")
    detector0.position(9000, 9000)
    detector0.style("color","white")
    detector0.style("font-weight","800")

    valoareS2.style("color", "#000");
    valoareS2.style("font-weight", "800");
    valoareS2.position(110, 312);

    if (currentStep < 5) bitDeControlDreapta.style("color", "white");
    else bitDeControlDreapta.style("color", "white");
    bitDeControlDreapta.style("font-weight", "800");
    bitDeControlDreapta.position(177, 265);

    if (currentStep < 5) bitDeControlJos.style("color", "white");
    else bitDeControlJos.style("color", "white");
    bitDeControlJos.style("font-weight", "800");
    bitDeControlJos.position(240, 265);

    cuvantulDeCod.style("color", "white");
    cuvantulDeCod.style("font-weight", "800");
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

    

    // TACTREGISTRU.style("color", "#000");
    // TACTREGISTRU.style("font-weight", "800");
    // TACTREGISTRU.position(5, 30);

   
 

    S3.style("color", "#ffa600");
    S3.style("font-weight", "800");
    S3.position(765, 345);
    S3value.position(785,345)
    S3value.style("color",p5.color(56, 65, 66))
    S4value.position(955, 334)
    S4value.style("color",p5.color(56, 65, 66))
    S4.style("color", "#ffa600");
    S4.style("font-weight", "800");
    S4.position(950, 345);
    S5.style("color", "#ffa600");
    S5.style("font-weight", "800");
    S5.position(982, 122);
    
    detec.style("color", "#ffa600");
    detec.style("font-weight", "800");
    detec.position(830, 405);

    C0d.style("color","white")
    C0d.style("font-weight", "800")
    C0d.position(880,340)
    C0dd.position(880,340)
    C0dd.style("color","white")
    C0dd.style("font-weight", "800")
    

    C1d.style("color","white")
    C1d.style("font-weight", "800")
    C1d.position(860,340)
    C1dd.style("color","white")
    C1dd.style("font-weight", "800")
    C1dd.position(860,340)

    C2d.style("color","white")
    C2d.style("font-weight", "800")
    C2d.position(840,340)
    C2dd.style("color","white")
    C2dd.style("font-weight", "800")
    C2dd.position(840,340)
   
  errorbit1.position(860,340)
  errorbit2.position(860,340)
  errorbit3.position(860,340)
  errorbit4.position(860,340)
  errorbit5.position(860,340)
  errorbit6.position(860,340)
  errorbit7.position(860,340)
  errorbit1ToS3.position(860,340)
  errorbit2ToS3.position(860,340)
  errorbit3ToS3.position(860,340)
  errorbit4ToS3.position(860,340)
  errorbit5ToS3.position(860,340)
  errorbit6ToS3.position(860,340)
  errorbit7ToS3.position(860,340)
  correctbit1.position(860,340)
  correctbit2.position(860,340)
  correctbit3.position(860,340)
  correctbit4.position(860,340)
  correctbit5.position(860,340)
  correctbit6.position(860,340)
  correctbit7.position(860,340)

    

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
    p5.rect(3.5, 40, 15, 60);
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
    p5.rect(0, -10, -60, 50);
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
        if(transmissionEnded) bitDeControlDreapta.style("opacity",0)
        bitDeControlDreapta.position(177 + p5.frameCount * 4, 265);
        if (bitDeControlDreapta.position().x >= 236) {
          bitDeControlDreapta.html("");
        }
      }
      if (bitDeControlJos.position().y <= 410) {
        if(transmissionEnded) bitDeControlJos.style("opacity",0)
        bitDeControlJos.position(240, 265 + p5.frameCount * 4);
        if (bitDeControlJos.position().y >= 410) {
          bitDeControlJos.html("");
        }
      }
     
     
    
     
    }

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
    p5.rect(-10, -45, 15, 50);
    p5.translate(10, -50);
    p5.rect(-20, 0, 120, 15);
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
    p5.fill(c);
    p5.translate(40, 25);
    p5.rect(40, -8, 150, 20);
    p5.translate(170, -78);
    p5.rect(20, -160, 20, 250);
    p5.translate(0, -180);
    p5.rect(-50, 20, 90, 20);
    p5.translate(-30, 0);
    p5.rect(-23, -6, 20, 45);
    p5.pop();

    ///miscare biti
    bitDeInformatie.style("color", "white");
    bitDeInformatieSus.style("color", "white");
    valoareS1.style("color", "white");
    valoareS2Sus.style("opacity", 0);
    valoareS2.style("color", "green");
    valoareS2SusDreapta.style("color", "white");
    bitC1Jos.style("color", "white");
    bitC0Dreapta.style("color", "white");
    bitC0Jos.style("color", "white");
    bitC0JosStanga.style("color", "white");

    if (bitDeInformatie.position().x <= 299) {
      if(transmissionEnded) bitDeInformatie.style("opacity",0)
      bitDeInformatie.position(60 + p5.frameCount * 7, 415);
      if (bitDeInformatie.position().x >= 298 || currentStep === 0) {
        bitDeInformatie.html(""); 
      }
    }

    if (bitDeInformatieSus.position().y >= 320) {
      if(transmissionEnded) bitDeInformatieSus.style("opacity",0)
      bitDeInformatieSus.position(160, 415 - p5.frameCount * 4);
      if (bitDeInformatieSus.position().y <= 320 || currentStep === 0) {
        bitDeInformatieSus.html("");
      }
    }
   
    if (valoareS1.position().y <= 325) {
      if(transmissionEnded) valoareS1.style("opacity",0)
      valoareS1.position(157, 265 + p5.frameCount * 2);
      if (valoareS1.position().y === 325 || currentStep === 0) {
        valoareS1.html("");
      }
    }

    if (valoareS2.position().x >= 60) {
      if(transmissionEnded) valoareS2.style("opacity",0)
      valoareS2.position(132 - p5.frameCount * 3, 312);
      if (valoareS2.position().x === 60 || currentStep === 0) {
        valoareS2.html("");
      }
    }

    if (valoareS2Sus.position().y >= 120) {
      if(transmissionEnded) valoareS2Sus.style("opacity",0)
      valoareS2Sus.position(60, 312 - p5.frameCount * 3);
      if (valoareS2Sus.position().y === 120 || currentStep === 0) {
        valoareS2Sus.html("");
      }
    }
    if (valoareS2SusDreapta.position().x <= 120) {
      if(transmissionEnded) valoareS2SusDreapta.style("opacity",0)
      valoareS2SusDreapta.position(60 + p5.frameCount * 3, 120);
      if (valoareS2SusDreapta.position().x === 120 || currentStep === 0) {
        valoareS2SusDreapta.html("");
      }
    }

    {
      if (bitC1Jos.position().y <= 197) {
        if(transmissionEnded) bitC1Jos.style("opacity",0)
        bitC1Jos.position(135, 120 + p5.frameCount * (currentStep > 0 ? 4 : 0));
        if (bitC1Jos.position().y >= 197 || currentStep === 0) {
          bitC1Jos.html("");
        }
      }
      if (bitC0Dreapta.position().x <= 230) {
        if(transmissionEnded) bitC0Dreapta.style("opacity",0)
        bitC0Dreapta.position(
          175 + p5.frameCount * (currentStep > 0 ? 4 : 0),
          120
        );
        if (bitC0Dreapta.position().x >= 230) {
          bitC0Dreapta.html("");
        }
      }
      if (bitC0Jos.position().y <= 210) {
        if(transmissionEnded) bitC0Jos.style("opacity",0)
        bitC0Jos.position(230, 120 + p5.frameCount * (currentStep > 0 ? 4 : 0));
        if (bitC0Jos.position().y >= 210 || currentStep === 0) {
          bitC0Jos.html("");
        }
      }
      if (bitC0JosStanga.position().x >= 0) {
        if(transmissionEnded) bitC0JosStanga.style("opacity",0)
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
            {cuvantulDeCod.position(250 + p5.frameCount, 425);
              errorWordP.style("opacity",0)
            
            }
          if (cuvantulDeCod.position().x === 660 || transmissionEnded) {
           
            errorWordP.position(660, 425);
           if(positionErrorByUser) {errorWordP.style("color","red"); errorWordP.style("font-weight","800")} else errorWordP.style("color","white")
            
          }
          else errorWordP.position(0,0)
        }
      }
     
      if( transmissionEnded && decoderProps.tactDecoderDom === 1){
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        if (errorbit1.position().y > 124) {
          
        errorbit1ToS3.style("color","white")
        errorbit1ToS3.position(710+ p5.frameCount * .8 , 342)


      errorbit1.position(710 , 425- p5.frameCount * 4); 
      if(errorbit1.position().x > 740){
          errorbit1.position(740,345)
        }   
      } else if (errorbit1.position().y !== 345) {
       errorbit1.position(772,124)
      }


      if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }
    }
      if( transmissionEnded && decoderProps.tactDecoderDom === 2){
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        if (errorbit2.position().y > 124) {
          
          errorbit2ToS3.style("color","white")
          errorbit2ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit2.position(710 , 425- p5.frameCount * 4); 
        if(errorbit2.position().x > 740){
            errorbit2.position(740,345)
          }   
        } else if (errorbit2.position().y !== 345) {
         errorbit2.position(772,124)
        }



        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
    
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }
  
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(792,124)
     
      }
      if( transmissionEnded && decoderProps.tactDecoderDom === 3){
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        
        if (errorbit3.position().y > 124) {
          
          errorbit3ToS3.style("color","white")
          errorbit3ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit3.position(710 , 425- p5.frameCount * 4); 
        if(errorbit3.position().x > 740){
            errorbit3.position(740,345)
          }   
        } else if (errorbit3.position().y !== 345) {
         errorbit3.position(772,124)
        }

        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(792,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(812,124)
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 4){
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
       
        if (errorbit4.position().y > 124) {
          
          errorbit4ToS3.style("color","white")
          errorbit4ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit4.position(710 , 425- p5.frameCount * 4); 
        if(errorbit4.position().x > 740){
            errorbit4.position(740,345)
          }   
        } else if (errorbit4.position().y !== 345) {
         errorbit4.position(772,124)
        }


        if (S3value.position().x < 835)
        { 
          S3value.style("color", "white")
          S3value.position(780+p5.frameCount*3, 340)
        }else{
          S3value.html("")
        }
        
        if (C2d.position().y > 275 && C2d.position().x<950){
            C2d.position(840, 340-p5.frameCount*4)
          }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
            C2d.position(800+p5.frameCount*3, 275)
          }
          else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
            C2d.position(951,235+p5.frameCount*2)
          }
          else {
    
            C2d.html("")
            errorbit1ToS3.html("")
          }
  
        if ( C0d.position().x <= 920 ){
          C0d.position(880+p5.frameCount*3,340)
        }else{
          
          C0d.html("")
        }
        if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(955 + p5.frameCount*4,334)
        
        }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(1015, 334 - p5.frameCount*4)
        }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
          S4value.style("color","white")
          S4value.position(1015-p5.frameCount*3, 219)
        }
        else if (S4value.position().x < 770  && S4value.position().y < 280) {
          S4value.style("color","white")
          S4value.position(769, -100 + p5.frameCount*4)
        }
        else if(S4value.position().y >= 280){
          S4value.html("")
        }


        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(792,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(812,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(832,124)
     
      }
      if( transmissionEnded && decoderProps.tactDecoderDom === 5){
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        
        if (errorbit5.position().y > 124) {
          
          errorbit5ToS3.style("color","white")
          errorbit5ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit5.position(710 , 425- p5.frameCount * 4); 
        if(errorbit5.position().x > 740){
            errorbit5.position(740,345)
          }   
        } else if (errorbit5.position().y !== 345) {
         errorbit5.position(772,124)
        }


        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }


        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(792,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(812,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(832,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(852,124)
     
      }
      
      if(  transmissionEnded && decoderProps.tactDecoderDom === 6){
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")

        if (errorbit6.position().y > 124) {
          
          errorbit6ToS3.style("color","white")
          errorbit6ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit6.position(710 , 425- p5.frameCount * 4); 
        if(errorbit6.position().x > 740){
            errorbit6.position(740,345)
          }   
        } else if (errorbit6.position().y !== 345) {
         errorbit6.position(772,124)
        }


        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(792,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(812,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(832,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(852,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(872,124)
     
      } 
      if(  transmissionEnded && decoderProps.tactDecoderDom === 7){
        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        if (errorbit7.position().y > 124) {
          
          errorbit7ToS3.style("color","white")
          errorbit7ToS3.position(710+ p5.frameCount * .8 , 342)
  
  
        errorbit7.position(710 , 425- p5.frameCount * 4); 
        if(errorbit7.position().x > 740){
            errorbit7.position(740,345)
          }   
        } else if (errorbit7.position().y !== 345) {
         errorbit7.position(772,124)
        }


        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

         
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(792,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(812,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(832,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(852,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(872,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        errorbit1.position(892,124)
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 8){




        if (S3value.position().x < 835)
        { 
          S3value.style("color", "white")
          S3value.position(780+p5.frameCount*3, 340)
        }else{
          S3value.html("")
        }
        
        if (C2d.position().y > 275 && C2d.position().x<950){
            C2d.position(840, 340-p5.frameCount*4)
          }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
            C2d.position(800+p5.frameCount*3, 275)
          }
          else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
            C2d.position(951,235+p5.frameCount*2)
          }
          else {
    
            C2d.html("")
            errorbit1ToS3.html("")
          }
  
        if ( C0d.position().x <= 920 ){
          C0d.position(880+p5.frameCount*3,340)
        }else{
          
          C0d.html("")
        }
        if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(955 + p5.frameCount*4,334)
        
        }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(1015, 334 - p5.frameCount*4)
        }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
          S4value.style("color","white")
          S4value.position(1015-p5.frameCount*3, 219)
        }
        else if (S4value.position().x < 770  && S4value.position().y < 280) {
          S4value.style("color","white")
          S4value.position(769, -100 + p5.frameCount*4)
        }
        else if(S4value.position().y >= 280){
          S4value.html("")
        }



        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(772,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(792,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(812,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(832,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(852,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        errorbit2.position(872,124)
        errorbit1.style("color","white")
        errorbit1.style("font-weight","800")
        if( errorbit1.position().x <972){
        
        errorbit1.position(892 + p5.frameCount*2,124)
        }else{
          errorbit1.html("")
        }
        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        if(correctbit1.position().x < 1130){
          correctbit1.position(1015+p5.frameCount,124)
        }else if(correctbit1.position().x >=1130 && correctbit1.position().y < 430){
            correctbit1.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit1.position().x >=1130 ) {
            correctbit1.position(1175, 440)
            
          }
          
        
        
        
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 9){


        if (S3value.position().x < 835)
        { 
          S3value.style("color", "white")
          S3value.position(780+p5.frameCount*3, 340)
        }else{
          S3value.html("")
        }
        
        if (C2d.position().y > 275 && C2d.position().x<950){
            C2d.position(840, 340-p5.frameCount*4)
          }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
            C2d.position(800+p5.frameCount*3, 275)
          }
          else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
            C2d.position(951,235+p5.frameCount*2)
          }
          else {
    
            C2d.html("")
            errorbit1ToS3.html("")
          }
  
        if ( C0d.position().x <= 920 ){
          C0d.position(880+p5.frameCount*3,340)
        }else{
          
          C0d.html("")
        }
        if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(955 + p5.frameCount*4,334)
        
        }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(1015, 334 - p5.frameCount*4)
        }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
          S4value.style("color","white")
          S4value.position(1015-p5.frameCount*3, 219)
        }
        else if (S4value.position().x < 770  && S4value.position().y < 280) {
          S4value.style("color","white")
          S4value.position(769, -100 + p5.frameCount*4)
        }
        else if(S4value.position().y >= 280){
          S4value.html("")
        }



        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(792,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(812,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(832,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(852,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        errorbit3.position(872,124)
        errorbit2.style("color","white")
        errorbit2.style("font-weight","800")
        if( errorbit2.position().x <972){
        
          errorbit2.position(892 + p5.frameCount*2,124)
          }else{
            errorbit2.html("")
          }
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)
        if( errorbit2.position().x <972){
        
          errorbit2.position(892 + p5.frameCount*2,124)
          }else{
            errorbit2.html("")
          }
          correctbit1.style("color","teal")
          correctbit1.style("font-weight","800")
          correctbit1.position(1175, 440)
          correctbit2.style("color","teal")
          correctbit2.style("font-weight","800")
          if(correctbit2.position().x < 1130){
            correctbit2.position(1015+p5.frameCount,124)
          }else if(correctbit2.position().x >=1130 && correctbit2.position().y < 430){
              correctbit2.position(1130, 124 + p5.frameCount)
            }
          else if(correctbit2.position().x >=1130 ) {
              correctbit2.position(1155, 440)
              
            }
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 10){

        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(812,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(832,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(852,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        errorbit4.position(872,124)
        errorbit3.style("color","white")
        errorbit3.style("font-weight","800")
        if( errorbit3.position().x <972){
        
          errorbit3.position(892 + p5.frameCount*2,124)
          }else{
            errorbit3.html("")
          }
        errorbit2.style("color","white")
        errorbit2.style("opacity",0)
        errorbit2.position(892,124)
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)

        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        correctbit1.position(1175, 440)
        correctbit2.style("color","teal")
        correctbit2.style("font-weight","800")
        correctbit2.position(1155, 440)
        
        correctbit3.style("color","teal")
        correctbit3.style("font-weight","800")
     
        if(correctbit3.position().x < 1130){
          correctbit3.position(1015+p5.frameCount,124)
        }else if(correctbit3.position().x >=1130 && correctbit3.position().y < 430){
            correctbit3.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit3.position().x >=1130 ) {
            correctbit3.position(1135, 440)
            
          }
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 11){

        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(832,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(852,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        errorbit5.position(872,124)
        errorbit4.style("color","white")
        errorbit4.style("font-weight","800")
        if( errorbit4.position().x <972){
        
          errorbit4.position(892 + p5.frameCount*2,124)
          }else{
            errorbit4.html("")
          }
        errorbit3.style("color","white")
        errorbit3.style("opacity",0)
        errorbit3.position(892,124)
        errorbit2.style("color","white")
        errorbit2.style("opacity",0)
        errorbit2.position(892,124)
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)


        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        correctbit1.position(1175, 440)
        correctbit2.style("color","teal")
        correctbit2.style("font-weight","800")
        correctbit2.position(1155, 440)
        correctbit3.style("color","teal")
        correctbit3.style("font-weight","800")
        correctbit3.position(1135, 440)
        correctbit4.style("color","teal")
        correctbit4.style("font-weight","800")

        if(correctbit4.position().x < 1130 &&correctbit4.position().y<440){
          correctbit4.position(1015+p5.frameCount,124)
        }else if(correctbit4.position().x >=1130 && correctbit4.position().y < 430){
            correctbit4.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit4.position().x >=1130 ) {
          correctbit4.position(1115, 440)
          }
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 12){

        if (S3value.position().x < 835)
        { 
          S3value.style("color", "white")
          S3value.position(780+p5.frameCount*3, 340)
        }else{
          S3value.html("")
        }
        
        if (C2d.position().y > 275 && C2d.position().x<950){
            C2d.position(840, 340-p5.frameCount*4)
          }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
            C2d.position(800+p5.frameCount*3, 275)
          }
          else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
            C2d.position(951,235+p5.frameCount*2)
          }
          else {
    
            C2d.html("")
            errorbit1ToS3.html("")
          }
  
        if ( C0d.position().x <= 920 ){
          C0d.position(880+p5.frameCount*3,340)
        }else{
          
          C0d.html("")
        }
        if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(955 + p5.frameCount*4,334)
        
        }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
          S4value.style("color","white")
          S4value.position(1015, 334 - p5.frameCount*4)
        }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
          S4value.style("color","white")
          S4value.position(1015-p5.frameCount*3, 219)
        }
        else if (S4value.position().x < 770  && S4value.position().y < 280) {
          S4value.style("color","white")
          S4value.position(769, -100 + p5.frameCount*4)
        }
        else if(S4value.position().y >= 280){
          S4value.html("")
        }

        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(852,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        errorbit6.position(872,124)
        errorbit5.style("color","white")
        errorbit5.style("font-weight","800")
        if( errorbit5.position().x <972){
        
          errorbit5.position(892 + p5.frameCount*2,124)
          }else{
            errorbit5.html("")
          }
        errorbit4.style("color","white")
        errorbit4.style("opacity",0)
        errorbit4.position(892,124)
        errorbit3.style("color","white")
        errorbit3.style("opacity",0)
        errorbit3.position(892,124)
        errorbit2.style("color","white")
        errorbit2.style("opacity",0)
        errorbit2.position(892,124)
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)


        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        correctbit1.position(1175, 440)
        correctbit2.style("color","teal")
        correctbit2.style("font-weight","800")
        correctbit2.position(1155, 440)
        correctbit3.style("color","teal")
        correctbit3.style("font-weight","800")
        correctbit3.position(1135, 440)
        correctbit4.style("color","teal")
        correctbit4.style("font-weight","800")
        correctbit4.position(1115, 440)
        correctbit5.style("color","teal")
        correctbit5.style("font-weight","800")

        if(correctbit5.position().x < 1130&&correctbit5.position().y<440){
          correctbit5.position(1015+p5.frameCount,124)
        }else if(correctbit5.position().x >=1130 && correctbit5.position().y < 430){
            correctbit5.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit5.position().x >=1130 ) {
            correctbit5.position(1095, 440)
            
          }
     
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 13){
        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }

        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        errorbit7.position(872,124)
        errorbit6.style("color","white")
        errorbit6.style("font-weight","800")
        if( errorbit6.position().x < 972){
        
          errorbit6.position(892 + p5.frameCount*2,124)
          }else{
            errorbit6.html("")
          }
        errorbit5.style("color","white")
        errorbit5.style("opacity",0)
        errorbit5.position(892,124)
        errorbit4.style("color","white")
        errorbit4.style("opacity",0)
        errorbit4.position(892,124)
        errorbit3.style("color","white")
        errorbit3.style("opacity",0)
        errorbit3.position(892,124)
        errorbit2.style("color","white")
        errorbit2.style("opacity",0)
        errorbit2.position(892,124)
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)

        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        correctbit1.position(1175, 440)
        correctbit2.style("color","teal")
        correctbit2.style("font-weight","800")
        correctbit2.position(1155, 440)
        correctbit3.style("color","teal")
        correctbit3.style("font-weight","800")
        correctbit3.position(1135, 440)
        correctbit4.style("color","teal")
        correctbit4.style("font-weight","800")
        correctbit4.position(1115, 440)
        correctbit5.style("color","teal")
        correctbit5.style("font-weight","800")
        correctbit5.position(1095, 440)
        correctbit6.style("color","teal")
        correctbit6.style("font-weight","800")

        if(correctbit6.position().x < 1130&&correctbit6.position().y<440){
          correctbit6.position(1015+p5.frameCount,124)
        }else if(correctbit6.position().x >=1130 && correctbit6.position().y < 430){
            correctbit6.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit6.position().x >=1130 ) {
            correctbit6.position(1075, 440)
            
          }
      }
      if(  transmissionEnded && decoderProps.tactDecoderDom === 14){
        if (S3value.position().x < 835)
      { 
        S3value.style("color", "white")
        S3value.position(780+p5.frameCount*3, 340)
      }else{
        S3value.html("")
      }
      
      if (C2d.position().y > 275 && C2d.position().x<950){
        C2d.position(840, 340-p5.frameCount*4)
      }else if ( C2d.position().y <= 275 && C2d.position().x < 950){
        C2d.position(800+p5.frameCount*3, 275)
      }
      else if ( C2d.position().y >= 275 && C2d.position().y<=340 && C2d.position().x > 950){
        C2d.position(951,235+p5.frameCount*2)
      }
      else {

        C2d.html("")
        errorbit1ToS3.html("")
      }

      if ( C0d.position().x <= 920 ){
        C0d.position(880+p5.frameCount*3,340)
      }else{
        
        C0d.html("")
      }
      if ( S4value.position().x < 1015 && S4value.position().x>770 && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(955 + p5.frameCount*4,334)
      
      }else if (S4value.position().x >= 1015  && S4value.position().y > 220) {
        S4value.style("color","white")
        S4value.position(1015, 334 - p5.frameCount*4)
      }else if( S4value.position().y <= 220 && S4value.position().x >= 770 ) {
        S4value.style("color","white")
        S4value.position(1015-p5.frameCount*3, 219)
      }
      else if (S4value.position().x < 770  && S4value.position().y < 280) {
        S4value.style("color","white")
        S4value.position(769, -100 + p5.frameCount*4)
      }
      else if(S4value.position().y >= 280){
        S4value.html("")
      }
        errorbit7.style("color","white")
        errorbit7.style("font-weight","800")
        if( errorbit7.position().x <972){
        
          errorbit7.position(892 + p5.frameCount*2,124)
          }else{
            errorbit7.html("")
          }
        errorbit6.style("color","white")
        errorbit6.style("opacity",0)
        errorbit6.position(892,124)
        errorbit5.style("color","white")
        errorbit5.style("opacity",0)
        errorbit5.position(892,124)
        errorbit4.style("color","white")
        errorbit4.style("opacity",0)
        errorbit4.position(892,124)
        errorbit3.style("color","white")
        errorbit3.style("opacity",0)
        errorbit3.position(892,124)
        errorbit2.style("color","white")
        errorbit2.style("opacity",0)
        errorbit2.position(892,124)
        errorbit1.style("color","white")
        errorbit1.style("opacity",0)
        errorbit1.position(892,124)

        correctbit1.style("color","teal")
        correctbit1.style("font-weight","800")
        correctbit1.position(1175, 440)
        correctbit2.style("color","teal")
        correctbit2.style("font-weight","800")
        correctbit2.position(1155, 440)
        correctbit3.style("color","teal")
        correctbit3.style("font-weight","800")
        correctbit3.position(1135, 440)
        correctbit4.style("color","teal")
        correctbit4.style("font-weight","800")
        correctbit4.position(1115, 440)
        correctbit5.style("color","teal")
        correctbit5.style("font-weight","800")
        correctbit5.position(1095, 440)
        correctbit6.style("color","teal")
        correctbit6.style("font-weight","800")
        correctbit6.position(1075, 440)
        correctbit7.style("color","teal")
        correctbit7.style("font-weight","800")

        if(correctbit7.position().x < 1130&&correctbit7.position().y<440){
          correctbit7.position(1015+p5.frameCount,124)
        }else if(correctbit7.position().x >=1130 && correctbit7.position().y < 430){
            correctbit7.position(1130, 124 + p5.frameCount)
          }
        else if(correctbit7.position().x >=1130 ) {
            correctbit7.position(1055, 440)
            
          }
     
      }
      if(decoderProps.tactDecoderDom > 7 && transmissionEnded ){
         if(decoderProps.contorStareFixaGasita === decoderProps.tactDecoderDom){
          if(detector1.position().y>180){
            detector1.position(1060,412 - p5.frameCount*4)
          }
         else if(detector1.position().y<=180 && detector1.position().x>995){
            detector1.position(1060-p5.frameCount*.7,180)
          }
         else if(detector1.position().y>170&&detector1.position().x<=995){
            detector1.position(990,180 - p5.frameCount*.5)
          }
          else if (detector1.position().y<170){
            detector1.html("")
          }

         
          detector0.style("color","green")
          detector0.style("font-weight","800")
         }else{
          
          if(detector0.position().y>180){
            detector0.position(1060,412 - p5.frameCount*4)
          }
         else if(detector0.position().y<=180 && detector0.position().x>995){
            detector0.position(1060-p5.frameCount*.7,180)
          }
         else if(detector0.position().y>170&&detector0.position().x<=995){
            detector0.position(990,180 - p5.frameCount*.5)
          }
          else if (detector0.position().y<170){
            detector0.html("")
          }

        
          detector0.style("color","green")
          detector0.style("font-weight","800")
         }
        
      }else{
        detector0.html("")
        detector1.html("")
    }
}


};
}

