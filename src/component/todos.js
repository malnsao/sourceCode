import React from 'react';
import { Input, Button, List, Icon } from 'antd';
import { connect } from "../react-redux/index";
import todosAction from "../store/actions/todos";

class Todos extends React.Component {

    handleChange = (e) => {
        let { changeTodoValue } = this.props;
        changeTodoValue(e.target.value);
    }

    btn = () => {
        let { addTodo } = this.props;
        addTodo();
    }

    del = (index) => {
        let { delTodo } = this.props;
        delTodo(index)
    }

    render() {
        let { inputVal, list } = this.props;
        return (
            <div>
                <h1>TODOS</h1>
                <Input
                    value={inputVal}
                    onChange={this.handleChange}
                    style={{ width: "120px" }} />
                <Button
                    onClick={this.btn}>提交</Button>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, i) => (
                        <List.Item key={i}>
                            {item}
                            <span
                                onClick={this.del.bind(this, i)}
                                style={{ marginLeft: "32px", cursor: "pointer" }}>
                                <Icon type="close" />
                            </span>
                        </List.Item>)}
                />
            </div>
        )
    }
}

let mapStateToPropsTodos = state => state.todos;
Todos = connect(mapStateToPropsTodos, todosAction)(Todos);

export default Todos;