import React from 'react'
import ReactReduxContext from './context'
import { bindActionCreators } from '../redux'

function connect(mapStateToProps, mapDispatchToProps){

    return function(WrappedComponent){

        return class extends React.Component{
            static contextType = ReactReduxContext;

            constructor(props, context){
                
                super(props);
                this.state = mapStateToProps(context.getState())

                this.unsubscribe = context.subscribe(this.subscribe)

                this.bindActions = bindActionCreators(mapDispatchToProps, context.dispatch)
            }

            subscribe = () => {
                console.log(this.context.getState())

                this.setState(mapStateToProps(this.context.getState()))
            }

            componentWillUnmount(){
                this.unsubscribe()
            }


            render(){
                return <WrappedComponent {...this.state} {...this.bindActions} />
            }
        }
     
    }
}

export default connect