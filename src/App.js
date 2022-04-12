import React from "react";
// import { Route } from "react-router-dom";
// import Welcome from "./components/Welcome";
// import Product from "./components/Product";
// import MainHeader from "./components/MainHeader";
import Login from "./Login";
// import Register from "./Register";
// import { useNavigate } from 'react-router';

 


export default class App extends React.Component {

   


  render() {
    return (
      <div>
        {/* <MainHeader /> */}

{/* <Login /> */}

<Register />

<Welcome />

        <p>Hello, Hello!</p>
        <header>
          <MainHeader />
         </header>
<h2>Welcome to Our Page</h2>
        <main>
         
        
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </main>
    

      </div>
    );
  }
}
