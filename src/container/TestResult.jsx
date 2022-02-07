import TestResult from "../result/TestResult";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return {
        TotalScore: state.score
    }
}

export default connect(mapReduxStateToReactProps)(TestResult);