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
          fetchPlayers(team.id, team.team);
        }}
      />
    );
  });
  useEffect(() => {
    setDisplay(teams);
  }, []);

  // const fetchStats = async () => {
  //   const response = await fetch(
  //     `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerID}`
  //   );
  //   const data = await response.json();
  //   setStats(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchTeam();
  // }, []);
  // fetchTeam();
  // useEffect(() => {
  //   fetchTeam(), [];
  // });
  // const teams = player.league.standard.map((tm, key) => {
  //   return <Team team={tm} key={key} />;
  // });

  return (
    <div className="App">
      <Nav />
      <TeamDisplay teamsDisplay={display} />
    </div>
  );
}

export default App;
