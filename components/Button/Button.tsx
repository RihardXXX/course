import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import classNames from "classnames";


const Button = ({children, apeareance, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={classNames(style.button, className, {
            [style.primary] : apeareance === 'primary',
            [style.ghost] : apeareance === 'ghost'
        })} 
            {...props}
        >
            { children }
        </button>
    );
};
export default Button;