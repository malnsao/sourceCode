// combineReducers({
//     counter
// });

export default function combineReducers(reducers) {
    return function(state = {}, action){
        let reducerKeys = Object.keys(reducers)
        const nextState = {}
        let hasChanged = false; // 此次派发动作是否引起了状态的改变
        for (let i = 0; i < reducerKeys.length; i++) {
            // 取值
            const key = reducerKeys[i];
            const previousStateForKey = state[key]
            const reducer = reducers[key]
            const nextSateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextSateForKey
            hasChanged = hasChanged || nextSateForKey !== previousStateForKey

        }

        return hasChanged ? nextState : state
    }
}