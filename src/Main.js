import "./style/style.css";
import Navbar from "./components/Navbar";
import Cat from "./components/cat/Cat";
import Message from "./components/message/Message";

function Main() {
  return (
    <>
      <Navbar />
      <Cat />
      <Message />
    </>
  );
}

export default Main;
