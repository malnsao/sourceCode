import React from 'react'
import RouteContext from "./context";

class Link extends React.Component {

    // 声明Context对象属性
    static contextType = RouteContext;
    render(){
        let self = this;
        let { to, style } = this.props;

        return (
            <a onClick={() => {
                self.context.history && self.context.history.push(to)
            }}>
                {self.props.children} 
            </a>
        )
    }
    
}

export default Link