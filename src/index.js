import React from 'react'
import { render } from 'react-dom'
import { createStore } from './redux'
import { Provider } from './react-redux'
import Page from "./page";

import reducer from './store/reducers'

const store = createStore(reducer)


render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
)
