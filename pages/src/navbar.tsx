import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/Home">Home</Link>
            <Link href="/About">About</Link>
        </nav>
    )
}

export default Navbar