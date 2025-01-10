import Game from "./Game";
import { useState, useEffect } from "react"
export default function Scoreboard() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
            .then(response => response.json()) 
            .then(jsonResponse => setInfo(jsonResponse.events))
        
        
    }, []);

    console.log(info);


    return (
         <div id="scoreboard">
            {info.map((game, i) => {
                const awayTeam = game.competitions[0].competitors[1];
                const homeTeam = game.competitions[0].competitors[0];
                if (!awayTeam || !homeTeam) {
                    console.warn('Missing data for game:', game);
                    return null;
                }
                return (
                    <Game awayLogo={awayTeam.team.logo} awayScore={awayTeam.score} awayKey={`awayTeam_${i}`} homeLogo={ homeTeam.team.logo } homeScore={homeTeam.score} homeKey={`homeTeam_${i}`}></Game>
                );
            })}
         </div>

         
     )
}