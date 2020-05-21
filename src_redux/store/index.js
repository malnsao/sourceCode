import { createStore, applyMiddleware } from '../redux'
import reducers from './reducers'


const logger = function({ getState, dispatch }){
    return function(next) {
        return function(action) {
            // console.log(next)
            // console.log(action)
            next(action);
        }
    }
}
const logger2 = function({ getState, dispatch }){
    return function(next) {
        return function(action) {
            // console.log(next)
            // console.log(action)
            next(action);
        }
    }
}
const logger3 = function({ getState, dispatch }){
    return function(next) {
        return function(action) {
            // console.log(next)
            // console.log(action)
            next(action);
        }
    }
}

let middleware = [logger,logger2,logger3]


const store = applyMiddleware(...middleware )(createStore)(reducers)

console.log(store)
export default store;
