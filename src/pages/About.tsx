import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import CoderAnimation from "../components/CoderAnimation";
import drIngBorda from "../icons/dringborda.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import carteTTI from "../icons/TTI.png";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const email = "monica.borda@com.utcluj.ro";
  const goToEmail = () => {
    window.location.href = `mailTo:${email}`;
  };
  return (
    <Layout>
      <Box className="aboutLayout">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="continutAbout">
            <Typography variant="h6">
              <span style={{ marginLeft: "20px" }}></span>
              {t(
                "Această aplicație este destinată studenților din cadrul Academiei Forțelor Terestre Nicolae Bălcescu din Sibiu, de la programul de studii intitulat Inginerie și management în domeniul comunicațiilor militare pentru a fi utilizată atât ca suport teoretic, cât și practic la disciplina"
              )}
              <b>„{t("Teoria Transmiterii Informației")}”</b>,
              {t("curs susținut")}
              <b>
                {" "}
                {t("de către prof. univ. dr. ing. Monica Borda Elena")}
              </b>{" "}
              {t(
                "a cărei dăruire didactică a contribuit la realizarea acestui instrument educativ."
              )}
            </Typography>
            <Typography variant="h6">
              <span style={{ marginLeft: "20px" }}></span>
              {t(
                "Aplicația în sine nu reprezintă decât o ilustrare sumară a implementării Codului Hamming ciclic corector de o eroare în scopul de a fi cât mai accesibilă studentului. Acesta din urmă poate naviga către trei secțiuni :"
              )}
              <b>„{t("Curs")}” </b>{" "}
              {t(
                "pentru a dobândi cunoștintele fundamentale referitoare la codul vizat,"
              )}
              <b>„{t("Application")}”</b>{" "}
              {t(
                "în cadrul căreia utilizatorul poate simula atât procesul de codare, cât și decodarea prin regiștrii de deplasare cu reacție cu sumatoare modulo-2 exterioare. A treia secțiune denumită"
              )}{" "}
              <b>„{t("Quiz")}”</b>,{" "}
              {t(
                "oferă studentului ocazia de a-și evalua noțiunile asimilate."
              )}
            </Typography>
            <Typography variant="h6">
              {t(
                "Pentru o înțelegere mai profundă a conceptelor enunțate în cadrul aplicației, se sugerează lecturarea cărții:"
              )}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={carteTTI}
                style={{ height: "200px", margin: "15px 0px" }}
              />
            </div>
            <Typography variant="h6">
              <span style={{ marginLeft: "20px" }}></span>
              <em>
                <b>
                  "
                  {t(
                    "Rod a 20 de ani de activitate didactică și științifică, lucrarea constituie prima parte a cursului de Teoria Transmiterii Informației ținut la Universitatea Tehnică din Cluj Napoca și cuprinde principiile de bază ale teorie informației și codării."
                  )}
                  "
                </b>
              </em>
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h6" style={{ marginBottom: "15px" }}>
                <b>- {t("Prof. univ. dr. ing.")} Monica Borda Elena</b>
              </Typography>
            </div>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "800px",
              width: "8px",
              background:
                "linear-gradient(90deg, rgba(5,5,5,0.8225884103641457) 10%, rgba(0,0,0,0) 100%, rgba(0,212,255,1) 100%",
              borderRadius: "8px",
            }}
          ></div>
        </div>
        <Box
          id="aici vor fi cardurile"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: 405, height: 470 }}>
            <CardActionArea>
              <CardMedia component="img" height="255" image={drIngBorda} />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  style={{ textAlign: "center" }}
                  variant="h5"
                >
                  <b>{t("Prof. univ. dr. ing.")} BORDA Monica Elena </b>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ padding: "15px 10px" }}
                >
                  <Box>
                    <a href="https://www.linkedin.com/in/monica-borda-a665b63b/">
                      <LinkedInIcon />
                    </a>

                    <Typography
                      variant={"h6"}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Box style={{ display: "flex" }}>
                        <Box onClick={goToEmail}>
                          <EmailIcon style={{ marginRight: "4px" }} />
                        </Box>
                        <Box>{email}</Box>
                      </Box>

                      <Box style={{ display: "flex" }}>
                        <PermIdentityIcon style={{ marginRight: "4px" }} />
                        <Typography variant={"h6"}>
                          <a href="https://doctorat.utcluj.ro/cvs/AuH6iyNbFp2DALh8KpNePUqxLsAmc1SNvATgdBQW.pdf">
                            Curriculum vitae
                          </a>
                        </Typography>
                      </Box>
                    </Typography>
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
