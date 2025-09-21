export default function SubmitItems({items}){
    return    <div className=""> {items.length > 3 &&
        <div className="mt-8 flex justify-start items-center bg-stone-200 px-4 py-4 w-1/3 rounded-2xl">
          <div className="flex-col justify-items-start">
          <p className="font-mono">Let's start cooking!!</p>
          </div>
          <button className="border-2 rounded-xl px-3 py-2 bg-black text-white ml-4">Submit items</button>
        </div>
        }</div>
}