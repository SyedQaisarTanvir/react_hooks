import React, { useEffect, useState } from "react";
import Axios from "axios";

function UseEffect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  return data.map((post) => {
    const [id, title, body] = data;
    return (
      <>
        <h1>{id}</h1>
      </>
    );
  });
}

export default UseEffect;
