import ActionItem from "./ActionItem";

export default function ActionItemList(props){
    console.log(props);
const newActionList = props.actionList.map(function(item, index){  
    return <ActionItem item={item} key={index} index={index} />
})




return( 
  <>
  
  <h4>{newActionList}</h4>
  </>
    
 )
 

}
