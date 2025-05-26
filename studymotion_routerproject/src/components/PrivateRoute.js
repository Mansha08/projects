import React, { Children } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ IsLoggedIn, children }) => {
  if (IsLoggedIn) {
    //agr login ho to dashboard pr ja skte ho
    return children; //children = dashboard
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
