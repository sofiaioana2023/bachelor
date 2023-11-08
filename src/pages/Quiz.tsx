import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Quiz = () => {
  const clock = () => {
    return new Date().toLocaleTimeString("ro-RO");
  };

  console.log(clock());
  return (
    <Layout>
      <div>
        {/* Your TakeNotes component content goes here */}
        quiz
      </div>
    </Layout>
  );
};

export default Quiz;
