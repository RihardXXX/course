import { SidebarProps } from "./Sidebar.props";
import classNames from "classnames";
import style from "./Sidebar.module.css";
import Menu from "../menu";


const Sidebar = ({ ...props}: SidebarProps): JSX.Element => {
    return (
        <div 
            {...props}
        >
            <Menu />
        </div>
    );
};

export default Sidebar;