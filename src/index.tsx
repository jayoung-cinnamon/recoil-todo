import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <TodoForm />
        <TodoList />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
