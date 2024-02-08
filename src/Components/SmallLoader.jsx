import React from "react";

const SmallLoader = ({color}) => {
  
  return (
    <div className={`w-full sm_loader`}>
      <div className={`spinner-grow text-${color} sm_loader_point`}  role="status">
      </div>
      <div className={`spinner-grow text-${color} sm_loader_point`}  role="status">
      </div>
      <div className={`spinner-grow text-${color} sm_loader_point`}   role="status">
      </div>
    </div>
  );
};

export default SmallLoader;
