import { Link } from "react-router-dom";

export default function ResetButton({ to, onClick }) {
    return (
        <>
            {to ? 
            <Link to={to}>
                <button>테스트 다시하기</button>
            </Link> :
            <button>테스트 다시하기</button>
            }
        </>
    )
}