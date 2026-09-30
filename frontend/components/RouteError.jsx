import React from 'react'
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  
  const error = useRouteError();
  
  return (
    <div className="route-error-div">
      <p><span>Error:</span> {error.message}</p>
      <p><span>status:</span> {error.status}</p>
    </div>
  )
}

export default RouteError