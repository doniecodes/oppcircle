import React from 'react'
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  
  const { error } = useRouteError();
  console.log(error);
  
  return (
    <div className="route-error-div">
      <div></div>
    </div>
  )
}

export default RouteError