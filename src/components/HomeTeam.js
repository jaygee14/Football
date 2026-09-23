export default function HomeTeam(props) {
    return (
        <div className="homeTeam">
            <img src={props.logo} alt="" />
            <p>{props.score}</p>
        </div>
    )
}