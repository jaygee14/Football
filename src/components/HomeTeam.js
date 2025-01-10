export default function HomeTeam(props) {
    return (
        <div className="homeTeam">
            <img src={props.logo} />
            <p>{props.score}</p>
        </div>
    )
}