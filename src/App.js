import { useState } from 'react';


import './App.css';
import ActionItemList from './ActionItemList';
import AddActionItem from './AddActionItem';
import NavBar from './NavBar';
import Key from './Key';

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

// function removeFromList(index){
//   const smallerArray = actionList.filter(function(item){
//    return item.index === index
//   })
//   setActionList(smallerArray);
// }


  return (
  <div className="App">
      
    <body>
      
      <header>
        <NavBar />
      </header>
      
      <Key />
     <hr></hr>
      <main>
      <ActionItemList actionList={actionList} />  
      </main>
      
      <footer>
      <AddActionItem addAction={addAction}/>
      </footer>

    
    </body>
  </div>
  );
}

export default App;
