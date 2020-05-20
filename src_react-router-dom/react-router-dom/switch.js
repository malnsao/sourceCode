import React from 'react';
import RouteContext from "./context";
import { pathToRegexp } from "path-to-regexp";

class Switch extends React.Component {
    static contextType = RouteContext;

    render(){
        let { pathname } = this.context.location;
        let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let {path = '/', exact} = child.props
            let paramNames = [];
            let regexp = pathToRegexp(path,paramNames, { end: !!exact })
            let result = pathname.match(regexp);
            if (result) {
                return child;
            }
        }
        return null
    }
}

export default Switch
