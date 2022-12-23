import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios(`http://localhost:4025/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (details.length === 0) return <div>Loading...</div>;
  return (
   
        <>
          {details?.[5].Title}
        </>
    
  );
}

export default Details;

