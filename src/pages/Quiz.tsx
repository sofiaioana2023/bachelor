import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Quiz = () => {
  // let r = [1, 0, 1, 1, 0, 1, 0];
  // let cuvantdecodreceptionatsicorectat = [];
  // let pozeinr = 0;
  // let celuleDecodor = [0, 0, 0];
  // let contorStareFixaGasita = 0;
  // let C0 = celuleDecodor[2];
  // let C1 = celuleDecodor[1];
  // let C2 = celuleDecodor[0];
  // const registruStarefixa = [0, 0, 1];
  // let celuleDecodor7: number[] = [];
  // let contorStareFixa = 8;
  // let S4 = 0;
  // let S5 = 0;
  // for (let i = 1; i <= 7; i++) {
  //   C0 = C1;
  //   C1 = C2;
  //   S4 = celuleDecodor[2] ^ celuleDecodor[1];
  //   S5 = S4 ^ r[i - 1];
  //   C2 = S5;
  //   celuleDecodor.unshift(S5);
  //   celuleDecodor.pop();
  //   console.log(` ${i} ${celuleDecodor}`);
  //   if (i === 7) {
  //     celuleDecodor7 = celuleDecodor;
  //   }
  // }
  // let k = 1;

  // if (
  //   celuleDecodor7[0] === 0 &&
  //   celuleDecodor7[1] === 0 &&
  //   celuleDecodor7[2] === 0
  // ) {
  //   console.log("nu sunt erori");
  // }
  // if (
  //   celuleDecodor7[0] === 0 &&
  //   celuleDecodor7[1] === 0 &&
  //   celuleDecodor7[2] === 1
  // ) {
  //   console.log("s-a identificat starea fixa");
  // } else {
  //   console.log("se cauta starea fixa");
  //   for (contorStareFixa = 8; contorStareFixa <= 14; contorStareFixa++) {
  //     C0 = C1;
  //     C1 = C2;
  //     S4 = celuleDecodor7[2] ^ celuleDecodor7[1];
  //     S5 = S4;
  //     C2 = S5;
  //     celuleDecodor7.unshift(S5);
  //     celuleDecodor7.pop();
  //     if (k) {
  //       console.log(
  //         `la tactul ${contorStareFixa} registrul contine val ${celuleDecodor7}`
  //       );
  //     }
  //     if (
  //       celuleDecodor7[0] === 0 &&
  //       celuleDecodor7[1] === 0 &&
  //       celuleDecodor7[2] === 1
  //     ) {
  //       k = 0;
  //       contorStareFixaGasita = contorStareFixa;
  //       pozeinr = 13 - contorStareFixaGasita;
  //       r[r.length - pozeinr - 1] = r[r.length - pozeinr - 1] ^ 1;
  //       cuvantdecodreceptionatsicorectat = r;
  //       console.log(
  //         `tact stare fixa ${contorStareFixaGasita} si secventa r dupa corectie ${cuvantdecodreceptionatsicorectat}`
  //       );
  //     }
  //   }
  // }
  // //corectia erorii

  // console.log(`stare fixa se gaseste la ${contorStareFixaGasita}`);

  return (
    <Layout>
      <div>quiz</div>
    </Layout>
  );
};

export default Quiz;
