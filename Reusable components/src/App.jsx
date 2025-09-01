import Navbar from "./Navbar"
import Item from "./Item"
import Data from "./Data"

function App() {
  return <>
  <Navbar/>
  <div className="p-4 flex flex-col items-center justify-center">
  {Data.map((place) => (<Item key = {place.id} {...place} />))}
  </div>
  </>
}
export default App
