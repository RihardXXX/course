import { HeaderProps } from "./Header.props";
import classNames from "classnames";
// import style from "./Sidebar.module.css";


const Header = ({ ...props}: HeaderProps): JSX.Element => {
    return (
        <div 
            {...props}
        >
            Header
        </div>
    );
};

export default Header;