import { useState } from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import ActionItemList from './ActionItemList';
import AddActionItem from './AddActionItem';
import NavBar from './NavBar';
import Key from './Key';
import Weather from './Weather';

function Home(props) {
  
    const [actionList, setActionList] = useState([
      {title: "Drive to Yorkshire", postcode: "YO1", start:"22/04", end: "22/04", status: "Not Started"},
      {title: "Drive to Sheffield", postcode: "Shef", start:"26/04", end: "29/04", status: "Not Started"}
    ])

const [selectedItemsState, setSelectedItemsState] = useState([]);

const [editItem, setEditItem] = useState(1);

const [btnState, setBtnState] = useState(false);

const [newEditedItem, setNewEditedItem] = useState({title: "", postcode:"", start: "", end: "", status:"Not Started"});

const [placeholderState, setNewPlaceholderState] = useState({title: "", postcode:"", start: "", end: ""})

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

  function deleteAll(){
    const smallerArray = [];
     // console.log(smallerArray);
     setActionList(smallerArray);
  }
  
  function addIndextoSelectedArray(index){
    const newSelectedArray = [...selectedItemsState, index];
    setSelectedItemsState(newSelectedArray);
    
    
  }
  function setPostcode(index){
    props.setPostcodeState(actionList[index].postcode);
   //  console.log(postcodeState);
   }
  function deleteSelectedItems(){
    const copyActionList = [...actionList];
    selectedItemsState.forEach((value) => {
      copyActionList.splice(value, 1)
    })
    setActionList(copyActionList);
    }
  
  function getItemToEdit(index){
      // const newEditItemArray = [...editItem, index];
      // setEditItem(newEditItemArray);
      setEditItem(index);
      setNewPlaceholderState(actionList[index]);
    
      
    }
  
    function handleEditButtonClick(){
      setBtnState(btnState => !btnState);
      
      removeFromList(editItem);
    }
  
    let toggleClassCheck = btnState ? '-active': '-hidden';
  
    function handleEditSubmitButton(){
      console.log("this is working")
      console.log("newEditedItem", newEditedItem)
      const finalEditedItem = [...actionList, newEditedItem]
      setActionList(finalEditedItem);
      console.log("action list", actionList)
      setBtnState(btnState => !btnState)
      
  
    }
  
    function handleNewEditedActionItem (e){
      setNewEditedItem({ ...newEditedItem, [e.target.name]: e.target.value });
      
      
    }
  
  
    return (
    <div className="App">
        
        {/* <header>
          {/* <h1>Plan your Actions According to the Weather!</h1> */}
          {/* <NavBar />
        </header> */} 
        
        <Key />
       <hr></hr>
        <main>
          <div className={`edit-button-screen${toggleClassCheck}`}>
            <h1>Please Edit your Action Item</h1>
            <input name="title" 
            onChange={handleNewEditedActionItem}
            placeholder={placeholderState.title}
            value={newEditedItem.title}
            ></input>
            <input name="postcode" 
            onChange={handleNewEditedActionItem}
            placeholder={placeholderState.postcode}
            value={newEditedItem.postcode}
            ></input>
            <input name="start" 
            onChange={handleNewEditedActionItem}
            placeholder={placeholderState.start}
            value={newEditedItem.start}
            ></input>
            <input name="end" 
            onChange={handleNewEditedActionItem}
            placeholder={placeholderState.end}
            value={newEditedItem.end}
            ></input>
            <button onClick={handleEditSubmitButton}>Submit</button>
  
  
          </div>
          <button onClick={handleEditButtonClick} >Edit Item</button>
        <ActionItemList actionList={actionList} 
        removeFromList={removeFromList} 
        setPostcode={setPostcode} 
        addIndextoSelectedArray={addIndextoSelectedArray}
        // editItem={editItem}
        getItemToEdit={getItemToEdit}
        />  
         </main>
      
      <footer>
      <AddActionItem addAction={addAction} 
      removeFromList={removeFromList} 
      deleteAll={deleteAll} 
      actionList={actionList}
      selectedItemsState={selectedItemsState}
      deleteSelectedItems={deleteSelectedItems}
      
      />
      </footer>

    
    
  </div>
  );
}

export default Home;
