import CorrectButton from "../function/CorrectButton";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        onClick: function(stageLocation, score) {
            dispatch({ type: 'CORRECT', stageLocation: stageLocation, score: score })
        }
    }
}

export default connect(null, mapDispatchToProps)(CorrectButton);