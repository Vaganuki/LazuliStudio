import './App.css'
import {Footer} from "./components/core/footer/Footer.tsx";
import {NavBar} from "./components/core/nav-bar/NavBar.tsx";
import {Homepage} from "./components/homepage/Homepage.tsx";

function App() {

    return (
        <>
            <NavBar/>
            <Homepage/>
            <Footer/>
        </>
    )
}

export default App
