//TODO: use window.scrollTo to make it so that instead of links, Home and About are buttons that scroll to their sections of the page
import Link from "next/link";

const Navbar = () => { 
    return (
        <nav className="navbar">
            <ul>
                <button className="navbarText" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Home</button>
                <button className="navbarText" onClick={() => window.scrollTo({top: 5000, behavior: "smooth"})}>About</button>
            </ul>
        </nav>
    )
}

export default Navbar