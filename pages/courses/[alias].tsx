import { WithLayout } from "../../layout/";
import PropTypes from 'prop-types';
import axios from "axios";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

// Мощный инстурмент
// Создаем пути для приложения
// создаем по всем путям страницы статичные для прода
// билд npm run build 
// прод npm run start

const firstCategory = 0;
const urlMenu = process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find';

const Courses = ({menu, page, products}: any) => {
  console.log('menu: ', menu);
  console.log('page: ', page);
  console.log('products: ', products);

  return (
    <>

    </>
  );
};

export default WithLayout(Courses);


// [
//   '/courses/financial-analytics',
//   '/courses/big-data',
//   '/courses/data-science',
//   '/courses/machine-learning',
//   '/courses/excel',
//   '/courses/business-analytics',
//   '/courses/analytics-for-executives',
//   '/courses/power-bi',
//   '/courses/data-analytics',
//   '/courses/system-analytics',
//   ....
// ];

// ========================== это ssr работаем на сервере ====================================

// при помощи этой штуки мы видим роуты при запросах генерируем их чтобы дальше делать запросы 
// верхние роуты чтобы позружались
export async function getStaticPaths() {
  return axios.post(urlMenu, { firstCategory })
    .then(({data: menu}) => {
      console.log(menu.flatMap((m: any) => m.pages.map((p: any) => '/courses/' + p.alias)));
      return {
        // сюда прописываем роуты чтобы были доступны в нижней функции
        paths: menu.flatMap((m: any) => m.pages.map((p: any) => '/courses/' + p.alias)),
        fallback: true // false or 'blocking'
      };
    })
    .catch(error => {
      console.log(error);
    });
}

// эта штука будет работать на сервере это сср для пропсов прирендер
export async function getStaticProps({params}: GetStaticPropsContext<ParsedUrlQuery>) {

  if(!params) {
      return {
          notFound: true
      };
  }  

  // console.log('params: ', params); 
  const urlPage = process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias; 
  const urlProducts = process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/';

  // все пропсы которые будем возвращать
  let dataProps = {};

  // Получаем меню и страницу
  return Promise.all([
    axios.post(urlMenu, { firstCategory }),
    axios.get(urlPage),
  ])
    .then(([resMenu, resPage]) => {
        // console.log('menu: ', resMenu.data);
        // console.log('page: ', resPage.data);
        const menu = resMenu.data;
        const page = resPage.data;
        // заполняем пропсы с меню и страницей и делаем запрос уже на продукты
        dataProps = { menu, page };
        // axios.post(urlMenu, { category: page.category, limit: 10 })
        return axios.post(urlProducts, { category: page.category, limit: 10 });
    })
    .then(({data: products}) => {
      // console.log('product: ', products);
      // Возвращаем все данные для страницы
      return { 
        props : {
          ...dataProps,
          products
        }
      };
    })
    .catch(err => {
        console.log(err);
    });
}
  