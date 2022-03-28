import { WithLayout } from "../../layout/";
import axios from "axios";

const CoursesMain = ({menu}: any) => {
    return (
        <div>
            Courses main page
        </div>
    )
};

export default WithLayout(CoursesMain);

// эта штука будет работать на сервере это сср 
export async function getStaticProps() {
    const firstCategory = 0;
    const url = process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find'; 
  
    return axios.post(url, {
      firstCategory
    })
      .then(({data: menu}) => {
        return {
          props: {
            menu,
          }, // will be passed to the page component as props
        };
      })
      .catch(err => console.log(err));
}