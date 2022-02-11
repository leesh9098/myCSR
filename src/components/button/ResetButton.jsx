import { Link } from "react-router-dom";

export default function ResetButton({ to }) {
    const reset = () => {
        window.sessionStorage.clear();
    }

    return (
        <>
            {to ? 
            <Link to={to}>
                <button className="retrybutton" onClick={reset} />
            </Link> :
            <button className="retrybutton" onClick={reset} />
            }
        </>
    )
}