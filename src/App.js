import { useState } from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import ActionItemList from './ActionItemList';
import AddActionItem from './AddActionItem';
import NavBar from './NavBar';
import Key from './Key';
import Weather from './Weather';

function App() {
  
const [actionList, setActionList] = useState([
  {title: "Drive to Yorkshire", postcode: "YO1", start:"22/04", end: "22/04", status: "Not Started"},
  {title: "Drive to Sheffield", postcode: "Shef", start:"26/04", end: "29/04", status: "Not Started"}
])
  
function addAction (newListItem){
  const newList = [...actionList, newListItem];
  setActionList(newList);
  // console.log(actionList)
}

function removeFromList(index){
    //console.log(actionList[index]);
    const smallerArray = actionList.filter(function(item, idx){
     return idx !== index;
    })
    // console.log(smallerArray);
    setActionList(smallerArray);
  }
  
  // console.log(smallerArray);



  return (
  <div className="App">
      
   
      
      <header>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </header>
      
      <Key />
     <hr></hr>
      <main>
      <ActionItemList actionList={actionList} removeFromList={removeFromList}/>  
      </main>
      
      <footer>
      <AddActionItem addAction={addAction}/>
      </footer>

    
    
  </div>
  );
}

export default App;
