import IncorrectButton from "../function/IncorrectButton";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(stageLocation, score) {
            dispatch({ type: 'INCORRECT', stageLocation: stageLocation, score: score })
        }
    }
}

export default connect(null, mapDispatchToProps)(IncorrectButton);