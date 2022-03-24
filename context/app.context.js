import { createContext } from 'react';
import PropTypes from 'prop-types';


const AppContext = createContext([], { topLevelCategory: 'courses' }, () => ({}));


AppContext.propTypes = {
    menu: PropTypes.array,
    firstCategory: PropTypes.object,
    setMenu: PropTypes.object,
};

export default AppContext;