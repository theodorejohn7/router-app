import React from "react";

import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MainHeader from "./components/MainHeader";
import Login from "./components/Login";
import Register from "./components/Register";
import Test from "./components/test";
import TodoApp from "./components/TodoApp";
import UseContextApp from "./components/UseContextApp";
import UseContextApp2 from "./components/UseContextApp2";


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
            <Route path="/usecontextapp" element={<UseContextApp />} />
            <Route path="/usecontextapp2" element={<UseContextApp2 />} />
          
          </Routes>
       
        </main>
      </div>
    );
  }
}
