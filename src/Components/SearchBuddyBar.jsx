import React, { useRef, useState } from 'react'
import { addBuddyRequest, getSearchUserData } from '../API/api';
import { debounce } from '../Js/functionForData';
import ImageComponent from './ImageComponent';
import { BackendUrl } from '../constants';

const SearchBuddyBar = () => {
    const searchRef = useRef(null);
    const [searchUser, setSearchUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSearchUser = async (searchTerm) => {
      setSearchUser(await getSearchUserData(searchTerm));
    };
  
    const debounceGetData = debounce(
      (searchTerm) => getSearchUser(searchTerm),
      500
    );
  
    const handleSearch = () => {
      debounceGetData(searchRef.current.value);
    };
  
    const handleSearchAddBuddy = async (userId) => {
      setLoading(true);
      setSearchUser([]);
      await addBuddyRequest(userId);
      searchRef.current.value = "";
      setLoading(false);
    };
  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center md-form form-sm mt-0 p-2 bg-black">
        <input
          className="form-control form-control-sm ml-3 w-25 border rounded"
          type="text"
          ref={searchRef}
          onFocus={handleSearch}
          onChange={handleSearch}
          placeholder={`${loading ? "Please wait....":"Add Buddy"}`}
        />
        {searchUser?.length !== 0 && (
          <div className="dropdown">
            <div
              className="dropdown-menu show border-2"
              style={{
                position: "absolute",
                inset: "0px auto auto 0px",
                margin: "0px",
              }}
            >
              <div>
                
                <h6 className="dropdown-header">Buddies</h6>
                {searchUser.map((item) => {
                  return (
                    <div
                      key={item.userId}
                      className="dropdown-item border border-primay"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSearchAddBuddy(item.userId)}
                    >
                      <div className="d-flex">
                        <div>
                          <ImageComponent
                            src={`${BackendUrl}/${item.image}`}
                            alt={`${item.firstname}_pic`}
                            style={{ width: "35px", height: "35px" }}
                            className={`rounded-circle`}
                          />
                        </div>
                        <div>
                          <h5 className="mx-2">
                            {item.firstname} {item.lastname}
                          </h5>
                          <p className="ps-2">{item.email}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                

              </div>
            </div>
          </div>
        )}
      </div>

  )
}

export default SearchBuddyBar
