import React from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import Layout from "../components/Layout";
import CardHome from "../components/CardHome";
import application from "../icons/application.png";
import quiz from "../icons/quiz.png";
import lecture from "../icons/lectureStudy.webp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import channelCoding from "../icons/exempluChannelCoding.png";
import ClaudeShannon from "../icons/BwtR4mXCAAAjBPg.jpeg";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Home = () => {
  const handleAplicatie = () => {
    window.location.href = "/application";
  };
  const handleQuiz = () => {
    window.location.href = "/quiz";
  };
  const handleCurs = () => {
    window.location.href = "/lecture";
  };
  return (
    <Layout>
      <div className="containerColumnForHomePage">
        <div className="backgroundHome">
          <Typography
            variant="h2"
            gutterBottom
            style={{
              marginTop: "80px",
              color: "aliceblue",
            }}
            className="HammingCode"
          >
            <b>
              Codul Hamming ciclic corector de o eroare utilizat în codarea
              canalului
            </b>
          </Typography>
        </div>
        <div className="introduction">
          <div className="introductionAnimation">
            <Typography
              variant="h3"
              gutterBottom
              style={{ margin: "45px 0px 20px 45px", textAlign: "center" }}
              className="introductionQuestion"
            >
              De ce este necesară utilizarea
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              style={{ margin: "0px 0px 20px 45px", textAlign: "center" }}
              className="introductionQuestion"
            >
              unor astfel de coduri în proiectarea
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              style={{ margin: "0px 0px 20px 45px", textAlign: "center" }}
              className="introductionQuestion"
            >
              sistemelor de comunicații digitale ?
            </Typography>
          </div>

          <Typography variant="h5" className="introductionParagraphsStyle">
            Pentru a transmite sau a stoca informația într-un mod fiabil, fără
            ca integritatea acesteia să fie coruptă în urma interacțiunii
            inevitabile cu anumiți factori perturbatori precum: interferențe
            electromagnetice, zgomot, pătări sau deteriorări în timpul printării
            sau scanării cum ar fi în cazul codurilor QR, congestia rețelei de
            comunicații, pentru a compensa erorile fizice care pot să apară în
            timpul citirii datelor de pe medii optice(CD-uri, DVD-uri și
            Blu-ray-uri). Și lista încă poate continua.
          </Typography>
          <Typography variant="h5" className="introductionParagraphsStyle">
            Cu alte cuvinte, informația pe care o transmitem ne dorim să fie
            aceeași la recepție, să nu conțină erori, iar în caz contrar,
            acestea să fie detectate și corectate pentru a ne putea bucura de
            informația corectă. Acest lucru este posibil prin{" "}
            <b style={{ color: "#3ca60d" }}>codarea canalului</b> care implică
            adăugarea de redundanță mesajului (informației) pentru a-l face mai
            rezistent la zgomot sau alți factori perturbatori, care sunt
            prezenți, din păcate, atât în sistemele de comunicații wireless, cât
            și în cele de stocare magnetică. Spre deosebire de codarea surselor
            (compresie), utilizată pentru a elimina redundanța din surse (de
            exemplu, fișierele zip și imaginile JPEG), implicit de a reduce și
            lățimea de bandă, codarea canalului consumă lățimea de bandă prin
            introducerea biților redundanți.
          </Typography>
          <Typography variant="h5" className="introductionParagraphsStyle">
            Conceptele tehnice și teoremele cheie care au revoluționat
            înțelegerea erorilor în transmiterea de date au fost fondate de
            <b> Claude Shannon</b>, <b>"părintele teoriei informației"</b>.
          </Typography>
          <img
            src={ClaudeShannon}
            style={{
              width: "500px",
              height: "500px",
              alignSelf: "center",
              padding: "15pxs",
            }}
          />
          <Typography variant="h5" className="introductionParagraphsStyle">
            În cadrul lucrării sale intitulate{" "}
            <em>"A Mathematical Theory of Communication"</em>, C.E. Shannon a
            introdus conceptul cunoscut astăzi sub numele de a doua teoremă a
            lui Shannon, care oferă o soluție pentru gestionarea perturbațiilor
            în transmiterea și stocarea informațiilor. Enunțul teoremei
            statuează faptul ca{" "}
            <b style={{ color: "#3ca60d" }}> pe un canal cu interferențe</b>{" "}
            având o anumită capacitate (notată C),{" "}
            <b style={{ color: "#3ca60d" }}>
              este posibilă realizare unei transmisii în timp real a unei surse
              de informație cu un debit (Ḋ) mai mic decât capacitatea canalului,
              cu o probabilitate extrem de mică a erorilor (P(E)), prin
              utilizarea unui cod cu o anumită lungime (n).
            </b>
          </Typography>
          <Typography variant="h5" className="introductionParagraphsStyle">
            A doua teoremă formulată de Claude Shannon evidențiază o observație
            notabilă:{" "}
            <b style={{ color: "#3ca60d" }}>
              indiferent de nivelul de perturbare prezent într-un canal de
              comunicații, teoretic, există posibilitatea de a efectua o
              transmisie cu o probabilitate extrem de mică a erorilor prin
              utilizarea codurilor redundante pentru a asigura protecția
              împotriva perturbațiilor
            </b>
            . În practică se utilizează strategia de adăugare intenționată de
            redundanță înainte de transmiterea informației.
          </Typography>
          <Typography variant="h5" className="introductionParagraphsStyle">
            Această metodă implică utilizarea cuvintelor de cod cu lungimi "n",
            printre care se numără si
            <b>
              {" "}
              Codul Hamming ciclic corector de o eroare, notat cu C(n,m)
            </b>{" "}
            pe care îl vom aborda. Acest cod este utilizat în realitate, spre
            exemplu, în comunicații prin satelit deoarece semnalele pot fi
            susceptibile la erori datorate interferențelor și zgomotului în
            mediul de transmisie sau în memorii ECC (Error correction code) care
            stau la baza sistemelor de stocare RAID 2(Redundant Array of
            Independent Disks) capabile să recupereze datele în cazul unei
            defectări a unui disc și poate corecta corupția datelor doar atunci
            când datele și paritatea corespunzătoare sunt intacte.
          </Typography>
          <Typography variant="h5" className="introductionParagraphsStyle">
            Un exemplu mai accesibil tututor persoanelor care nu dispun de
            limbajul tehnic și care descrie mai bine efectul pe care îl are
            adăugarea de redundanță sursei codate înainte de a fi transmisă pe
            canalul de comunicație este ilustrat în figura de mai jos.
          </Typography>
          <img
            src={channelCoding}
            style={{ width: "1200px", height: "400px", alignSelf: "center" }}
          />
          <Typography variant="h5" className="introductionParagraphsStyle">
            <b>Scenariu </b> : Alexa dorește să trimită 5 imagini colegei sale
            de bancă, Alina. Înainte de a transmite cele 5 imagini, pachetului
            de date trimis i se adaugă un fișier care conține indexul
            corespunzător fiecărei imagini. La recepție, Alina primește doar 4
            imagini din cele 5. De-a lungul transmiterii prin canal se constată
            că imaginea 3 a fost coruptă de factori perturbatori, deci trebuie
            retransmisă. Astfel, Alina va putea recupera a treia imagine care
            lipsește datorită fișierului adăugat care conține indecșii celor 5
            imagini. În teoria transmiterii informației, imaginile ar putea fi
            traduse ca fiind biții de informație (căci vorbim despre un sistem
            digital), iar fișierul adăugat în plus poartă denumirea de bit
            redundant(sau de control, de paritate). Deci lungimea cuvântului de
            cod transmis va fi egal cu rezultatul sumei biților menționați
            anterior. Datorită biților redundanți adăugați în structura
            cuvântului de cod la recepție informația poate coincide cu cea de la
            emisie, iar în caz de erori, prin biții redundanți este posibilă
            detecția și corecția lor. Un astfel de impact îl poate avea și Codul
            Hamming ciclic corector de o eroare, iar pentru o înțelegere mai
            bună a acestuia utilizatorul este invitat să parcurgă secțiunile de
            mai jos.
          </Typography>
        </div>
        <div className="cardsHomeContainer">
          <Card
            sx={{ width: 400, height: 500, marginRight: "20px" }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={lecture}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Curs</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="button-container">
              <div className="quote">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "600" }}
                >
                  <em>
                    "Rădăcinile educației sunt amare, dar fructul este dulce."
                  </em>
                </Typography>
                <div
                  style={{
                    width: "240px",
                    borderBottom: "solid 1px  #93938E",
                    margin: "7px 0px",
                  }}
                ></div>
                <Typography style={{ fontWeight: "600" }}>Aristotel</Typography>
              </div>
              <Button
                size="small"
                color="primary"
                style={{
                  backgroundColor: "#93938f",
                  color: "aliceblue",
                  fontWeight: "700",
                }}
                onClick={handleCurs}
              >
                Începe
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{ width: 400, height: 500, marginRight: "20px" }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={application}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Aplicație</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="button-container">
              <div className="quote">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "600" }}
                >
                  <em>"Exemplul este cel mai bun percept."</em>
                </Typography>
                <div
                  style={{
                    width: "240px",
                    borderBottom: "solid 1px  #93938E",
                    margin: "7px 0px",
                  }}
                ></div>
                <Typography style={{ fontWeight: "600" }}>Aesops</Typography>
              </div>
              <Button
                size="small"
                color="primary"
                style={{
                  backgroundColor: "#93938f",
                  color: "aliceblue",
                  fontWeight: "700",
                }}
                onClick={handleAplicatie}
              >
                Începe
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{ width: 400, height: 500, marginRight: "20px" }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={quiz}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>Quiz</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="button-container">
              <div className="quote">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "600" }}
                >
                  <em>
                    "Fă o pasiune din a învăța. Astfel, niciodată nu te vei opri
                    din a crește."
                  </em>
                </Typography>
                <div
                  style={{
                    width: "240px",
                    borderBottom: "solid 1px  #93938E",
                    margin: "7px 0px",
                  }}
                ></div>
                <Typography style={{ fontWeight: "600" }}>
                  {" "}
                  Anthony J. DAngelo
                </Typography>
              </div>
              <Button
                size="small"
                color="primary"
                style={{
                  backgroundColor: "#93938f",
                  color: "aliceblue",
                  fontWeight: "700",
                }}
                onClick={handleQuiz}
              >
                Testează-ți cunoștințele
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
