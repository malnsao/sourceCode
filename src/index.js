import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/Counter'

import store from './store'

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    store={store}
    // value={store.getState()}
    // onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    // onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)