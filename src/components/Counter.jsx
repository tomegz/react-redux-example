import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store/action-creators'
import './counter.css'

export const CounterComponent = ({ counter, increment, decrement }) => (
  <div>
    <p className="counter">Counter: {counter}</p>
    <button className="btn btn-increment" onClick={increment}>+</button>
    <button className="btn btn-decrement" onClick={decrement}>-</button>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = {
  increment,
  decrement,
}

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent)