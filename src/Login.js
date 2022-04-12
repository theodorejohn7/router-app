// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import { useEffect, useState } from 'react';
import React from "react";
// import { Link, useNavigate, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome";
import { useNavigate } from 'react-router';


// const isEmpty = value => value.trim().length === '';
// const isSixChars = value =>value.trim().length === 5;

class Login extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      count: 1,
      isLoggedIn: false,
      login: {
        name: "",
        pwd: "",
      },
    };
  }

//   navigate = useNavigate();
 

//   handleClick() {
  
//     navigate('/welcome');

// }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formValidation = () => {
    if (!this.state.username) {
      // this.setState({
      //     errors:{username : "Enter username" }});
      // this.setState({ errors: { username: "error" } });

      this.state.errors.username = "Enter username";
    } else if (this.state.username.trim().length < 6) {
      this.state.errors.username = "Enter atleast 6 characters";
    }

    if (this.state.username.trim().length > 0 && !this.state.password) {
      this.state.errors.password =
        "Hello " + this.state.username + " please enter Password";
    } else if (!this.state.password) {
      this.state.errors.password = "Enter password";
    } 

    // else if((this.state.password)===(localStorage.getItem(this.state.username)))
    // {
    //     console.log("Password correct");
    //     this.isLoggedIn = true;
    // }

    // if ((this.state.username.trim().length >= 6) && (this.state.password === "123")) {
    //     this.isLoggedIn = true;
    // }
    // else {
    //     this.isLoggedIn = false;
    // }

    this.setState({ errors: this.state.errors });
    // console.log(this.state.errors.username);
  };

  formAuthentication = () => {
    let data = JSON.parse(localStorage.getItem("all_users1"));
    const curr_data = data.find(
      ({ username }) => username === this.state.username );
    if((!curr_data))
    {
      this.state.errors.username="Username Not Registered";
    }else 
    if (this.state.password === curr_data.password) {
      this.isLoggedIn=true;
      // <Welcome />
      // this.toComponentB();

      // this.handleClick();
      }

    localStorage.setItem("all_users1", JSON.stringify(data));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.formValidation();
    this.formAuthentication();
  };

  render() {
    return this.isLoggedIn ? (
      <div>
        <h1>Redirecting</h1>

      </div>
    ) : (
      <div>
        <form onSubmit={this.onSubmit}>
          <div
            className="App"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Card
              variant="outlined"
              maxWidth="sm"
              sx={{
                p: 5,
                bgcolor: "info.main",
                display: "flex",
                boxShadow: 24,
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: 250,
                borderRadius: 5,

                m: 1,
              }}
            >
              <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,

                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="legend"
                    sx={{ color: "white" }}
                  >
                    Login Form
                  </Typography>
                </Box>
                <TextField
                  sx={{
                    borderRadius: 1,
                    boxShadow: 14,
                    bgcolor: "white",
                  }}
                  id="outlined-basic"
                  label="UserName"
                  fullWidth
                  margin="dense"
                  name="username"
                  variant="filled"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <span>{this.state.errors.username}</span>

                <TextField
                  sx={{
                    bgcolor: "white",
                    boxShadow: 14,
                    borderRadius: 1,

                    color: "text.primary",
                  }}
                  name="password"
                  fullWidth
                  id="password-input"
                  label="Password"
                  margin="dense"
                  variant="filled"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  autoComplete="current-password"
                />

                <span>{this.state.errors.password}</span>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,

                    borderRadius: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    margin="dense"
                    type="submit"
                    sx={{
                      boxShadow: 20,
                      justifyContent: "center",
                      bgcolor: "success.main",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Card>
          </div>
        </form>

        {/* {Object.keys(this.state.errors).map((key) => {
          return <div key={key}> {this.state.errors[key]}
          </div>
        })
        } */}
      </div>
    );
    // )
  }
}

export default Login;
