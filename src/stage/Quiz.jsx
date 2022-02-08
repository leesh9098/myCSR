import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quiz } from "../data/Quiz";

export default function Quiz() {
    const [stageNumber, setStageNumber] = useState(1);
    const [score, setScore] = useState(0);
    let navigate = useNavigate();

    const handleAnswer = (getScore) => {
        setScore(score + getScore);
        setStageNumber(stageNumber + 1);
    }

    const inputAnswerCheck = () => {
        if (document.getElementById("quiz5").value === quiz[4].answers[0].text) {
            setScore(score + quiz[4].answers[0].score)
            setStageNumber(stageNumber + 1);
        } else if (document.getElementById("quiz5").value === "") {
            alert("정답을 입력해주세요");
        } else {
            setScore(score)
            setStageNumber(stageNumber + 1);
        }
    }

    const resultLink = (getScore) => {
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
        setScore(score + getScore);
        navigate(`/result/${param}`);
    }

    return (
        <>
            {
                stageNumber < 10 ?
                    stageNumber === 5 ? 
                        <>
                            {stageNumber}<br />
                            {score}
                            <p className="">{quiz[4].question}</p>
                            <input id="quiz5" type="text" placeholder="정답 입력" />
                            <button onClick={inputAnswerCheck}>확인</button>
                        </>
                     : 
                        <>
                            {stageNumber}<br />
                            {score}
                            <p className="">{quiz[stageNumber - 1].question}</p>
                            <div className="">
                                {quiz[stageNumber - 1].answers.map((answer) => (
                                    <button
                                        key={answer.text}
                                        onClick={() => handleAnswer(answer.score)}
                                    >
                                        {answer.text}
                                    </button>
                                ))}
                            </div>
                        </>
                 : 
                    <>
                        {stageNumber}<br />
                        {score}
                        <p className="">{quiz[stageNumber - 1].question}</p>
                        <div className="">
                            {quiz[stageNumber - 1].answers.map((answer) => (
                                <button
                                    key={answer.text}
                                    onClick={() => resultLink(answer.score)}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                    </>
            }
        </>
    )
}