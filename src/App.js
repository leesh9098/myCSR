import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prolog from "./page/Prolog";
import Quiz from "./page/Quiz";
import Loading from "./page/Loading";
import TestResult from "./result/TestResult";

function App() {
    const [hitCount, setHitCount] = useState(0);
    const [score, setScore] = useState(parseInt(window.atob(window.sessionStorage.getItem("JUVEJTk4JTg0JUVDJTlFJUFDJUVDJUEwJTkwJUVDJTg4JTk4"))) || 0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Prolog hitCount={hitCount} setHitCount={setHitCount} />} />
                <Route path="/quiz" element={<Quiz score={score} setScore={setScore} setHitCount={setHitCount} />} />
                <Route path="/loading" element={<Loading score={score} />} />
                <Route path="/result/:param" element={<TestResult setScore={setScore} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;