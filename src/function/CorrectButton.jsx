export default function CorrectButton(props) {
    return (
        <button onClick={function() {props.onClick(props.stageLocation, 10)}}>정답</button>
    )
}