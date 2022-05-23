import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Questions from "../components/Questions";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const classes = useStyles();

  const [options, setOptions] = useState();
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQ]?.correct_answer,
          ...questions[currentQ]?.incorrect_answers,
        ])
    );
  }, [currentQ, questions]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className={classes.quiz}>
      <span className={classes.title}>Welcome, {name}</span>

      {questions ? (
        <>
          <div className={classes.quizInfo}>
            <span>{questions[currentQ].category}</span>
            <span>Score: {score}</span>
          </div>

          <Questions
            currentQ={currentQ}
            setCurrentQ={setCurrentQ}
            options={options}
            correct={questions[currentQ]?.correct_answer}
            score={score}
            setScore={setScore}
            questions={questions}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;

const useStyles = makeStyles({
  quiz: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
  },

  title: {
    fontSize: "25px",
    border: "1px solid black",
    boxShadow: "4px 4px 2px black",
    padding: "5px 10px",
  },

  quizInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
});
