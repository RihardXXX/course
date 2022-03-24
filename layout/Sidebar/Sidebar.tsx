import { SidebarProps } from "./Sidebar.props";
import classNames from "classnames";
import style from "./Sidebar.module.css";


const Sidebar = ({ ...props}: SidebarProps): JSX.Element => {
    return (
        <div 
            {...props}
        >
            SideBar
        </div>
    );
};

export default Sidebar;