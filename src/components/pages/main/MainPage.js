import React from 'react'
import { Context } from '../../..';
import { useContext } from "react";
import MiddleWindow from "../../middleWindow/MiddleWindow"
import Cat from "../../cat/Cat"
import Message from "../../message/Message"
import { observer } from 'mobx-react-lite';

const MainPage = observer(() => {
    const { backgroundImage } = useContext(Context);
    return (
        <div className="main">
        {backgroundImage.bluredBackground ? <MiddleWindow /> : null}
        <Cat />
        {backgroundImage.bluredBackground ? null : <Message />}
      </div>
    )
})

export default MainPage
