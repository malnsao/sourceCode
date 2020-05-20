import React, { Component } from 'react';
import { Route,Link,Switch,Redirect  } from "../react-router-dom";
import UserList from "./userList";
import UserAdd from "./userAdd";
import NoMatch from "./noMatch";





class user extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/user/list"> 用户列表 </Link></li>
                    <li><Link to="/user/add"> 添加用户 </Link></li>

                    {/* <li><Link to={`${this.props.match.url}/props-v-state`}> Props v. State </Link></li> */}
                </ul>
                <Switch>
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route  component={NoMatch} />
                    <Redirect exact path="/" to="/profile" />

                    {/* <Redirect to="/user/list" /> */}
                </Switch>

            </div>
        )
    }
}

export default user