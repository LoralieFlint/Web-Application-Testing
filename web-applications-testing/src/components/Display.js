import React from "react";

const Display = (props) => {
    return (
        <>
        <div className="wrapper">
            <div className="atBat">
                <h2 className="type">Ball</h2>
                <h2 className="count">{props.balls}</h2>
            </div>
            <div className="atBat">
                <h2 className="type">Strike</h2>
                <h2 className="count">{props.strikes}</h2>
            </div>
            <div className="atBat">
                <h2 className="type">Foul</h2>
                <h2 className="count">{props.strikes}</h2>
            </div>
            <div className="atBat">
                <h2 className="type">Outs</h2>
                <h2 className="count">{props.outs}</h2>
            </div>
        </div>
        </>
    )

}
export default Display;