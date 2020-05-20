import React, { Component } from 'react';
import { withRouter } from "../react-router-dom"

class NavHeader extends Component {

    render() {
        return (
            <div onClick={() => {
                this.props.history.push("/")
            }}>
                NavHeader
            </div>
        )
    }
}

export default withRouter(NavHeader)