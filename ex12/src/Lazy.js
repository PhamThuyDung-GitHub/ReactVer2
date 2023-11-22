import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Lazy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch data from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();

        // Set the data
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lazy Loaded Component</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Lazy;
