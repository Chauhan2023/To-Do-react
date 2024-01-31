import ReactDOM from "react-dom";
import React from "react";
import './index.css'
import Todofoam from "./component/Todofoam";

ReactDOM.render(<>
<div className="todo-main">
    <div className="todo-inner">
    <Todofoam/>
    </div>
</div>

</>,document.getElementById("root"))