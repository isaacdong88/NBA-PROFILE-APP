import "./App.css";
import TeamDisplay from "./components/TeamDisplay";
import { useState, useEffect } from "react";
import Team from "./components/Team";
import player from "./players.json";
import teamID from "./models/NBAdata";
import Player from "./components/Player";

function App() {
  const [display, setDisplay] = useState(null);
  const [test, setTest] = useState(null);

  const fetchPlayers = (byTeam) => {
    setTest(
      player.league.standard.map((player, key) => {
        return player.isActive === true && player.teamId === byTeam ? (
          <Player player={player} key={key} />
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
          fetchPlayers(team.id);
        }}
      />
    );
  });
  useEffect(() => {
    setDisplay(teams);
  }, []);

  // const fetchTeam = async () => {
  //   const response = await fetch("players");
  //   const data = await response.json();
  //   setTeam(data);
  //   console.log(team);
  // };
  // fetchTeam();
  // useEffect(() => {
  //   fetchTeam(), [];
  // });
  // const teams = player.league.standard.map((tm, key) => {
  //   return <Team team={tm} key={key} />;
  // });
  return (
    <div className="App">
      <TeamDisplay teamsDisplay={display} />
      <div>{test}</div>
    </div>
  );
}

export default App;
