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

export {
    firstMenu,
};