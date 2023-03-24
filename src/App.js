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
  const [loading, setLoading] = useState(true);

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

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  //View team functionality for button
  const viewTeam = () => {
    setDisplay(teams);
  };

  return loading ? (
    <div className="App">
      <img
        className="loadingImg"
        src="https://media0.giphy.com/media/4qify5sjr92ec/giphy.gif"
        alt=""
      />
    </div>
  ) : (
    <div className="App">
      <Nav viewTeam={viewTeam} />
      <TeamDisplay teamsDisplay={display} />
    </div>
  );
}

export default App;
