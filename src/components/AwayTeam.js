export default function AwayTeam(props) {
    return (
        <div className="awayTeam">
            <img src={props.logo} />
            <p>{props.score}</p>
        </div>
    )
}