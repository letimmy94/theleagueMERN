import React, { Component } from "react";
import TeamList from "./TeamList";
import TeamForm from "./TeamForm";
import style from "./style";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div className="soccerteams">
        <h2>Soccer Teams:</h2>
      </div>
    );
  }
}

export default Teams;
