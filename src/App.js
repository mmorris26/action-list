import { useState } from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import ActionItemList from './ActionItemList';
import AddActionItem from './AddActionItem';
import NavBar from './NavBar';
import Key from './Key';
import Weather from './Weather';
import Home from './Home';


function App() {
  
  

const [postcodeState, setPostcodeState] = useState("RG209BE");



  // console.log(smallerArray);






  return (
  <div className="App">
      
      <header><NavBar /></header>
      
     <hr></hr>
      <main>
        
      <Routes>
         <Route path="/home" element={<Home setPostcodeState={setPostcodeState}/>} /> 
          <Route path="/weather" element={<Weather postcodeState={postcodeState}/>} />
      </Routes>
      
      </main>
  </div>
  );
}

export default App;
