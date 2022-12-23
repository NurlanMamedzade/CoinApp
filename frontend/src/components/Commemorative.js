import React from "react";
import { useCoins } from "../context/CoinsContext";
import "./stylecss.css";
import { Link } from "react-router-dom";

function Commemorative() {


  const { coins } = useCoins();
  if (coins.length === 0) return <div>Loading...</div>;
  console.log(coins);
  return (
    <div>
      <div className="container">
        <h2 className="homepage">List of the coins</h2>
        <div>
          <input className="input" />
          <button className="search">Search</button>
        </div>
      </div>

      {coins
        ?.filter((coin) => coin.Category === "Commemorative coins")
        .map((filteredCoins) => (
          <div className="filtered">
            <div className="filtered-item" key={filteredCoins.id}>
              <h2>{filteredCoins.Title}</h2>

              <Link to="/:id"> <img src={filteredCoins.url1}></img></Link>

              <i>{filteredCoins.Content}</i>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Commemorative;
