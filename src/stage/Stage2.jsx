import React from "react";
import { Link } from "react-router-dom";
import CorrectButton from "../container/CorrectButton";
import IncorrectButton from "../container/IncorrectButton";

export default class Stage2 extends React.Component {
    state = {
        stageLocation: 2
    }

    render() {
        return (
            <div className="stage2">
                <Link to="/result/type1">
                    <CorrectButton stageLocation={this.state.stageLocation} />
                </Link>
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
            </div>
        )
    }
}