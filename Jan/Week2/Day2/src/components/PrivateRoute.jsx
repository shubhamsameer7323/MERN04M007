import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    let isLogin=localStorage.getItem("isLogin");
    return isLogin ? children: <Navigate to="/login" />;
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute