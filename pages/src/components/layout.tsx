import { ReactNode } from "react";
import Navbar from "./navbar";

interface props {
    children?: ReactNode;
}

const Layout = ({ children }: props) => {
    return (
        <div>
            <Navbar />
            { children }
        </div>
    );
}
//TODO, put in _app.tsx?
export default Layout;