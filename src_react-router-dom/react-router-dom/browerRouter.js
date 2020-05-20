import React, { Component } from 'react';
import RouteContext from './context'

// 添加和修改历史记录中的条目
let pushState = window.history.pushState;

window.history.pushState = function(state, title, url){
    pushState.call(window.history, state, title, url);
    window.onpushstate && window.onpushstate.call(window, state, url)
}

class BrowerRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: {
                pathname: window.location.pathname,
                state: null
            }
        }
    }

    componentDidMount(){
        let self = this;
        window.onpopstate = event => {
            // console.log('event',event)
            self.setState({
                location:{
                    ...self.state.location,
                    pathname: window.location.pathname,
                    state: event.state
                }
            })
        }
        window.onpushstate = (state, pathname) => {
            // console.log(state, pathname)
            self.setState({
                location: {
                    ...self.state.location,
                    pathname,
                    state,
                }
            })
        }
    }

    render(){
        let self = this;
        let value = {
            location:self.state.location,
            history:{
                push(to){
                    if (self.block) {
                        let confirm = window.confirm(self.block(
                            typeof to === "object" ? to : { pathname: to }
                        ));
                        if (!confirm) {
                            return;
                        }
                    }
                    if (typeof to === "object") {
                        let { pathname, state } = to;
                        window.history.pushState(state, "", pathname);
                    } else {
                        window.history.pushState(null, "", to);
                    }
                },
                block(message){
                    self.block = message;
                }
            }
        }
        return (
             // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
            // 无论多深，任何组件都能读取这个值。
            // 在这个例子中，我们将 “value” 作为当前的值传递下去。
            <RouteContext.Provider value={value}>
                {this.props.children}
            </RouteContext.Provider>
        )
    }
}

export default BrowerRouter;

