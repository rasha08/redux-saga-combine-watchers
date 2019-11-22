import React from "react";
import {user} from "../../../shared/models";

const UserTableRow = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.status}</td>
  </tr>
);

UserTableRow.propTypes = user;

export default UserTableRow;
