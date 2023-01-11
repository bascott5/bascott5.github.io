//TODO: use window.scrollTo to make it so that instead of links, Home and About are buttons that scroll to their sections of the page
import Link from "next/link";

const Navbar = () => {    
    return (
        <nav className="navbar">
            <ul>
                <Link className="navbarText" href="/src/pages/home">Home</Link>
                <Link className="navbarText" href="/src/pages/about">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar