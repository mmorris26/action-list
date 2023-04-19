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

const [postcodeState, setPostcodeState] = useState("RG209BE");
  
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

function setPostcode(index){
 setPostcodeState(actionList[index].postcode);
 console.log(postcodeState);
}

function deleteAll(index){
  const deleteAllArray = [...actionList, {title: "", postcode: "", start: "", end: "", status:""} ];
  setActionList(deleteAllArray)
}

  return (
  <div className="App">
      
      <header>
        <NavBar />
        
      </header>
      
      <Key />
     <hr></hr>
      <main>
      <ActionItemList actionList={actionList} removeFromList={removeFromList} setPostcode={setPostcode}/>  
      <Routes>
          <Route path="/weather" element={<Weather postcodeState={postcodeState}/>} />
      </Routes>
      
      </main>
      
      <footer>
      <AddActionItem addAction={addAction} removeFromList={removeFromList} deleteAll={deleteAll} actionList={actionList}/>
      </footer>

    
    
  </div>
  );
}

export default App;
