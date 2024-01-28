import React from "react";

const SmallLoader = () => {
  
  const loaderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  return (
    <div className={loaderContainerStyle}>
      <div className="spinner-grow text-white" role="status">
      </div>
      <div className="spinner-grow text-white" role="status">
      
      </div>
      <div className="spinner-grow text-white" role="status">
      </div>
    </div>
  );
};

export default SmallLoader;
