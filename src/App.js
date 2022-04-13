import React from "react";
// import { Route } from "react-router-dom";

import {    Route,Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
// import Product from "./components/Product";
import MainHeader from "./components/MainHeader";
import Login from "./Login";
import Register from "./Register";

// import { useNavigate } from 'react-router';

 


export default class App extends React.Component {

   


  render() {
    return (
      <div>
        {/* <MainHeader /> */}

{/* <Login /> */}

{/* <Register /> */}

{/* <Welcome /> */}

{/* <MainHeader /> */}
{/* <Login /> */}

        {/* <p>Hello, Hello!</p> */}
        <header>
          <MainHeader />
         </header>
{/* <h2>Welcome to Our Page</h2> */}
        <main>
        {/* <Routes> */}
        
          {/* <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route> */}

<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/welcome" element={<Welcome />} />
</Routes>

          {/* </Routes > */}

        </main>
    

      </div>
    );
  }
}
