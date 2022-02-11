import React from "react";
import ResultData from "../data/ResultData";

const ResultSection = ({ param }) => {
    return (
        <>
            <img
                src={ResultData[param].src}
                alt="결과"
                // onContextMenu={(e) => e.preventDefault()}
                className="resultimage" />
        </>
    )
}

export default ResultSection;