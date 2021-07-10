import './styles/App.css';
import './styles/navigation.css'
import './styles/tile.css'
import Tile from './components/Tile';
// import Filter from './components/Filter';

import React, { useEffect, useState } from "react";
import Navigation from './components/Navigation';

function App() {
  
let server="https://estateagencyapi.herokuapp.com"
const [houses, fillHouses] = useState([]);

  useEffect(()=>{
    async function fetchHouses(){        
        let response = await fetch(server + "/houses")      
        fillHouses( await response.json()) 
  //      loaded(true) //invoking the 'loaded' 'setter' function will trigger a refresh of the component        
    }
    fetchHouses()
  }    
  ,[server])
  
  return (
  
    <div className="App">
      <Navigation />
      {/* <Filter /> */}
      <header className="App-header">
      {houses.map(
        h =>
        <Tile price={h.price} area={h.area} image={h.image} type={h.type} key={h.id} houseId = {h.id} />
        )
      }
     
      </header>
    </div>
  );
}

export default App;
