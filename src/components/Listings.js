import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const Listings = props => {
  let loggedIn = document.cookie;
  return (
    <Container maxWidth="lg" className="listings-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            {loggedIn == "loggedIn=true" && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listing.map((list, idx) => (
            <TableRow key={list.id}>
              <TableCell component="th" scope="row">
                {list.id}
              </TableCell>
              <TableCell>{list["name"]}</TableCell>
              <TableCell>{list["description"]}</TableCell>
              <TableCell>{list["address"]}</TableCell>
              <TableCell>{list["hours"]}</TableCell>
              {loggedIn == "loggedIn=true" && (
                <TableCell>
                  <DeleteIcon onClick={() => props.deleteListings(idx)} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
