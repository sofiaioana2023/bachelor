import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NoteComponent from "../components/NoteComponent";

const TakeNotes = () => {
  const [areColorsHidden, setAreColorsHidden] = useState(true);
  const [selectedColor, setSelectedColor] = useState(""); // Track the selected color

  const toggleColors = () => {
    setAreColorsHidden(!areColorsHidden);
  };

  const handleColorClick = (color: any) => {
    // Show NoteComponent when a color is clicked
    setSelectedColor(color);
  };

  return (
    <Layout>
      <div className="takeNotescontainer">
        <Typography
          variant="h3"
          gutterBottom
          style={{ margin: "100px 0px 50px 0px" }}
        >
          <b>
            Scrie-ți propriile notițe pentru un proces de învățare mai organizat
          </b>
        </Typography>

        <div className="createNotesContainer">
          <div className="addNotesContainer">
            <div className="addColorsForNotes">
              <Button
                onClick={toggleColors}
                style={{
                  margin: "100px 0px 50px 0px",
                  backgroundColor: "#fafafa",
                  height: "45px",
                }}
              >
                <AddIcon style={{ color: "#050505" }} />
              </Button>
              {["#fcfa9f", "#c8ed9a", "#94e3df", "#569ef5", "#f29dfa"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`color-box ${
                      areColorsHidden ? "hide-colors" : "show-colors"
                    }`}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      margin: "25px 0px",
                      transition: "opacity 0.5s",
                    }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                )
              )}
            </div>
          </div>
          <div className="addedNotesContainer">
            {selectedColor && <NoteComponent selectedColor={selectedColor} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TakeNotes;
