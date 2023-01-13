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