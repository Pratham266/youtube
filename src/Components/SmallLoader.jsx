import React from "react";

const SmallLoader = ({color}) => {
  
  const loaderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  return (
    <div className={`w-full ${loaderContainerStyle}`}>
      <div className={`spinner-grow text-${color}`} style={{height:"20px",width:"20px"}} role="status">
      </div>
      <div className={`spinner-grow text-${color}`}style={{height:"20px",width:"20px"}}  role="status">
      </div>
      <div className={`spinner-grow text-${color}`}  style={{height:"20px",width:"20px"}} role="status">
      </div>
    </div>
  );
};

export default SmallLoader;
