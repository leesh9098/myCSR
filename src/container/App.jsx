import App from "../App";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
    return {
        stageNumber: state.stage,
        TotalScore: state.score
    }
}

export default connect(mapReduxStateToReactProps)(App);