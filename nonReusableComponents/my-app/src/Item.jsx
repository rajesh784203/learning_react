export default function Item() {
    return <div className="flex border-2 w-1/2 rounded-2xl bg-pink-100 my-4">
        <img className="border-2 rounded-2xl w-60" src="https://img.freepik.com/premium-photo/mountain-fuji-winter-framed-by-dry-fall-tree-pink-color_39408-2354.jpg?semt=ais_hybrid&w=740&q=80" ></img>
        <div className="flex flex-col justify-center align-middle ml-4 p-4">
            <p className="font-bold text-xl">JAPAN</p>
            <h2 className="font-extrabold text-2xl">Mount Fuji</h2>
            <h4 className="text-xs mb-4">12 Jan 2021 - 29 Apr 2021</h4>
            <p>Mount Fuji is Japan's highest and most iconic volcano, standing at 3,776 meters. Located near Tokyo, it is a sacred symbol in Japanese culture and a popular destination for climbers and tourists. Known for its nearly perfect cone shape, Mount Fuji is especially stunning when snow-capped and has inspired countless artworks, poems, and traditions over the centuries.</p>
        </div>
    </div>
}