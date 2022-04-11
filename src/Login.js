// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// import { useEffect, useState } from 'react';
import React from "react";

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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formValidation = () => {
    if (!this.state.username) {
      // this.setState({
      //     errors:{username : "Enter username" }});
      // this.setState({ errors: { username: "error" } });

      this.state.errors.username = "Enter username";
      // this.setState({ [this.state.errors] : {[this.state.errors.username]: "Enter username" }});
      // console.log(this.state.errors);
    } else if (this.state.username.trim().length < 6) {
      this.state.errors.username = "Enter atleast 6 characters";
      // this.setState({ username :  "Enter atleast 6 characters" });
    }

    if (this.state.username.trim().length > 0 && !this.state.password) {
      this.state.errors.password =
        "Hello " + this.state.username + " please enter Password";
    } else if (!this.state.password) {
      this.state.errors.password = "Enter password";
    } else if (this.state.password !== "123") {
      this.state.errors.password = "Enter correct password  ";
    }
    // console.log("Username");
    // console.log(this.state.username);
    // console.log((localStorage.getItem(this.state.username) ));

    // console.log((localStorage.getItem(this.state.username).length ));


    if (!(localStorage.getItem(this.state.username))) {
        this.state.errors.username = "Invalid User Enter Correct User Name";
    } else  if((this.state.password)===(localStorage.getItem(this.state.username)))
    
    {
        console.log("valid user");

        this.isLoggedIn = true;
    }else{
        this.state.errors.password="Wrong Password";
        this.isLoggedIn = false;
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

  onSubmit = (e) => {
    e.preventDefault();
    // console.log("state => ");
    // console.log(this.state.username);
    // let name = this.state.username;
    // // console.log(name);
    // localStorage.setItem("currentloggedin", name);
    // // let count = 1;

    // this.state.login.name =this.state.username;
    // this.state.login.pwd = this.state.password;

    // localStorage.setItem(this.state.login.name,this.state.login.pwd);
    // this.state.count+=1;

    this.formValidation();
  };

  render() {
    return this.isLoggedIn ? (
      <div>
        <h1>Welcome {this.state.username}</h1>
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
