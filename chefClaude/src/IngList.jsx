import { RiDeleteBinFill } from "react-icons/ri";

export default function IngList({items, removeItem}){
    return <div>
         {items.length > 0 && 
        <div className="mt-4 w-1/4">
        <h3 className="mb-2 text-xl font-bold">Ingredients selected :</h3>
        <ul>{items.map((item,id) => <div className="flex justify-between items-center mb-2" key={id}><li>{item}</li><button className="bg-black text-white p-2 ml-2 rounded-xl" onClick={()=>removeItem(id)}><RiDeleteBinFill /></button></div>)}</ul>
        </div> 
        }
    </div>
}