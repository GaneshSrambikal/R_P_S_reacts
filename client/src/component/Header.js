import React from "react";
import "../style.css";
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      playerOne: 0,
      playerTwo: 0
    };
  }

  handleClick = () => {
    this.setState({
      playerOne: 40,
      playerTwo: 10
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1>ROCK PAPER SCISSORS</h1>
          <button
            className="restart-btn"
            id="restart"
            onClick={this.handleClick}
          >
            <i style={{ fontSize: "24px" }} className="fa">
              &#xf021;
            </i>
          </button>
          <div className="score" id="score">
            <p>You : {this.state.playerOne}</p>
            <p>Random :{this.state.playerTwo}</p>
          </div>
        </header>
        <h2>Make Your Selection</h2>
      </div>
    );
  }
}
