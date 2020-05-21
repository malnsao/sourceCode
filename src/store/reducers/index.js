import { combineReducers } from "../../redux/index";

const initState = {
    number: 0
}
function counter (state = initState, action) {
    switch (action.type) {
        case 'ADD':
            return { number: state.number + 1 };
        default:
            return state
    }
}

export default combineReducers({
    counter
})