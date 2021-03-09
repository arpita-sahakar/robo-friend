import { React, useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { robotsList } from "./robots.js";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

function App() {
  const [searchRobots, setSearchRobots] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setRobots(res.data);
    });
  }, []);

  const filterData = (robots) => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().indexOf(searchRobots.toLowerCase()) > -1;
    });
  };

  const searchChange = (event) => {
    console.log(event.target.value);
    setSearchRobots(event.target.value);
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>

      <SearchBox onSearchChange={searchChange} />
      <Scroll>
        <CardList filteredRobots={filterData(robots)} />
      </Scroll>
    </div>
  );
}

export default App;
