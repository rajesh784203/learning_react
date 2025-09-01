export default function Item({img, cntry, place, dates, descr}) {
    return <div className="flex border-2 w-1/2 rounded-2xl bg-pink-100 my-4">
        <img className="border-2 rounded-2xl w-60" src={img} ></img>
        <div className="flex flex-col justify-center align-middle ml-4 p-4">
            <p className="font-bold text-xl">{cntry}</p>
            <h2 className="font-extrabold text-2xl">{place}</h2>
            <h4 className="text-xs mb-4">{dates}</h4>
            <p>{descr}</p>
         </div>
    </div>
}