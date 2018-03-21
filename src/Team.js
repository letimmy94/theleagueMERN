import React, { Component } from "react";
import style from "./style";

class Team extends Component {
  render() {
    return (
      <div style={style.team}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Team;
