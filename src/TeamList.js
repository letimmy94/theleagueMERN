import React, { Component } from "react";
import Team from "./Team";
import style from "./style";

class TeamList extends Component {
  render() {
    let teamNodes = this.props.data.map(team => {
      return (
        <Team Name={team.name} key={team.id}>
          {team.description}
        </Team>
      );
    });
    return <div className="list">{teamNodes}</div>;
  }
}

export default TeamList;
