import React from 'react'
import ReactReduxContext from './context'

class Provider extends React.Component {
    render(){
        return (
            <ReactReduxContext.Provider value={this.props.store}>
                {this.props.children}
            </ReactReduxContext.Provider>
        )
    }
}
export default Provider