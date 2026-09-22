import React from 'react'
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  
  const { error } = useRouteError();
  const errorObj = error && error;
  
  console.log("routeError", error);
  
  return (
    {/*
    <div className="route-error-div">
      <p>Error: {errorObj.message}</p>
      <p>{errorObj.status}</p>
    </div>
    */}
  )
}

export default RouteError