import { FooterProps } from "./Footer.props";
import classNames from "classnames";
import style from "./Sidebar.module.css";


const Footer = ({ ...props}: FooterProps): JSX.Element => {
    return (
        <div 
            {...props}
        >
            Footer
        </div>
    );
};

export default Footer;