import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearchYoutube, fetchYoutube, userLogout } from "../redux";
import { debounce } from "../Js/functionForData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useSelector((state) => state);
  const searchRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout(navigate));
  };

  const debounceGetData = debounce(
    (searchTerm) => dispatch(fetchSearchYoutube(searchTerm)),
    500
  );

  const handleSearch = () => {
    debounceGetData(searchRef.current.value);
  };
  
  const style={color: "#ffffff",cursor:"pointer"}
  

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#6c7175'}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-black" to="/">
            socialpilot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/about">
                  About
                </Link>
              </li>
              {user?.user?._id ? (
                <>
                <li className="nav-item">
                <Link className="nav-link text-black" to="/team">
                  Team
                </Link>
              </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sp/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {user?.user?._id ? (
              <div className="d-flex">
                <div className="mx-4">

                <input
                  className="form me-sm-2 text-black"
                  ref={searchRef}
                  onChange={handleSearch}
                  type="search"
                  placeholder="Search"
                  />
                </div>

              <div className="mx-4">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  size="xl"
                  onClick={handleLogout}
                  style={style}
                  />
                  </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
