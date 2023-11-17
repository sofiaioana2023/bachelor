import { Home } from "@mui/icons-material";
import React, { ReactNode, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import InfoIcon from "@mui/icons-material/Info";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import iconRO from "../icons/icons8-romania-48.png";
import iconFR from "../icons/icons8-france-48.png";
import iconEN from "../icons/icons8-english-48.png";
import iconTTI from "../icons/icons8-technology-64.png";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 8,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [language, setLanguage] = useState<string>("");
  const handleLanguage = (e: { target: { value: string } }) => {
    setLanguage(e.target.value);
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="layoutContainer">
      <header>
        <nav className="navbar">
          <div className="navbarLeft">
            <img
              src={iconTTI}
              alt="TTI"
              style={{ width: "56px", height: "56px" }}
            />
            <p
              style={{
                padding: "3px 2px",
                fontSize: "25px",
                textShadow: "1px 1px 1px yellow",
              }}
            >
              {t("Information Transmission Theory")}
            </p>
          </div>
          <div className="links">
            <NavLink
              to="/"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#93938f" : "#272928", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <Home />
                </span>
                <div>{t("Home")}</div>
              </li>
            </NavLink>

            <NavLink
              to="/lecture"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#93938f" : "#272928", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <LightbulbIcon />
                </span>
                <div>{t("Lecture")}</div>
              </li>
            </NavLink>

            <NavLink
              to="/notes"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#93938f" : "#272928", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <EditNoteIcon />
                </span>
                <div>{t("Notes")}</div>
              </li>
            </NavLink>

            <NavLink
              to="/application"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#93938f" : "#272928", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <SchoolIcon />
                </span>
                <div>{t("Application")}</div>
              </li>
            </NavLink>

            <NavLink
              to="/quiz"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#93938f" : "#272928", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <PsychologyAltIcon />
                </span>
                <div>{t("Quiz")}</div>
              </li>
            </NavLink>

            <NavLink
              to="/about"
              className="navItem"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#93938f" : "#272928",
                color: isActive ? "black" : "white",
                "&:hover": {
                  backgroundColor: isActive ? "#272928" : "#93938f", // Match the hover color with the active state
                  color: "black", // Change the text color on hover
                },
              })}
            >
              <li className="navItem">
                <span className="iconMenu">
                  <InfoIcon />
                </span>
                <div>{t("About")}</div>
              </li>
            </NavLink>

            <div className="relativeLanguageSelector">
              <FormControl sx={{ m: 1, width: "50px" }} variant="outlined">
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={language}
                  onChange={handleLanguage}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={""} onClick={() => changeLanguage("ro")}>
                    <img
                      src={iconRO}
                      alt="RO"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <b>RO</b>
                  </MenuItem>
                  <MenuItem value={""} onClick={() => changeLanguage("en")}>
                    <img
                      src={iconEN}
                      alt="EN"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <b>EN</b>
                  </MenuItem>
                  <MenuItem value={""} onClick={() => changeLanguage("fr")}>
                    <img
                      src={iconFR}
                      alt="FR"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <b>FR</b>
                  </MenuItem>
                </Select>
              </FormControl>
              <div style={{ marginRight: "10px" }}>
                <LanguageIcon />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="contentPage">{children}</main>
    </div>
  );
};

export default Layout;
