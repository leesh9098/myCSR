import { Link } from "react-router-dom";

export default function ResetButton({ to }) {
    const reset = () => {
        window.localStorage.clear();
    }

    return (
        <>
            {to ? 
            <Link to={to}>
                <button onClick={reset}>테스트 다시하기</button>
            </Link> :
            <button onClick={reset}>테스트 다시하기</button>
            }
        </>
    )
}