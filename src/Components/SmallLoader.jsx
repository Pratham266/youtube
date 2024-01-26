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
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-white" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-white" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SmallLoader;
