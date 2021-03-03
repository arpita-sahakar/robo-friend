import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div>
      {props.robots.map((robot, i) => (
        <Card id={robot.id} name={robot.name} email={robot.email} key={i} />
      ))}
      {/* <Card id={props.robots[0].id} name={props.robots[0].name} email={props.robots[0].email} />
      <Card id={props.robots[1].id} name={props.robots[1].name} email={props.robots[1].email} />
      <Card id={props.robots[2].id} name={props.robots[2].name} email={props.robots[2].email} /> */}
    </div>
  );
}

export default CardList;
