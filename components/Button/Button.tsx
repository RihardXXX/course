import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import classNames from "classnames";
import ArrowIcon from "./arrow.svg";


const Button = ({children, apeareance, arrow, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={classNames(style.button, className, {
            [style.primary] : apeareance === 'primary',
            [style.ghost] : apeareance === 'ghost'
        })} 
            {...props}
        >
            { children }
            {
                arrow && <span className={classNames(style.arrow, {
                    [style.right]: arrow === 'right',
                    [style.down]: arrow === 'down'
                })}>
                    <ArrowIcon />
                </span>
            }
        </button>
    );
};
export default Button;