import React from 'react';
import RouteContext from "./context";

class Redirect extends React.Component {
    static contextType = RouteContext;

    render(){
        console.log(this.props)
        this.context.history.push(this.props.to);
        return null;
        
    }
}
export default Redirect;
