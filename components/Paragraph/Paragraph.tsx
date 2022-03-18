import { ParagraphProps } from "./Paragraph.props";
import classNames from "classnames";
import style from "./Paragraph.module.css";


const Paragraph = ({children, size="big", className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p className={classNames(style.p, {
                [style.small]: size === 'small',
                [style.medium]: size === 'medium',
                [style.big]: size === 'big' 
            }, className)}
            {...props}
        >
            { children }
        </p>
    );
};

export default Paragraph;