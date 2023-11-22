import React, { useEffect, useState } from "react";

const Ex1 = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("dog");
  const [url, setUrl] = useState(`https://loremflickr.com/320/240/${type}`);

  const changeType = () => {
    if (type === "dog") {
      setType("cat");
    } else {
      setType("dog");
    }
  };

  useEffect(() => {
    setUrl(`https://loremflickr.com/320/240/${type}`);
  }, [type]);

  return (
    <div className="us-page">
      <div className="result">{count}</div>
      <button size="lg" onClick={() => setCount(count + 1)}>
        Click
      </button>
      <hr />
      <button size="lg" onClick={changeType}>
        Change
      </button>
      <p>{url}</p>
      <img src={url} alt="" />
    </div>
  );
};

export default Ex1;
