import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreateors } from '../redux'
import actions from "../store/actions/counter";


class Counter extends Component {
  constructor(props) {
    super(props);
    let { dispatch } = this.props.store;
    this.action = bindActionCreateors(actions, dispatch);

    
  }

//   incrementIfOdd() {
//     if (this.props.value % 2 !== 0) {
//       this.props.onIncrement()
//     }
//   }

//   incrementAsync() {
//     setTimeout(this.props.onIncrement, 1000)
//   }

onIncrement = () => {
    let { INCREMENT } = this.action;
    INCREMENT()
}

onDecrement = () => {
    const { store } = this.props
    store.dispatch({ type: 'DECREMENT' })
}


  render() {

    const { store } = this.props
    return (
      <p>
        Clicked: {store.getState().counter} times
        Clicked: {store.getState().counter1} times

        {' '}
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
        {' '}
        {/* <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button> */}
        {' '}
        {/* <button onClick={this.incrementAsync}>
          Increment async
        </button> */}
      </p>
    )
  }
}

Counter.propTypes = {
//   value: PropTypes.object,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
}

export default Counter
