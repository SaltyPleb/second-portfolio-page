import React from 'react'
import './middleWindow.scss'

const MiddleWindow = () => {
    return (
        <div className="middle_screen">
            <div className="left_top_btns">
                <div className="btn red"></div>
                <div className="btn green"></div>
            </div>
            <div className="board"></div>
        </div>
    )
}

export default MiddleWindow
