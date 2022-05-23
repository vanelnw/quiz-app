import { Button, makeStyles, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Categories from "../Data/Categories";
import ErrorMessage from "../components/ErrorMessage";
import { useHistory } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions }) => {
  const classes = useStyle();

  const history = useHistory();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className={classes.home}>
      <div className={classes.setting}>
        <span>Quiz settings</span>
        <div className={classes.settingsSelect}>
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            label="enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={classes.textField}
          />

          <TextField
            select
            label="Select category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className={classes.textField}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            className={classes.textField}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/undraw_quiz.svg" className={classes.banner} alt="quizimage" />
    </div>
  );
};

export default Home;

const useStyle = makeStyles((theme) => ({
  home: {
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },

  setting: {
    width: "45%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: "300",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  banner: {
    width: "55%",
    alignSelf: "center",
    padding: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  settingsSelect: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    width: "100%",
  },

  textField: {
    marginBottom: "25px",
  },
}));
