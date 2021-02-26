import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Joke from "./Joke";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        console.log("jokes get response", res);
        setJokes(res.data);
      })
      .catch(err => console.log("jokes get error", err));
  }, []);

  return (
    <div>
      {jokes.map(joke => {
        <Joke joke={joke} />;
      })}
    </div>
  );
};

export default Jokes;
