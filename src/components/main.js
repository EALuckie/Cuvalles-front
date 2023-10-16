import React from "react";
import '../styles/main.css';
import Dash from "./dash";
import SideBar from "./layout/sideBar";
import Info from "./layout/info";

export const Main = () => {
    return(
        <div className="dash-container">
            <nav className="navbar">
                <SideBar/>
            </nav>
            <div className="display">
                <div className="main">
                    <Dash/>
                </div>
                <div className="side-info">
                    <Info/>
                </div>
            </div>
        </div>
    )
}

export default Main