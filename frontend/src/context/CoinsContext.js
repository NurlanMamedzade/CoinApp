import axios from "axios";

const { createContext, useEffect, useState, useContext } = require("react");

const CoinsContext = createContext()
const CoinsProvider = ({children}) =>{


    const [coins,setCoins] = useState([])

    useEffect(()=>{
        
          
          axios.get(`http://localhost:4025/`)
          .then((res) => {
            setCoins(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
       
    },[])
    
    const data = {
        coins
    }
    
    return <CoinsContext.Provider value={data}>{children}</CoinsContext.Provider>
}

const useCoins = () => useContext(CoinsContext)

export {
    CoinsProvider, useCoins
}



