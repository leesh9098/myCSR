import React from "react";
import CorrectButton from "../container/CorrectButton";
import IncorrectButton from "../container/IncorrectButton";

export default class Stage1 extends React.Component {
    state = {
        stageLocation: 1
    }

    render() {
        return (
            <div className="stage1">
                <CorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
                <IncorrectButton stageLocation={this.state.stageLocation} />
            </div>
        )
    }
}