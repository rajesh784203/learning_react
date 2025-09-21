import { useState } from "react";
import Nav from "./Nav";
import IngList from "./IngList";
import SubmitItems from "./SubmitItems";
import Inputitems from "./InputItems";
function App(){

  let [items, setItems] = useState([])

  function inputhandler(formData){
    let item = formData.get("item")
    setItems(prevItems => [...prevItems, item])
  }

  function removeItem(key){
    setItems(prevItems => prevItems.filter((_,id) => id !== key))
  }


  return <div>
    <Nav/>  
    <div className="p-4">
      <Inputitems inputhandler={inputhandler} />
      <IngList items={items} removeItem={removeItem}/>
      <SubmitItems items={items} />
    </div>
  </div>
}

export default App