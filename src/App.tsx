import './App.css'
import {HotOffers} from "./components/hot_offers/HotOffers.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {Trusted} from "./components/trusted/Trusted.tsx";
import {Hero} from "./components/hero/Hero.tsx";
import {NavBar} from "./components/nav-bar/NavBar.tsx";

function App() {

    return (
        <>
            <NavBar/>
            <Hero/>
            <HotOffers/>
            <Trusted/>
            <Footer/>
        </>
    )
}

export default App
