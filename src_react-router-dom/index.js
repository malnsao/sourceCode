import React, { Component } from 'react';
import { BrowerRouter as Router, Link, Route, Redirect, Switch,HashRouter } from "./react-router-dom";

import ReactDOM from 'react-dom';

import Home from "./component/home";
import User from "./component/user";
import Profile from "./component/profile";
import NavHeader from "./component/navHeader";

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <HashRouter>
                <div>
                    <NavHeader />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: "/user",
                            search: "?sort=name",
                            hash: "#the-hash",
                            state: { fromDashboard: true }
                        }}>user1</Link></li>
                        <li><Link to="/user">user2</Link></li>

                        <li><Link to="/profile">topics</Link></li>
                        <li><Link to="/foo/:bar">/foo/:bar</Link></li>

                    </ul>
                    <div>

                        {/* exact 精准匹配 */}
                        {/* <Switch> */}
                        <Route path="/" exact component={Home}>
                        </Route>

                        <Route path="/user" render={() => <User />}>
                            {/* <Redirect to="/user/list" />  */}
                        </Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/foo/:bar" component={Profile}></Route>

                        {/* </Switch> */}



                    </div>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
