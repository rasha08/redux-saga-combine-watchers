import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions";
import UsersTable from "./components/Table";

const mapDispatchToProps = {
  getUsers: getUsers
};

const Users = ({ getUsers }) => {
  // We want to run this effect only once at component mount event and the [] is equivalent of that
  // eslint is complaining about not including all props in deps array but that will trigger this effect more times than once.
  /* eslint-disable */
  useEffect(() => {
    getUsers();
  }, []);
  /* eslint -enable */

  return <UsersTable />;
};

export default connect(
  null,
  mapDispatchToProps
)(Users);
