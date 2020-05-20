import { combineReducers } from "../../redux";

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    // case 'DECREMENT':
    //   return state - 1
    default:
      return state
  }
}

function counter1(state = 0, action) {
    switch (action.type) {
    //   case 'INCREMENT':
    //     return state + 1
      case 'DECREMENT':
        return state - 10
      default:
        return state
    }
  }

export default combineReducers({
    counter,
    counter1
});


// export default (state = 0, action) =>{
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }