import * as React from "react";
import Media from "react-media";

import { useLocation } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Welcome = (props) => {

  const location = useLocation(props);
  let data = JSON.parse(localStorage.getItem("all_users1"));

  const curr_data = data.find(
    ({ username }) => username === location.state.name
  );

  console.log("use location => /*/*/ ", curr_data);

  return (
    <div>
      <div>
        <h3>Welcome {location.state.name} below are your account details</h3>

        <Media
          queries={{
            medium: "(min-width: 300px) and (max-width: 700px)",
            large: "(min-width: 701px)",
          }}
        >
          {(matches) => (
            <React.Fragment>
              {matches.medium && (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Parameter</TableCell>
                        <TableCell align="left">Values</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Username
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.username}{" "}
                        </TableCell>
                      </TableRow>

                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          FirstName
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.firstname}{" "}
                        </TableCell>
                      </TableRow>

                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          FirstName
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.firstname}{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Last name
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.lastname}{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          e-Mail ID
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.email}{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Address
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.address}{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key="key"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Pincode
                        </TableCell>

                        <TableCell align="left">
                          {curr_data.pincode}{" "}
                        </TableCell>
                      </TableRow>

                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              {matches.large && (
                <div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Username</TableCell>
                          <TableCell align="right">Firstname</TableCell>

                          <TableCell align="right">LastName</TableCell>
                          <TableCell align="right">e-mail Id</TableCell>
                          <TableCell align="right">Address</TableCell>
                          <TableCell align="right">State</TableCell>
                          <TableCell align="right">Pincode</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          key="key"
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {curr_data.username}
                          </TableCell>
                          <TableCell align="right">
                            {curr_data.firstname}{" "}
                          </TableCell>
                          <TableCell align="right">
                            {curr_data.lastname}
                          </TableCell>
                          <TableCell align="right">{curr_data.email}</TableCell>
                          <TableCell align="right">
                            {curr_data.address}
                          </TableCell>
                          <TableCell align="right">{curr_data.state}</TableCell>
                          <TableCell align="right">
                            {curr_data.pincode}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
            </React.Fragment>
          )}
        </Media>
      </div>

    </div>
  );
};

export default Welcome;

