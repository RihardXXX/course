import { TagProps } from "./Tag.props";
import classNames from "classnames";
import style from "./Tag.module.css";


const Tag = ({children, size="big", color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={classNames(style.tag, {
                [style.medium]: size === 'medium',
                [style.big]: size === 'big' ,
                [style.medium]: size === 'medium' ,
                [style.ghost]: color === 'ghost' ,
                [style.green]: color === 'green' ,
                [style.grey]: color === 'grey' ,
                [style.red]: color === 'red' ,
                [style.primary]: color === 'primary' ,
            }, className)}
            {...props}
        >
            {
                href ? <a href={href}>{ children }</a> : <>{ children }</>
            }
        </div>
    );
};

export default Tag;