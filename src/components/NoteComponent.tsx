import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslation } from "react-i18next";

const NoteComponent: React.FC<{ selectedColor: string }> = ({
  selectedColor,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const savedTitle = localStorage.getItem("savedTitle");
    const savedContent = localStorage.getItem("savedContent");

    if (savedTitle && savedContent) {
      setTitle(savedTitle);
      setContent(savedContent);
      setIsSaved(true);
    }
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    setIsSaved(true);
    setIsEditMode(false);
    localStorage.setItem("savedTitle", title);
    localStorage.setItem("savedContent", content);
  };

  const handleDelete = () => {
    setTitle("");
    setContent("");
    setIsSaved(false);
    setIsEditMode(true);
    localStorage.removeItem("savedTitle");
    localStorage.removeItem("savedContent");
  };

  const noteStyle = {
    backgroundColor: selectedColor,
  };

  // Set the background color for input and textarea
  const inputStyle = {
    backgroundColor: selectedColor,
    height: "45px",
    width: "90%",
    outline: "none",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
  };

  const textareaStyle = {
    backgroundColor: selectedColor,
    height: "700px",
    width: "90%",
    outline: "none",
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div className="note-component" style={noteStyle}>
      {!isSaved ? (
        <>
          {isEditMode ? (
            <input
              type="text"
              placeholder="..."
              value={title}
              onChange={handleTitleChange}
              style={inputStyle}
            />
          ) : (
            <h2>
              <b>{title}</b>
            </h2>
          )}

          {isEditMode ? (
            <textarea
              placeholder="..."
              value={content}
              onChange={handleContentChange}
              style={textareaStyle}
            />
          ) : (
            <div>{content}</div>
          )}
          <Button
            style={{
              backgroundColor: "#B1BBC9",
              color: "#000",
              fontWeight: "600px",
              alignSelf: "end",
              margin: "25px",
            }}
            onClick={handleSave}
          >
            <b>{t("Save")}</b>
            <SaveIcon style={{ color: "#000" }} />
          </Button>
        </>
      ) : (
        <div className="savedNote">
          <h2 style={inputStyle}>
            <b>{title}</b>
          </h2>
          <div
            style={{ backgroundColor: "gray", height: "1px", width: "1000px" }}
          ></div>
          <div style={textareaStyle}>{content}</div>
        </div>
      )}
      {isSaved && (
        <Button
          style={{
            backgroundColor: "#B1BBC9",
            color: "#000",
            fontWeight: "600px",
            alignSelf: "end",
            margin: "25px",
          }}
          onClick={handleDelete}
        >
          <b>{t("Delete")}</b> <DeleteSweepIcon style={{ color: "#000" }} />
        </Button>
      )}
    </div>
  );
};

export default NoteComponent;
