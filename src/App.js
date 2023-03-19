import "./App.css";
import TeamDisplay from "./components/TeamDisplay";
import { useState, useEffect } from "react";
import Team from "./components/Team";

function App() {
  const [team, setTeam] = useState(null);
  const fetchTeam = async () => {
    const response = await fetch(
      "https://data.nba.net/data/10s/prod/v1/2022/players.json"
    );
    const data = await response.json();
    setTeam(data);
    console.log(team);
  };
  fetchTeam();
  // useEffect(() => {
  //   fetchTeam(), [];
  // });
  // const teams = team.league.standard.map((tm) => {
  //   return <Team team={tm} />;
  // });
  // return <div className="App">{teams}</div>;
}

export default App;
