import React from "react";
import { connect } from "react-redux";
import { FormControl, Spinner, Table } from "react-bootstrap";
import PropTypes from 'prop-types';

import UserTableRow from "./UserTableRow";
import { setFilterQuery } from "../../../store/actions";
import {user} from "../../../shared/models";

const mapStateToProps = state => ({
  users: state.userReducer.users,
  filterQuery: state.userReducer.filterQuery
});

const mapDispatchToProps = {
  setFilterQuery: setFilterQuery
};

const UsersTable = ({ users, filterQuery, setFilterQuery }) => {
  const filterUsers = user =>
    user.last_name.toLowerCase().includes(filterQuery.toLowerCase());

  const onFilterChange = ({ target: { value } }) => setFilterQuery(value);

  if (!users.length) {
    return <Spinner animation="border" />;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>
            Last Name
            <FormControl placeholder="filter" onChange={onFilterChange} />
          </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.filter(filterUsers).map(user => (
          <UserTableRow user={user} key={user.id} />
        ))}
      </tbody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(user)),
  filterQuery: PropTypes.string,
  setFilterQuery: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable);
