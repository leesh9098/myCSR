import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ResultSection from "../components/ResultSection";
import SocialShareButton from "../components/button/SocialShareButton";
import ResultData from "../data/ResultData";
import ResetButton from "../components/button/ResetButton";

export default function TestResult() {
    const { param } = useParams();
    const currentUrl = window.location.href;

    return (
        <>
            <Helmet>
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={ResultData[param]["ogTitle"]} />
                <meta property="og:description" content={ResultData[param]["ogDescription"]} />
                <meta property="og:image" content={ResultData[param]["ogImage"]} />
                <meta property="twitter:card" content="summary" />
                <meta name="twitter:title" content={ResultData[param]["ogTitle"]} />
                <meta name="twitter:description" content={ResultData[param]["ogDescription"]} />
                <meta name="twitter:image" content={ResultData[param]["ogImage"]} />
            </Helmet>
            <div className="">
                <ResultSection param={param}></ResultSection>
                <SocialShareButton />
                <ResetButton to="/" />
            </div>
        </>
    )
}