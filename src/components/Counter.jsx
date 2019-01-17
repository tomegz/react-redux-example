import React from 'react'
import './style.css'

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1,
    }))
  }

  decrement() {
    this.setState(state => ({
      counter: state.counter - 1,
    }))
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p className="counter">Counter: {counter}</p>
        <button className="btn btn-increment" onClick={this.increment}>+</button>
        <button className="btn btn-decrement" onClick={this.decrement}>-</button>
      </div>
    )
  }
}