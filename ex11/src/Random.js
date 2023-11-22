import React, { useEffect, useState } from "react";
import "./Random.css";

const Random = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  const randomJoke = async () => {
    setLoading(true);
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&explicit&type=single");
    const data = await res.json();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    randomJoke();
  }, []);

  return (
    <div className="joke">
      <i className="fa-solid fa-face-laugh-beam"></i>
      <p>{joke.joke}</p>
      <button onClick={randomJoke} className={`${loading ? "loading" : ""} active`}>
        <span className="border-span"></span>
        <span className="text">Get random joke</span>
      </button>
      <h5>Meo meo ham choi</h5>
    </div>
  );
};

export default Random;