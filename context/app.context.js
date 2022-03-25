import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// создаём контекст
const AppContext = createContext();

// валидация пропсов
// AppContext.propTypes = {
//     menu: PropTypes.array,
//     firstCategory: PropTypes.object,
//     setMenu: PropTypes.function,
// };

// создаём компонент провайдер чтобы пробрасывать все данные по приложению
const AppContextProvider = ({children, initialMenu, firstCategory}) => {
    const [menu, setMenu] = useState([]);

    // для инициализации первичного меню
    useEffect(() => {
        setMenu(initialMenu);
    }, [initialMenu]);

    return (
        <AppContext.Provider value={{menu, firstCategory, setMenu}}>
            { children }
        </AppContext.Provider>
    );
};

export { 
    AppContextProvider, 
    AppContext
};