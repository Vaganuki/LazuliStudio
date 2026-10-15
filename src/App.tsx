import './App.css'
import {HotOffers} from "./components/hot_offers/HotOffers.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {

  return (
    <>
      <h1>Lazuly Studio</h1>
      <button>Bouton ↗</button>
      <HotOffers/>
        <Footer></Footer>
    </>
  )
}

export default App
