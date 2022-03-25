import classNames from "classnames";
import { useContext } from "react";
import style from "./Menu.module.css";
import { AppContext } from "../../context/app.context.js";
import Courses from './icons/courses.svg';
import Services from './icons/services.svg';
import Books from './icons/books.svg';
import Products from './icons/products.svg';

const firstMenu = [
    { id: 0, route: 'courses', name: 'Курсы', icon: <Courses /> },
    { id: 1, route: 'services', name: 'Сервисы', icon: <Services /> },
    { id: 2, route: 'books', name: 'Книги', icon: <Books /> },
    { id: 3, route: 'products', name: 'Товары', icon: <Products /> },
];

const Menu = (): JSX.Element => {

    const { menu, setMenu, firstCategory } = useContext(AppContext);

    console.log('firstcategory: ', firstCategory);
    console.log('menu: ', menu);

    // первый уровень меню
    const firstLevelMenu = () => {
        return (
            <>
             {
                 firstMenu.map(menu => {
                     return (
                         <div key={menu.route}>
                             <a href={`/${menu.route}`}>
                                 <div className={classNames(style.firstLevel, {
                                     [style.firstLevelMenuActive]: menu.id === firstCategory
                                 })}>
                                     {menu.icon}
                                     <span>
                                         {menu.name}
                                     </span>
                                 </div>
                             </a>
                             { menu.id === firstCategory &&  secondLevelMenu(menu) }
                         </div>
                     );
                 })
             }
            </>
        );
    };

    // второй уровень меню
    const secondLevelMenu = (firstMenu: any) => {
        return (
            <div>
                {
                    menu.map((secondMenu: any) => {
                        return (
                            <div key={secondMenu._id.secondCategory}>
                                <div>
                                    { secondMenu._id.secondCategory }
                                </div>
                                <div className={classNames(style.secondLevel, {
                                    [style.secondLevelOpen]: secondMenu.isOpened
                                })}>
                                    {
                                        threeLevelMenu(secondMenu.pages, firstMenu.route)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    };


    // третий уровень меню
    const threeLevelMenu = (pages: any, route: any) => {
        return (
            pages.map((page: any, index: any) => {
                return (
                    <a 
                        key={`${page._id.secondCategory}-${index}`}
                        href={`/${route}/${page.alias}`}
                        className={classNames(style.threeLevel, {
                            [style.threeLevelActive]: true
                        })}
                    >
                        {
                            page.category
                        }
                    </a>
                );
            })
        );
    };

    return (
        <div className={classNames(style.menu, {

        })}>
            {
                firstLevelMenu()
            }
        </div>
    );
};

export default Menu;