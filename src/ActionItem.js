export default function ActionItem (props){
   
   
function handleCompletedAction(e){
   if(e.target.value === "completed"){
      props.removeFromList(props.index);  
   }
}

function handleSelect(e){
    if(e.target.value === "select"){
        console.log("props.index", props.index)
        props.addIndextoSelectedArray(props.index);
    }
    if(e.target.value === "edit"){
        props.getItemToEdit(props.index);
    }
}

function handlePostcodeClick(e){
    // console.log(props.index)
    props.setPostcode(props.index);
}




    
    return(
     <div className='action-item'>
        <select onChange={handleSelect} className='select-dropdown'>
            <option>Select an Option</option>
            <option value="edit">Edit</option>
            <option  value="select">Select</option>
        </select>
        <p className='action-text'>{props.item.title}</p>
        <p onClick={handlePostcodeClick} className="postcode">{props.item.postcode}</p>
        <p className='action-start-date'>{props.item.start}</p>
        <p className='action-end-date'>{props.item.end}</p>
        <select onChange={handleCompletedAction} name='status' id="status">
            <option value="backlog">Not Started</option>
            <option value="doing">In Progress</option>
            <option value="completed">Completed</option>
        </select>
    </div>
        
    )
}

