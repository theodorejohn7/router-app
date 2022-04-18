import React from "react";

import {    Route,Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import MainHeader from "./components/MainHeader";
import Login from "./Login";
import Register from "./Register";


 


export default class App extends React.Component {

   


  render() {
    return (
      <div>

        <header>
          <MainHeader />
         </header>
        <main>

<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/welcome" element={<Welcome />} />
</Routes>


        </main>
    

      </div>
    );
  }
}
