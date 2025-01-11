import Timer from "./Timer";
import Teams from "./Teams";
import { useState, useEffect } from "react"
export default function Scoreboard() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
            .then(response => response.json()) 
            .then(jsonResponse => setInfo(jsonResponse.events))
        
        
    }, []);


    return (
         <div id="scoreBoard">
            {info.map((game, i) => {
                const awayTeam = game.competitions[0].competitors[1];
                const homeTeam = game.competitions[0].competitors[0];
                const period = game.status.period;
                const clock = game.status.displayClock;
                if (!awayTeam || !homeTeam) {
                    console.warn('Missing data for game:', game);
                    return null;
                }
                return (
                    <div className="game">
                        <Teams awayLogo={awayTeam.team.logo} awayScore={awayTeam.score} awayKey={`awayTeam_${i}`} homeLogo={homeTeam.team.logo} homeScore={homeTeam.score} homeKey={`homeTeam_${i}`}></Teams>
                        <Timer period={ period } clock={ clock }></Timer>
                    </div>
                );
            })}
         </div>

         
     )
}