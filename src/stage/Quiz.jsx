import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quiz } from "../data/Quiz";

export default function Quiz() {
    const [stageNumber, setStageNumber] = useState(window.localStorage.getItem("JUVEJTgwJUI0JUVDJUE2JTg4JUVBJUI4JUIwJUVCJUExJTlE") ? parseInt(window.atob(window.localStorage.getItem("JUVEJTgwJUI0JUVDJUE2JTg4JUVBJUI4JUIwJUVCJUExJTlE"))) : null);
    const [score, setScore] = useState(window.localStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4") ? parseInt(window.atob(window.localStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))) : null);
    // const [stageNumber, setStageNumber] = useState(1);
    // const [score, setScore] = useState(0);
    const [leftQuiz, setLeftQuiz] = useState(quiz.length - 1);
    const [answerList, setAnswerList] = useState("");
    const [scoreData, setScoreData] = useState(0);
    const [checked, setChecked] = useState(false);
    let navigate = useNavigate();

    const handleAnswerList = (e) => {
        setAnswerList(e.target.value);
        setChecked(true);
    }

    const handleAnswer = () => {
        if (stageNumber === 5) {
            if (document.getElementById("quiz5").value === quiz[4].answers[0].text) {
                setScore(score + quiz[4].answers[0].score);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1);
            } else if (document.getElementById("quiz5").value === "") {
                alert("정답을 입력해주세요");
            } else {
                setScore(score);
                setLeftQuiz(leftQuiz - 1);
                setStageNumber(stageNumber + 1);
            }
        } else if (stageNumber > 9) {
            let param;
            if (score <= 10) {
                param = "level1";
            } else if (score <= 20) {
                param = "level2";
            } else if (score <= 30) {
                param = "level3";
            } else if (score <= 64) {
                param = "level4";
            }
            setScore(score + scoreData);
            navigate(`/result/${param}`);
        } else {
            setScore(score + scoreData);
            setLeftQuiz(leftQuiz - 1);
            setStageNumber(stageNumber + 1);
        }
    }

    useEffect(() => {
        // setStageNumber(parseInt(window.atob(window.localStorage.getItem("JUVEJTgwJUI0JUVDJUE2JTg4JUVBJUI4JUIwJUVCJUExJTlE"))));
        // setScore(parseInt(window.atob(window.localStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))));
        window.localStorage.setItem("JUVEJTgwJUI0JUVDJUE2JTg4JUVBJUI4JUIwJUVCJUExJTlE", window.btoa(stageNumber));
        window.localStorage.setItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4", window.btoa(score));
    }, [stageNumber, score])

    return (
        <div className="wrap">
            {
                stageNumber === 5 ? 
                <>
                    <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                    <div className="namebox">
                        <div className="museumMedium nametext1">이름</div>
                        <div className="museumMedium nametext2">김상상</div>
                    </div>
                    <div className="line"></div>
                    <div className="questionbox">
                        <p className="museumMedium questiontext">{quiz[4].question}</p>
                    </div>
                    <div className="inputtextarea">
                        <input type="text" id="quiz5" className="suitExtraBold inputtext" placeholder="정답 입력" />
                    </div>
                </>
                : 
                <>
                    <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                    <div className="namebox">
                        <div className="museumMedium nametext1">이름</div>
                        <div className="museumMedium nametext2">김상상</div>
                    </div>
                    <div className="line"></div>
                    <div className="questionbox">
                        <p className="museumMedium questiontext">{quiz[stageNumber - 1].question}</p>
                    </div>
                    <div className="answerarea">
                        {quiz[stageNumber - 1].answers.map((answer) => (
                            <div className="answerbuttonbox" key={answer.text} onClick={() => setScoreData(answer.score)} >
                                <div
                                    className={
                                        answerList === answer.text ?
                                        'answerradiobox answerradiochecked' :
                                        'answerradiobox'
                                    }
                                >
                                    <input
                                        type="radio"
                                        className="answerradio"
                                        value={answer.text}
                                        id={answer.text}
                                        checked={answerList === answer.text}
                                        onChange={handleAnswerList}
                                    />
                                    <p className="suitExtraBold">✓</p>
                                </div>
                                <label
                                    className={
                                        `museumBold ${answerList === answer.text ?
                                            'answertext answerradiochecked' :
                                            'answertext'}`
                                    }
                                    htmlFor={answer.text}
                                >
                                    {answer.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </>
            }
            <button
                className="suitExtraBold nextbutton"
                onClick={() => handleAnswer()}
                disabled={checked === false}
            >
                다음
            </button>
            <p className="suitRegular leftquiz">{`${leftQuiz}개 문제 남음`}</p>
        </div>
    )
}