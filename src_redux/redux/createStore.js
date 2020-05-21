const INIT_REDUX = "@@TYPE/REDUX_INIT";

export default function createStore(reducer) {

    let state;
    let listeners = [];
    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state, action)

        // 派发完主动触发
        listeners.forEach(fn => fn());
    }
    function subscribe(listener){
        listeners.push(listener)
        return function () {
            listeners = listeners.filter(fn => fn !== listener);
        };
    }


    // 初始化state
    dispatch({type:INIT_REDUX})
    
    return {
        getState,
        dispatch,
        subscribe
    }
}