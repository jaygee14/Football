import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";

export default function Game(props) {
    return (
        <div className="game">
            <AwayTeam logo={props.awayLogo} score={props.awayScore} key={ props.awayKey } />
            <p className="tag">vs</p>
            <HomeTeam logo={props.homeLogo} score={props.homeScore} key={ props.homeKey } />
        </div>
    )
}