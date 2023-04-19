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

const [selectedItemsState, setSelectedItemsState] = useState([]);

const [editItem, setEditItem] = useState({});

const [btnState, setBtnState] = useState(false);
  

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
//  console.log(postcodeState);
}

function deleteAll(){
  const smallerArray = [];
   // console.log(smallerArray);
   setActionList(smallerArray);
}

function addIndextoSelectedArray(index){
  const newSelectedArray = [...selectedItemsState, index];
  setSelectedItemsState(newSelectedArray);
  
  
}

function deleteSelectedItems(){
  const copyActionList = [...actionList];
  selectedItemsState.forEach((value) => {
    copyActionList.splice(value, 1)
  })
  setActionList(copyActionList);
  }

function getItemToEdit(index){
  console.log("action list index", actionList[index])
  }

  function handleEditButtonClick(){
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? '-active': '-hidden';


  return (
  <div className="App">
      
      <header>
        <NavBar />
        
      </header>
      
      <Key />
     <hr></hr>
      <main>
        <div className={`edit-button-screen${toggleClassCheck}`}>
          <h1>Please Edit your Action Item</h1>
        </div>
        <button onClick={handleEditButtonClick}>Edit Item</button>
      <ActionItemList actionList={actionList} 
      removeFromList={removeFromList} 
      setPostcode={setPostcode} 
      addIndextoSelectedArray={addIndextoSelectedArray}
      // editItem={editItem}
      getItemToEdit={getItemToEdit}
      />  
      <Routes>
          <Route path="/weather" element={<Weather postcodeState={postcodeState}/>} />
      </Routes>
      
      </main>
      
      <footer>
      <AddActionItem addAction={addAction} 
      removeFromList={removeFromList} 
      deleteAll={deleteAll} 
      actionList={actionList}
      selectedItemsState={selectedItemsState}
      deleteSelectedItems={deleteSelectedItems}
      // getItemToEdit={getItemToEdit}
      // editItem={editItem}
      />
      </footer>

    
    
  </div>
  );
}

export default App;
