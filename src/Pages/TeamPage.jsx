import React, { useEffect, useRef } from "react";
import { debounce } from "../Js/functionForData";

const TeamPage = () => {
    
  const searchRef = useRef(null);

  // const debounceGetData = debounce(
  //   (searchTerm) => dispatch(write redux function (searchTerm)),
  //   500
  // );

  const handleSearch = () => {
    console.log(searchRef.current.value)
    // debounceGetData(searchRef.current.value);
  };

  const data = [];
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center md-form form-sm mt-0 p-2 bg-black">
        <input
          className="form-control form-control-sm ml-3 w-75 border rounded"
          type="text"
          ref={searchRef}
          onFocus={handleSearch}
          onChange={handleSearch}
          placeholder="Search Buddy By Name"
        />

        {data.length !== 0 && (
          <div className="dropdown">
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                inset: "0px auto auto 0px",
                margin: "0px",
              }}
            >
              <h6 className="dropdown-header">Dropdown header</h6>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </div>
          </div>
        )}
      </div>

      <div></div>
    </>
  );
};

export default TeamPage;
