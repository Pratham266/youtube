import React from "react";

const SmallLoader = ({color}) => {
  
  const loaderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const ponitStyle={
    height:"20px",width:"20px"
  }

  
  return (
    <div className={`w-full ${loaderContainerStyle}`}>
      <div className={`spinner-grow text-${color}`} style={ponitStyle} role="status">
      </div>
      <div className={`spinner-grow text-${color}`}style={ponitStyle}  role="status">
      </div>
      <div className={`spinner-grow text-${color}`}  style={ponitStyle} role="status">
      </div>
    </div>
  );
};

export default SmallLoader;
