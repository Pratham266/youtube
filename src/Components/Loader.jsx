import React from "react";

const Loader = () => {
  return (
    <>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
      </div>
        <div class="sr-only">Loading...</div>
    </div>
        </>
  );
};

export default Loader;
