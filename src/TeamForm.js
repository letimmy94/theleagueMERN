import React, { Component } from "react";
import style from "./style";

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleDesChange(e) {
    this.setState({ description: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${this.state.name} "${this.state.description}"`);
  }
  render() {
    return (
      <form style={style.teamForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter team name"
          style={style.teamFormName}
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          placeholder="Description"
          style={style.teamFormDes}
          value={this.state.description}
          onChange={this.handleDesChange}
        />
        <input type="submit" style={style.teamFormPost} value="Post" />
      </form>
    );
  }
}

export default TeamForm;
