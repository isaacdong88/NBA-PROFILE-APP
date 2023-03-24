import "./App.css";
import TeamDisplay from "./components/TeamDisplay";
import { useState, useEffect } from "react";
import Team from "./components/Team";
import player from "./players.json";
import teamID from "./models/NBAdata";
import Player from "./components/Player";
import Nav from "./components/Nav";

function App() {
  const [display, setDisplay] = useState(null);

  const fetchPlayers = (byTeam, teamName) => {
    setDisplay(
      player.league.standard.map((player, key) => {
        return player.isActive === true && player.teamId === byTeam ? (
          <Player player={player} key={key} teamname={teamName} />
        ) : null;
      })
    );
  };

  const teams = teamID.map((team, key) => {
    return (
      <Team
        team={team}
        key={key}
        fetchplayer={() => {
          fetchPlayers(team.id, team.team); //function perimeter used in fetchplayer function to test tenary conditions
        }}
      />
    );
  });
  useEffect(() => {
    setDisplay(teams);
  }, []);

  //View team functionality for button
  const viewTeam = () => {
    setDisplay(teams);
  };

  return (
    <div className="App">
      <Nav viewTeam={viewTeam} />
      <TeamDisplay teamsDisplay={display} />
    </div>
  );
}

export default App;
