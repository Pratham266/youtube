import React from "react";

const Loader = () => {
  
  const loaderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={loaderContainerStyle}>
      <div className="spinner-border" role="status"></div>
      <div className="sr-only">Loading...</div>
    </div>
  );
};

export default Loader;
