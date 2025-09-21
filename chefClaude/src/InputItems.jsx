export default function Inputitems({inputhandler}){
    return         <form action={inputhandler}>
              <input type="text"  name="item" className="border-2 rounded-xl px-3 py-2" placeholder="Eg. Carrots"></input>
              <button className="border-2 rounded-xl px-3 py-2 bg-black text-white ml-2">+ Add Ingredient</button>
            </form>
}