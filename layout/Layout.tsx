import { LayoutProps } from "./Layout.props";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import classNames from "classnames";
import style from "./Layout.module.css";
import { FunctionComponent } from "react";
import { AppContextProvider } from "../context/app.context.js";


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header}/>
            <Sidebar className={style.sidebar} />
            <div className={style.body}>
                { children }
            </div>
            <Footer className={style.footer} />
        </div>
    );
};

const WithLayout = (Component: FunctionComponent) => {
    return (props: any):JSX.Element =>{
        return (
            <AppContextProvider initialMenu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>     
        );
    };
};

export {
    WithLayout,
};