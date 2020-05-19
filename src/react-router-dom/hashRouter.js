import React, { Component } from 'react';
import RouteContext from "./context";

class HashRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                pathname: window.location.hash.slice(1),
                state: null
            }
        }
    }

    locationState = null;

    componentDidMount(){
        let self = this;
        window.location.hash = window.location.hash || '/';
        window.addEventListener("hashchange", function(event){
            // 截掉#
            self.setState({
                location:{
                    ...self.state.location,
                    pathname:window.location.hash.slice(1),
                    state:self.locationState
                }
            })
        })
    }

    render() {
        let self = this ;

        let value = {
            location: self.state.location,
            history:{
                push(to){
                    console.log(to)
                    console.log(self.block)
                    if(self.block) {
                        let confirm = window.confirm(self.block(
                            typeof to === "object" ? to : {pathname : to}
                        ));
                        if(!confirm){
                            return;
                        }
                    } ;
                    if(typeof to === 'object') {
                        let {pathname, state} = to;
                        self.locationState = pathname;
                    } else {
                        self.locationState = null;
                        window.location.hash = to
                    }

                    
                },
                block(message){
                    self.block = message;
                }
            }
        }
        return (
            <RouteContext.Provider value={value}>
                {this.props.children}
            </RouteContext.Provider>
        )
    }
}

export default HashRouter;
