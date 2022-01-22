import "./style/style.css";
import Navbar from "./components/navbar/Navbar";
import Cat from "./components/cat/Cat";
import Message from "./components/message/Message";
import { Context } from ".";
import { useContext } from "react";
import MiddleWindow from "./components/middleWindow/MiddleWindow";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const Main = observer(() => {
  const { backgroundImage } = useContext(Context);

  return (
    <Router>
      <AppRouter />
      <div className="main">
        {backgroundImage.bluredBackground ? <MiddleWindow /> : null}
        <Navbar />
        <Cat />
        {backgroundImage.bluredBackground ? null : <Message />}
      </div>
    </Router>
  );
});

export default Main;
