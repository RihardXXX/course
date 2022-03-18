import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Paragraph from "../components/Paragraph/Paragraph";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button apeareance="primary" className="121212">button1</Button>
      <br />
      <Button apeareance="ghost">button2</Button>
      <br />
      <Button apeareance="primary" arrow="down">button1</Button>
      <br />
      <Button apeareance="ghost" arrow="right">button2</Button>
      <br />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Optio quod tempore sint est eveniet aspernatur culpa deleniti, saepe tenetur? 
        Voluptate est exercitationem itaque nesciunt maiores ea harum, voluptatum rerum omnis!
      </Paragraph>
      <Paragraph size="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Optio quod tempore sint est eveniet aspernatur culpa deleniti, saepe tenetur? 
        Voluptate est exercitationem itaque nesciunt maiores ea harum, voluptatum rerum omnis!
      </Paragraph>
      <Paragraph size="small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Optio quod tempore sint est eveniet aspernatur culpa deleniti, saepe tenetur? 
        Voluptate est exercitationem itaque nesciunt maiores ea harum, voluptatum rerum omnis!
      </Paragraph>
    </div>
  );
}
