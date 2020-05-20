import compose from './compose'
export default function applyMiddleware(...middlewares) {
    return function(createStore) {
        return function(...args){
            const store = createStore(...args)
            let dispatch;
            
            const middlewareAPI = {
                getState : store.getState,
                dispatch: (...args) => dispatch(...args)
            }

            // console.log(middlewares[0](middlewareAPI)
            const chain = middlewares.map(middleware => middleware(middlewareAPI))
            dispatch = compose(...chain)(store.dispatch)

            return {
                ...store,
                dispatch
            }

        }
    }
}

