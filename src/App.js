import "./App.css";
import TeamDisplay from "./components/TeamDisplay";
import { useState, useEffect } from "react";
import Team from "./components/Team";
import player from "./players.json";
import teamID from "./models/NBAdata";

function App() {
  const [display, setDisplay] = useState(null);
  const teams = teamID.map((team, key) => {
    return <Team team={team} key={key} />;
  });
  useEffect(() => {
    setDisplay(teams);
  }, []);
  // const [team, setTeam] = useState(null);
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
  return <div className="App">{display}</div>;
  // return <div className="App">{teams}</div>;
}

export default App;
