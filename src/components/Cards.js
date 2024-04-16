import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
  //       )
  //       .then((res) => setData(res.data));
  //     console.log(data);
  //   }, [data]);

  return (
    <div className="cards-container">
      <div className="card">
        <p>title</p>
      </div>
    </div>
  );
};

export default Cards;
