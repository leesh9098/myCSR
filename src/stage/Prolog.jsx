import React from "react";
import { Link } from "react-router-dom";

export default class Prolog extends React.Component {
    // state = {
    //     stageLocation: 0,
    //     score: 0
    // }

    render() {
        return (
            <div className="Prolog">
                <Link to="/quiz">
                    <button>시작하기</button>
                </Link>
            </div>
        )
    }
}