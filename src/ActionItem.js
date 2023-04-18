export default function ActionItem (props){
    // console.log(props)
function handleCompletedAction(e){

   if(e.target.value === "completed"){
    
      props.removeFromList(props.index);  
   }
}
    
    return(
     <div className='action-item'>
        <button className='select-button'></button>
        <p className='action-text'>{props.item.title}</p>
        <p className="postcode">{props.item.postcode}</p>
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

