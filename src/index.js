import React from "react";
import ReactDOM from "react-dom";

class MyClass extends React.Component {
    render() {
        return <div>hello</div>;
    }
}

ReactDOM.render(<MyClass/>,document.getElementById("wrapper"));