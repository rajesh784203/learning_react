import { useState } from "react"
import { IoIosStarOutline } from "react-icons/io"; // false
import { IoIosStar } from "react-icons/io"; // true

function App() {

  let [obj, setObj] = useState({
    firstName : "John",
    lastName : "Doe",
    mobile : 7884719748,
    relation : "doctor",
    isfav : false
  })

  function toggle(){
    setObj( prevObj => { return {
      ...prevObj, 
      isfav : !prevObj.isfav
    }
  })
  }

  return <div className="flex flex-col border-2 m-10 p-4">
    <h2>{obj.firstName} {obj.lastName}</h2>
    <h4>mobile : {obj.mobile}</h4>
    <h4>relation: {obj.relation}</h4>
    <button onClick={toggle}>{obj.isfav ? <IoIosStar/> : <IoIosStarOutline/>  }</button>
  </div>

}

export default App