import { ReactNode } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface props {
    children?: ReactNode;
}

const Layout = ({ children }: props) => {
    return (
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;