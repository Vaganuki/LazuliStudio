import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {NavBar} from "./components/core/nav-bar/NavBar.tsx";
// import {Homepage} from "./components/homepage/Homepage.tsx";
import {StreamingPricing} from "./components/pricing/streaming/StreamingPricing.tsx";

function App() {

    return (
        <>
            <NavBar/>
            <StreamingPricing/>
            <Footer/>
        </>
    )
}

export default App
