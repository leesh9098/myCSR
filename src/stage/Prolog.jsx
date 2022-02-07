import React from "react";
import CorrectButton from "../container/CorrectButton";
import IncorrectButton from "../container/IncorrectButton";

export default class Prolog extends React.Component {
    state = {
        stageLocation: 0
    }

    render() {
        return (
            <div className="Prolog">
                <CorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
            </div>
        )
    }
}