import { LayoutProps } from "./Layout.props";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import classNames from "classnames";
import style from "./Layout.module.css";


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    { children }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;