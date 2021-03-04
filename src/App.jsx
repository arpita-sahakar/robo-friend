import { React, useState } from "react";
import CardList from "./CardList";
import { robotsList } from "./robots.js";
import SearchBox from "./SearchBox";

function App() {
  const [searchRobots, setSearchRobots] = useState("");
  const [robots, setRobots] = useState(robotsList);

  const filterData = (robots) => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().indexOf(searchRobots.toLowerCase()) > -1
    });
  };

  const searchChange = (event) => {
    console.log(event.target.value);
    setSearchRobots(event.target.value);
  };

  return (
    <div className="tc">
      <h1>RoboFriends</h1>

      <SearchBox onSearchChange={searchChange} />

      <CardList filteredRobots={filterData(robots)} />
    </div>
  );
}

export default App;
