import { FooterProps } from "./Footer.props";
import classNames from "classnames";
import style from "./Footer.module.css";
import { format } from "date-fns";


const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer 
            {...props}
            className={classNames(className, style.footer)}
        >
            <div className={style.copyright}>
                OwlTop © 2020 - { format(new Date(), 'yyyy') } Все права защищены
            </div>
            <a href="#" target="_blank" className={style.agreement}>
                Пользовательское соглашение
            </a>
            <a href="#" target="_blank" className={style.political}>
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export default Footer;