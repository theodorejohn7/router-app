import React from "react";

import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MainHeader from "./components/MainHeader";
import Login from "./components/Login";
import Register from "./components/Register";
import Test from "./components/test";
import TodoApp from "./components/TodoApp";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <MainHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/test" element={<Test />} />
            <Route path="/todoapp" element={<TodoApp />} />
          
          </Routes>
       
        </main>
      </div>
    );
  }
}
