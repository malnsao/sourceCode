import React from 'react';
import { connect } from "../react-redux";
import counterAction from "../store/actions";

class Counter extends React.PureComponent {


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>计数器: {this.props.number}</h1>
                <button onClick={() => this.props.add()}>+</button>
            </div>
        )
    }
}

let mapStateToProps = state => state.counter;


export default connect(mapStateToProps, counterAction)(Counter);
