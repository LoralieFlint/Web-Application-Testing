import React from "react";

const Dashboard = (props) => {
    return (
        <>
        <div className="buttonWrapper">
            <button className="btn" onClick={props.addBall}>Ball</button>
            <button className="btn" onClick={props.addStrike}>Strike</button>
            <button className="btn" onClick={props.addFoul}>Foul</button>
            <button className="btn" onClick={props.addOut}>Out</button>
            <button className="btn" onClick={props.clear}>Clear All</button>
        </div>
        </>

    )
}
export default Dashboard;