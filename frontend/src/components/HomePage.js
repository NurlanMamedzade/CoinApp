
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import "./stylecss.css";
import { useCoins } from "../context/CoinsContext";
function HomePage() {
  const { coins } = useCoins();

  // console.log(coins);
  if (coins.length === 0) return <div>Loading...</div>;
  return (
    <div className={styles.homepage}>
      <div className="container">
        <h2 className="homepage">Homepage</h2>
        <div className={styles.row}>
          <input className="input" />
          <button className="search">Search</button>
        </div>

        <div className="all-coins">
          <div className="commemorative">
            <h2>{coins?.[0].Category}</h2>
            <img src={coins?.[0].url1} />
            <Link to="/commemorative">
              <button>Show All</button>
            </Link>
          </div>

          <div className="bullion">
            <h2>{coins?.[8].Category}</h2>
            <img src={coins?.[8].url1} />
            
            <Link to="/bullion">
              <button>Show All</button>
            </Link>
          </div>

          <div className="exclusive">
            <h2>{coins[21].Category}</h2>
            <img src={coins[21].url1} />
           
             <Link to="/exclusive">
              <button>Show All</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
