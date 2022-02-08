import React from "react";
import ResultData from "../data/ResultData";

const ResultSection = ({ param }) => {
    return (
        <>
            <p>당신은 혹시?</p>
            <img src={ResultData[param].src} alt="결과" />
            <p>{ResultData[param].title}</p>
            <p>{ResultData[param].ogTitle}</p>
            <p>{ResultData[param].ogDescription}</p>
        </>
    )
}

export default ResultSection;