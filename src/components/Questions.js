import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Questions = ({
  currentQ,
  setCurrentQ,
  options,
  correct,
  score,
  setScore,
  questions,
  setQuestions,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return classes.select;
    } else if (selected === i && selected !== correct) {
      return classes.wrong;
    } else if (i === correct) {
      return classes.select;
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQ > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrentQ(currentQ + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQ(0);
    setQuestions();
  };

  return (
    <div className={classes.question}>
      <h1>Question {currentQ + 1}</h1>
      <div className={classes.singleQuestion}>
        <h2>{questions[currentQ].question}</h2>
        <div className={classes.options}>
          {error && <ErrorMessage>Error</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`${classes.singleOption} ${
                  selected && handleSelect(i)
                }`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className={classes.controls}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currentQ > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;

const useStyles = makeStyles((theme) => ({
  question: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  singleQuestion: {
    width: "95%",
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    border: "5px solid grey",
    padding: "20px",
    marginTop: "10px",
  },

  options: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-aroound",
    margin: "10px",
  },

  singleOption: {
    width: "46%",
    height: "50px",
    padding: "15px 20px",
    margin: "10px",
    boxShadow: "0 0 2px black",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  select: {
    backgroundColor: "rgb(7, 207, 0)",
    color: "white",
    boxShadow: "0 0 1px black",
  },

  wrong: {
    backgroundColor: "rgb(233, 0, 0)",
    color: "white",
    boxShadow: "0 0 1px black",
  },

  controls: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
}));
