import { useState } from "react";
import { quiz } from "../data/Quiz";

export default function EventQuiz() {
    const [stageNumber, setStageNumber] = useState(11);
    const [answerList, setAnswerList] = useState("");
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(false);

    return (
        <div className="wrap">
            {
                // ****************입력형 퀴즈******************
                // stageNumber === 5 ? 
                // <>
                //     <p className="museumBold quiztitletext">2022 대학생 능력고사</p>
                //     <div className="namebox">
                //         <div className="museumMedium nametext1">이름</div>
                //         <div className="museumMedium nametext2">김상상</div>
                //     </div>
                //     <div className="line"></div>
                //     <div className="questionbox">
                //         <p className="museumMedium questiontext">{quiz[4].question}</p>
                //     </div>
                //     <div className="inputtextarea">
                //         <input type="text" id="quiz5" className="suitExtraBold inputtext" placeholder="정답 입력" />
                //     </div>
                // </>
                // : 

                // ****************버튼형 퀴즈*****************
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
                                        answerList === answer.quiznumber ?
                                            'answerradiobox answerradiochecked' :
                                            'answerradiobox'
                                    }
                                >
                                    <input
                                        type="radio"
                                        className="answerradio"
                                        value={answer.quiznumber}
                                        id={answer.quiznumber}
                                        checked={answerList === answer.quiznumber}
                                        onChange={handleAnswerList}
                                        required
                                    />
                                    <p className="suitExtraBold">✓</p>
                                </div>
                                <label
                                    className={
                                        `museumBold ${answerList === answer.quiznumber ?
                                            'answertext answerradiochecked' :
                                            'answertext'}`
                                    }
                                    htmlFor={answer.quiznumber}
                                >
                                    {answer.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </>
            }
            {/* ***********진행 버튼*********** */}
            <button
                className="suitExtraBold nextbutton"
                onClick={handleAnswer}
                disabled={disable === false}
            >
                다음
            </button>
            <p className="suitRegular leftquiz">{`${leftQuiz}개 문제 남음`}</p>
            <Footer />
        </div>
    )
}