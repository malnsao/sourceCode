function bindActionCreator(actionCreator, dispatch){
    return function() {
        dispatch(actionCreator.apply(this, arguments))
    }
}

export default function bindActionCreators(actionCreators, dispatch) {

    if(typeof actionCreators === 'function'){
        return  dispatch(actionCreators)
    } else if(typeof actionCreators === "object"){
        const boundActionCreators = {};
        const keys = Object.keys(actionCreators)
        for (let i = 0; i < keys.length; i++) {
            let creator = actionCreators[keys[i]];
            boundActionCreators[keys[i]] = bindActionCreator(creator,dispatch)
        }
        return boundActionCreators
    } else {
        throw new Error("actionCreators is error");

    }
}

