import { useState } from "react";

export default function AddActionItem(props){
    
const [newActionItem, setNewActionItem] = useState({title: "", postcode:"", start: "", end: "", status:"Not Started"})

    
    function handleNewActionItem (e){
        setNewActionItem({ ...newActionItem, [e.target.name]: e.target.value });
        // console.log(newActionItem)
    }
    function handleButtonClick(){
        // console.log(newActionItem)
        props.addAction(newActionItem);
        
    }
    function handleDeleteAll(){
        props.deleteAll();
    }
    function handleDeleteSelected(){
        props.deleteSelectedItems();
        
    }


   
    return(

        <div className='add-new-item-bar'>
          <button onClick={handleDeleteAll}className="delete-all-button">Delete All</button>
          <button onClick={handleDeleteSelected}className="delete-selected-button">Delete Selected</button>
          <div className='add-action-item-div'>
            <input
                type="text"
                name="title"
                value={newActionItem.title} 
                onChange={handleNewActionItem} 
                placeholder='Add New Action Item' 
                id="add-action-item" 
                size="40">
            </input>
          </div>
          <input
            type="text"
            name="postcode"
            value={newActionItem.postcode} 
            onChange={handleNewActionItem}
            placeholder='Postcode'>
          </input>
          <div className='add-start-date-div'>
            <input
                type="text"
                name="start" 
                value={newActionItem.start}
                onChange={handleNewActionItem}
                placeholder='Start Date' 
                id="add-start-date">
            </input>
          </div>
          <div className='add-end-date-div'>
            <input 
                type="text"
                name="end"
                value={newActionItem.end}
                onChange={handleNewActionItem}
                placeholder='End Date' 
                id="add-end-date">
            </input>
          </div>
          <div className='add-item-button-div'>
            <button 
                onClick={handleButtonClick}
                className='add-new-item-button' 
                id="add-item-button">Add New Action Item
            </button>
          </div>
        </div>
    )
}