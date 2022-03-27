import classNames from "classnames";
import { useContext } from "react";
import style from "./Menu.module.css";
import { AppContext } from "../../context/app.context.js";
import Courses from './icons/courses.svg';
import Services from './icons/services.svg';
import Books from './icons/books.svg';
import Products from './icons/products.svg';
import Link from "next/link";
import { useRouter } from "next/router";

const firstMenu = [
    { id: 0, route: 'courses', name: 'Курсы', icon: <Courses /> },
    { id: 1, route: 'services', name: 'Сервисы', icon: <Services /> },
    { id: 2, route: 'books', name: 'Книги', icon: <Books /> },
    { id: 3, route: 'products', name: 'Товары', icon: <Products /> },
];

const Menu = (): JSX.Element => {

    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevelMenu = (secondCategory: string) => {
        setMenu && setMenu(menu.map((m: any) => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    // console.log('firstcategory: ', firstCategory);
    console.log('menu112: ', menu);

    // первый уровень меню
    const firstLevelMenu = () => {
        return (
            <>
             {
                 firstMenu.map(menu => {
                    console.log(`/${menu.route}` === router.asPath);
                     return (
                         <div key={menu.route}>
                             <Link href={`/${menu.route}`}>
                                <a>
                                    <div className={classNames(style.firstLevel, {
                                        [style.firstLevelMenuActive]: `/${menu.route}` === router.asPath
                                    })}>
                                        {menu.icon}
                                        <span>
                                            {menu.name}
                                        </span>
                                    </div>
                                </a>
                            </Link>    
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
            <div className={style.secondBlock}>
                {
                    menu.map((secondMenu: any) => {
                        // делаем проверку на активный блок
                        // console.log(11111, router.asPath);
                        if (secondMenu.pages.map((p: any) => p.alias).includes(router.asPath.split('/')[2])) {
                            secondMenu.isOpened = true;
                        }

                        // console.log(2222, secondMenu);

                        return (
                            <div 
                                key={secondMenu._id.secondCategory}
                                className={classNames(style.secondSection)}
                            >
                                <div 
                                    className={classNames(style.secondLevel)}
                                    onClick={() => openSecondLevelMenu(secondMenu._id.secondCategory)}
                                >
                                    { secondMenu._id.secondCategory }
                                </div>
                                <div className={classNames(style.secondLevelBlock, {
                                    // [style.secondLevelOpen]: secondMenu.isOpened
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
                    <Link 
                        href={`/${route}/${page.alias}`}
                        key={`${page._id.secondCategory}-${index}`}
                    >
                        <a
                            className={classNames(style.threeLevel, {
                                [style.threeLevelActive]: `/${route}/${page.alias}` === router.asPath
                            })}
                            >
                            {
                                page.category
                            }
                        </a>
                    </Link>
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