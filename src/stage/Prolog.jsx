import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import "../reset.css";
import "../App.css";
import { Helmet } from "react-helmet";
import MainThumbnail from "../images/mainthumbnail.png";

export default class Prolog extends React.Component {

    componentDidMount() {
        ReactGA.initialize(process.env.REACT_APP_GA_ID);
        ReactGA.send("pageview");
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:title" content="2022 대학생 능력고사" />
                    <meta property="og:description" content="당신의 대학교 용어 점수는?" />
                    <meta property="og:image" content={MainThumbnail} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="trepick" />
                    <meta name="twitter:title" content="2022 대학생 능력고사" />
                    <meta name="twitter:description" content="당신의 대학교 용어 점수는?" />
                    <meta name="twitter:image" content={MainThumbnail} />
                </Helmet>
                <div className="wrap">
                    <div className="titlebox">
                        <p className="museumBold titletext">2022</p>
                        <p className="museumBold titletext">대학생 능력고사</p>
                    </div>
                    <p className="museumMedium subtitletext">당신의 대학교 용어 점수는 과연?</p>
                    <div className="line"></div>
                    <div className="imagearea"></div>
                    <p className="suitRegular numberofuser">현재 10,402명이 참여</p>
                    <Link to="/quiz">
                        <button className="nextbutton">시작하기</button>
                    </Link>
                    <div className="logoarea"></div>
                </div>
            </>
        )
    }
}