// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
// import React  from 'react';
import Welcome from "./components/Welcome";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

import * as React from "react";
// const isEmpty = value => value.trim().length === '';
// const isSixChars = value =>value.trim().length === 5;

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (!formErrors.isError) {
      setFormErrors(formAuthentication(formValues));
    }
    // setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log("formValues =>  ",formValues);
    // }
  }, [formErrors]);
 

  const validate = (values) => {
    console.log("inside validation");
    const errors = {};
    errors.isError = false;
    if (!values.username) {
      errors.username = "Username is required";
      errors.isError = true;
    }
    if (!values.password) {
      errors.password = "Password is required";
      errors.isError = true;
     errors.isPopup = true;
     handleOpen(); 
    }

    //     if((values.username)&&(values.password))
    //     {
    //     formAuthentication(formValues);
    // console.log("inside");
    //     }
    console.log("errors =>/*/*/*   ", errors);
    return errors;
  };

  const formAuthentication = (values) => {
    // console.log("values" , values.username);
    let data = JSON.parse(localStorage.getItem("all_users1"));
    console.log("data", data);
    const errors = {};

    const curr_data = data.find(({ username }) => username === values.username);

    console.log("curr_data => ", curr_data);
    console.log("curr_data.password", curr_data.password);
    console.log("values.password", values.password);

    if (!curr_data) {
      console.log("userename not registered");
      errors.username = "Username Not Registered";
    } else if (values.password === curr_data.password) {
      // values.isLoggedIn=true;
      console.log("password matched");

      navigate("/welcome", { state: { name: values.username } });
      <Welcome />;
      // this.toComponentB();

      // this.handleClick();
    } else {
      errors.password = "invalid";
    }

    localStorage.setItem("all_users1", JSON.stringify(data));
    return errors;
  };
console.log("errors===>   ",formErrors);
  // let test=2;
  return (

    <form onSubmit={handleSubmit}>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)} </pre> */}
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
              // required
              variant="filled"
              value={formValues.username}
              onChange={handleChange}
            />
            {/* <span>{formErrors.username}</span> */}

            <TextField
              sx={{
                bgcolor: "white",
                boxShadow: 14,
                borderRadius: 1,

                color: "text.primary",
              }}
              // required
              name="password"
              fullWidth
              id="password-input"
              label="Password"
              margin="dense"
              variant="filled"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            <span>{formErrors.password}</span>
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
      {(formErrors.isPopup)?
       <div>  
      {/* <h1>one</h1> */}
    
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
Please check on below        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, ml:5 }}>
        {formErrors.username}<br></br>
  {formErrors.password}

        </Typography>
      </Box>
    </Modal>
    </div>
      :" " }
      
    </form>
  );
}

export default Login;

// // import './App.css';
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// // import { useEffect, useState } from 'react';
// import React from "react";
// // import { Link, useNavigate, Redirect } from "react-router-dom";
// import Welcome from "./components/Welcome";
// import { useNavigate } from 'react-router';

// // const isEmpty = value => value.trim().length === '';
// // const isSixChars = value =>value.trim().length === 5;

// class Login extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       errors: {},
//       count: 1,
//       isLoggedIn: false,
//       login: {
//         name: "",
//         pwd: "",
//       },
//     };
//   }

// //   navigate = useNavigate();

// //   handleClick() {

// //     navigate('/welcome');

// // }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   formValidation = () => {
//     if (!this.state.username) {
//       // this.setState({
//       //     errors:{username : "Enter username" }});
//       // this.setState({ errors: { username: "error" } });

//       this.state.errors.username = "Enter username";
//     } else if (this.state.username.trim().length < 6) {
//       this.state.errors.username = "Enter atleast 6 characters";
//     }

//     if (this.state.username.trim().length > 0 && !this.state.password) {
//       this.state.errors.password =
//         "Hello " + this.state.username + " please enter Password";
//     } else if (!this.state.password) {
//       this.state.errors.password = "Enter password";
//     }

//     // else if((this.state.password)===(localStorage.getItem(this.state.username)))
//     // {
//     //     console.log("Password correct");
//     //     this.isLoggedIn = true;
//     // }

//     // if ((this.state.username.trim().length >= 6) && (this.state.password === "123")) {
//     //     this.isLoggedIn = true;
//     // }
//     // else {
//     //     this.isLoggedIn = false;
//     // }

//     this.setState({ errors: this.state.errors });
//     // console.log(this.state.errors.username);
//   };

//   formAuthentication = () => {
//     let data = JSON.parse(localStorage.getItem("all_users1"));
//     const curr_data = data.find(
//       ({ username }) => username === this.state.username );
//     if((!curr_data))
//     {
//       this.state.errors.username="Username Not Registered";
//     }else
//     if (this.state.password === curr_data.password) {
//       this.isLoggedIn=true;
//       // <Welcome />
//       // this.toComponentB();

//       // this.handleClick();
//       }

//     localStorage.setItem("all_users1", JSON.stringify(data));
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.formValidation();
//     this.formAuthentication();
//   };

//   render() {
//     return this.isLoggedIn ? (
//       <div>
//         <h1>Redirecting</h1>

//       </div>
//     ) : (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <div
//             className="App"
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Card
//               variant="outlined"
//               maxWidth="sm"
//               sx={{
//                 p: 5,
//                 bgcolor: "info.main",
//                 display: "flex",
//                 boxShadow: 24,
//                 flexWrap: "wrap",
//                 justifyContent: "center",
//                 maxWidth: 250,
//                 borderRadius: 5,

//                 m: 1,
//               }}
//             >
//               <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     p: 1,
//                     m: 1,

//                     borderRadius: 1,
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     component="legend"
//                     sx={{ color: "white" }}
//                   >
//                     Login Form
//                   </Typography>
//                 </Box>
//                 <TextField
//                   sx={{
//                     borderRadius: 1,
//                     boxShadow: 14,
//                     bgcolor: "white",
//                   }}
//                   id="outlined-basic"
//                   label="UserName"
//                   fullWidth
//                   margin="dense"
//                   name="username"
//                   variant="filled"
//                   value={this.state.username}
//                   onChange={this.onChange}
//                 />
//                 <span>{this.state.errors.username}</span>

//                 <TextField
//                   sx={{
//                     bgcolor: "white",
//                     boxShadow: 14,
//                     borderRadius: 1,

//                     color: "text.primary",
//                   }}
//                   name="password"
//                   fullWidth
//                   id="password-input"
//                   label="Password"
//                   margin="dense"
//                   variant="filled"
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.onChange}
//                   autoComplete="current-password"
//                 />

//                 <span>{this.state.errors.password}</span>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     p: 1,
//                     m: 1,

//                     borderRadius: 1,
//                   }}
//                 >
//                   <Button
//                     variant="contained"
//                     margin="dense"
//                     type="submit"
//                     sx={{
//                       boxShadow: 20,
//                       justifyContent: "center",
//                       bgcolor: "success.main",
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Box>
//               </Box>
//             </Card>
//           </div>
//         </form>

//         {/* {Object.keys(this.state.errors).map((key) => {
//           return <div key={key}> {this.state.errors[key]}
//           </div>
//         })
//         } */}
//       </div>
//     );
//     // )
//   }
// }

// export default Login;
