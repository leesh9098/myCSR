import React from "react";
import { useNavigate } from "react-router-dom";
import ResultData from "../data/ResultData";
import SsunivLogo from "../images/sangsanguniv.png";
import Giveaway from "../images/경품.png";

const ResultSection = ({ param }) => {
    const navigate = useNavigate();

    const intoEvent = () => {
        navigate("/event");
    }

    return (
        <>
            <p style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: "30px" 
            }}>
                {window.atob(window.sessionStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))}
            </p>
            <img
                src={ResultData[param].src}
                alt="결과"
                onContextMenu={(e) => e.preventDefault()}
                className="resultimage"
            />
            <img
                src={SsunivLogo}
                alt="상상유니브 로고"
                onContextMenu={(e) => e.preventDefault()}
                className="ssunivlogo"
            />
            <p className="suitBold giveawaytitle">대학생 능력고사 경품 이벤트</p>
            <div className="giveawayinfowrap">
                <p className="suitRegular giveawayinfo">상상유니브에 관한 퀴즈를 맞추고</p>
                <p className="suitRegular giveawayinfo">출석체크하면 경품 추첨 응모 완료!</p>
            </div>
            <img
                src={Giveaway}
                alt="경품_아이폰,스타벅스기프티콘"
                onContextMenu={(e) => e.preventDefault()}
                className="giveaway"
            />
            <button className="suitExtraBold nextbutton" onClick={intoEvent}>
                경품 이벤트 참여하기
            </button>
            <div className="eventinfowrap">
                <p className="suitRegular eventinfo">
                    행사기간: 2022년 2월 24일(목) 21시 까지
                </p>
                <p className="suitRegular eventinfo">
                    당첨발표: 2022년 2월 28일(월) 상상유니브 홈페이지 공지
                </p>
            </div>
        </>
    )
}

export default ResultSection;