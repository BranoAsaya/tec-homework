import React, { Component } from "react";

export default class RandomGame extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gameOver: false,
    evenArr: [],
    count: 1,
    clock: 0,
    disabled: true,
  };
  array = [];
  timer = 0;
  componentDidMount() {
    this.showNumbers();
  }

  showNumbers = () => {
    this.array = this.state.numbers;
    const arr = this.array.map((num) => (num = Math.floor(Math.random() * 20)));
    const keep = arr.filter((num) => num % 2 === 0);
    this.setState({ evenArr: keep });
    this.setState({ numbers: arr });
  };
  disableNum = (e) => {
    let index = Number(e.target.value);
    if (index % 2 === 0) {
      e.target.disabled = true;
      this.setState({ count: this.state.count + 1 });
    }
    else{this.setState({start:0})}
    this.gameOver();
  };
  startGame = () => {
    let num=0
    this.setState({disabled:false})
    this.timer = setInterval(() => {
      this.setState({ clock: num++});
    }, 1000);
  };

  gameOver = () => {
    if (this.state.count === this.state.evenArr.length) {
      this.setState({ gameOver: "GAME OVER" });
      clearInterval(this.timer);
    }
    // const scores=[]
    // scores.push(this.state.clock)
    localStorage.setItem("scores",JSON.stringify(this.state.clock))
  };

  render() {
    const randomNumbers = this.state.numbers.map((num, i) => {
      return (
        <button
          key={i}
          onClick={this.disableNum}
          name={i}
          disabled={this.state.disabled}
          value={num}>
          {num}
        </button>
      );
    });

    return (
      <>
        <h1>Random Numbers Game</h1>
        <button onClick={this.startGame}>Start Game</button>
        <p>timer:{this.state.clock}</p>
        {randomNumbers}
        <h1>{this.state.gameOver}</h1>
      </>
    );
  }
}
