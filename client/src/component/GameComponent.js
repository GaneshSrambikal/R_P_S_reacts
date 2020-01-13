import React, { Component } from "react";
import "../style.css";
import "../modal.css";

import Footer from "../component/Footer";
export default class GameComponent extends Component {
  constructor() {
    super();
    this.state = {
      playerOne: 0,
      playerTwo: 0,
      resetStyle: "none",
      modalShow: "none",
      playerChoice: "",
      computerChoice: "",
      winnerGame: ""
    };
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleReset = () => {
    this.setState({
      playerOne: 0,
      playerTwo: 0,
      resetStyle: "none",
      playerChoice: "",
      computerChoice: ""
    });
  };

  handleChoice(event) {
    let compChoice = Math.random();
    if (compChoice < 0.34) {
      this.setState({
        playerChoice: event.target.id,
        computerChoice: "rock",
        
      });
    } else if (compChoice <= 0.67) {
      this.setState({
        playerChoice: event.target.id,
        computerChoice: "paper",
        
      });
    } else {
      this.setState({
        playerChoice: event.target.id,
        computerChoice: "scissors",
        
      });
    }

    let winner = getWinner(this.state.playerChoice, this.state.computerChoice);
    function getWinner(p, c) {
      if (p === c) {
        return "draw";
      } else if (p === "rock") {
        if (c === "paper") {
          return "you loss";
        } else {
          return "you win";
        }
      } else if (p === "paper") {
        if (c === "scissors") {
          return "you loss";
        } else {
          return "you win";
        }
      } else if (p === "scissors") {
        if (c === "rock") {
          return "you loss";
        } else {
          return "you win";
        }
      }
    }
    setTimeout(() => {
      if (winner === "you win") {
        this.setState({
          playerOne: this.state.playerOne + 1,
          resetStyle: "inline-block",
          modalShow: "block",
          winnerGame: "You Win",
        });
      } else if (winner === "you loss") {
        this.setState({
          playerTwo: this.state.playerTwo + 1,
          resetStyle: "inline-block",
          modalShow: "block",
          winnerGame: "You Loss",
        });
      } else {
        this.setState({
         
          resetStyle: "inline-block",
          modalShow: "block",
          winnerGame: "draw",
        });
      }
    }, 1000);

    console.log("player choice :" + this.state.playerChoice);
    console.log("comp choice :" + this.state.computerChoice);
    console.log(winner);
  }
  handleClearModal = () => {
    this.setState({
      modalShow: "none"
    });
  };
  render() {
    return (
      <div className="window">
        <header>
          <h1 className="title">ROCK PAPER SCISSORS</h1>
          <button
            className="restart-btn"
            style={{ display: this.state.resetStyle }}
            id="restart"
            onClick={this.handleReset}
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
        <div>
          <div className="choices">
            <i
              id="rock"
              className="choice fas fa-hand-rock fa-10x"
              onClick={this.handleChoice}
            ></i>
            <i
              id="paper"
              className="choice fas fa-hand-paper fa-10x"
              onClick={this.handleChoice}
            ></i>
            <i
              id="scissors"
              className="choice fas fa-hand-scissors fa-10x"
              onClick={this.handleChoice}
            ></i>
          </div>
        </div>
        <Footer />
        <div
          className="modal"
          style={{ display: this.state.modalShow }}
          onClick={this.handleClearModal}
        >
          <div id="result" className="modal-content">
            <h1
              className={
                this.state.winnerGame === "You Win" ? "text-win" : "textlose"
              }
            >
              {this.state.winnerGame}
            </h1>
            {this.state.playerChoice === "rock" ? (
              <i className="fas fa-hand-rock fa-10x"></i>
            ) : (
              <i
                className={
                  this.state.playerChoice === "scissors"
                    ? "fas fa-hand-scissors fa-10x"
                    : "fas fa-hand-paper fa-10x"
                }
              ></i>
            )}

            <p>
              They Chose <strong>{this.state.computerChoice}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
