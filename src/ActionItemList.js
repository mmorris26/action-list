import ActionItem from "./ActionItem";

export default function ActionItemList(props){

const newActionList = props.actionList.map(function(item, index){  
    return <ActionItem item={item} key={index} index={index} 
    removeFromList = {props.removeFromList} 
    actionList={props.actionList}
    setPostcode={props.setPostcode}
    />
})

return( 
  <>
  

  <h4>{newActionList}</h4>
  </>
    
 )
 

}
