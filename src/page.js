import React from "react";
import Counter from "./component/counter";
// import Todos from "./component/todos";

class Page extends React.Component {
    render() {
        return (
            <div>
                <Counter />
                <p>***************</p>
                {/* <Todos /> */}
            </div>
        )
    }
}

export default Page;