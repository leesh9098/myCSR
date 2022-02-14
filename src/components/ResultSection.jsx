import React from "react";
import ResultData from "../data/ResultData";

const ResultSection = ({ param }) => {
    return (
        <>
            <p style={{ color: 'red', fontWeight: 'bold', fontSize: "30px" }}>{window.atob(window.sessionStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))}</p>
            <img
                src={ResultData[param].src}
                alt="결과"
                onContextMenu={(e) => e.preventDefault()}
                className="resultimage" />
        </>
    )
}

export default ResultSection;