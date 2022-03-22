import { useEffect, useState } from "react";
import Button from "../components/Button";
import Htag from "../components/Htag";
import Paragraph from "../components/Paragraph";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import { WithLayout } from "../layout/Layout";

const Home = () => {

  // useState
  const [counter, setCounter] = useState<number>(() => 1);
  const [rating, setRating] = useState<number>(3);

  // useEffect
  // mounted hook
  useEffect(() => {
    console.log('start component');
  }, []);

  // updated hook
  useEffect(() => {
    console.log('change counter: ', counter);
    // return () => console.log('component did un,ounted');
  }, [counter]);


  return (
    <>
      <Htag tag="h1">
        { counter }
      </Htag>
      <Button 
        apeareance="primary" 
        className="121212"
        onClick={() => setCounter(counter => counter + 1)}
      >
        button1
      </Button>
      <br />
      <Button apeareance="ghost">button2</Button>
      <br />
      <Button apeareance="primary" arrow="down">button1</Button>
      <br />
      <Button apeareance="ghost" arrow="right">button2</Button>
      <br />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </Paragraph>
      <Paragraph size="medium">
        Optio quod tempore sint est eveniet aspernatur culpa deleniti, saepe tenetur? 
      </Paragraph>
      <Paragraph size="small">
        Voluptate est exercitationem itaque nesciunt maiores ea harum, voluptatum rerum omnis!
      </Paragraph>
      <Tag color="grey" size="medium">grey medium</Tag>
      <Tag color="red" size="big" href="https://www.hh.ru">red big href</Tag>
      <Tag color="primary" size="medium"> primary medium</Tag>
      <Tag color="green" size="medium">green medium</Tag>
      <br />
      <Rating 
        rating={rating} 
        isEditable 
        setRating={setRating}
      />
    </>
  );
};

export default WithLayout(Home);
