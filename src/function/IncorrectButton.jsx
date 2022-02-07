export default function IncorrectButton(props) {
    return (
        <button onClick={function() {props.onClick(props.stageLocation ,0)}}>오답</button>
    )
}