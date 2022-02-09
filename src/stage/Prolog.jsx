import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import "../reset.css";
import "../App.css";

export default class Prolog extends React.Component {

    componentDidMount() {
        ReactGA.initialize('G-XSYRGNC2PX');
        ReactGA.send("pageview");
    }

    start() {
        window.localStorage.setItem("JUVEJTgwJUI0JUVDJUE2JTg4JUVBJUI4JUIwJUVCJUExJTlE", "MQ==");
        window.localStorage.setItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4", "MA==");
    }
    
    render() {
        return (
            <div className="wrap">
                <div className="titlebox">
                    <p className="museumBold titletext">2022</p>
                    <p className="museumBold titletext">대학생 능력고사</p>
                </div>
                <p className="museumMedium subtitletext">당신의 대학교 용어 점수는 과연?</p>
                <div className="line"></div>
                <div className="imagearea">

                </div>
                <p className="suitRegular numberofuser">현재 10,402명이 참여</p>
                <Link to="/quiz">
                    <button className="nextbutton" onClick={this.start}>시작하기</button>
                </Link>
                <div className="logoarea">

                </div>
            </div>
        )
    }
}