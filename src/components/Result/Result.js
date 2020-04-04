import React from 'react';
import { useLocation } from "react-router-dom";

export default () => {
  const location = useLocation();
  if(!location.state) return <div>No result</div>
  const { state: { answer, game }} = location;

  return (
    <div>Result</div>
  );
};
