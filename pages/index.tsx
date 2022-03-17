import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Hello</Htag>
      <Button apeareance="primary" className="121212">button1</Button>
      <br />
      <Button apeareance="ghost">button2</Button>
    </div>
  );
}
