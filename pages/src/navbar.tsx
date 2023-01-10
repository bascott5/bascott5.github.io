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