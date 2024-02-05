import React, { useEffect, useRef, useState } from 'react'
import { addBuddyRequest, getSearchUserData } from '../API/api';
import { debounce } from '../Js/functionForData';
import ImageComponent from './ImageComponent';
import { BackendUrl } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBuddyBar = ({ team, checkedUsers, setCheckedUsers, handleModifyBuddiesChannels }) => {
  
  const searchRef = useRef(null);
  const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showBuddy,setShowBuddy]= useState(false);

  const getSearchUser = async (searchTerm) => {
    setSearchUser(await getSearchUserData(searchTerm));
  };

  const debounceGetData = debounce(
    (searchTerm) => getSearchUser(searchTerm),
    300
  );


  const handleSearch = (e) => {
    e.preventDefault();
    debounceGetData(searchRef.current.value);
    setShowBuddy(!showBuddy);
  };

  const handleSearchAddBuddy = async (userId) => {
    setLoading(true);
    setSearchUser([]);
    await addBuddyRequest(userId);
    searchRef.current.value = "";
    setLoading(false);
  };


  const handleModifyChannels = () => {
    setShow(false)
    handleModifyBuddiesChannels()
  }

  const handleCheckboxChange = (userId) => {

    const isChecked = checkedUsers.includes(userId);
    if (isChecked) {
      setCheckedUsers(checkedUsers.filter((id) => id !== userId));
    } else {
      setCheckedUsers([...checkedUsers, userId]);
    }
  }

  return (
    <div className="d-flex flex align-items-center md-form form-sm mt-0 p-2 bg-black">
      <div className='w-75 mx-4'>
        
        <form onSubmit={handleSearch}>
          <input
            className="form-control form-control-sm ml-3 w-25 border rounded bg-secondary text-black"
            type="text"
            ref={searchRef}
            placeholder={`${loading ? "Please wait...." : "Add Buddy..."}`}
          />
        </form>

        {(showBuddy && (searchUser?.length !== 0)) && (

          <div className="dropdown">
            <div
              className="dropdown-menu show border-2"
              style={{
                position: "absolute",
                inset: "0px auto auto 0px",
                margin: "0px",
              }}
            >
              <div className='d-flex justify-content-between'>
              <h6 className="dropdown-header text-black"> Buddies</h6>
              <h6 className="dropdown-header" style={{cursor:"pointer"}} onClick={()=>setShowBuddy(!showBuddy)}> <FontAwesomeIcon icon={faXmark} style={{color: "#000000"}} size="xl" /> </h6>
              </div>
              <div className="scrollbar-ripe-malink" style={{ overflowY: "scroll", height: "300px" }}>

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

      <div>
        <div className="nav-item dropdown">
          <div className="nav-link dropdown-toggle show text-white" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" onClick={() => setShow(!show)}>{checkedUsers.length === 0 ? "" : checkedUsers.length} Buddies</div>
          {show ? <>
            <div className="dropdown-menu show " style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(0px, 42.4px, 0px)" }} >
              {team?.map((item) => {
                return (

                  <div className='p-1' key={item.userId} style={{width: "max-content"}}>

                    {checkedUsers.includes(item.userId) ?
                      <input className="form-check-input m-1" type="checkbox" value={item.firstname} id={item.firstname}
                        onChange={() => handleCheckboxChange(item?.userId)}
                        checked
                      /> : <input className="form-check-input m-1" type="checkbox" value={item.firstname} id={item.firstname}
                        onChange={() => handleCheckboxChange(item?.userId)}
                      />}

                    <label className='text-black' htmlFor={item.firstname}>{item.firstname} {item.lastname}</label>
                  </div>
                )
              })}

            </div>
          </> : <>
          </>}
        </div>
      </div>

      <button type="button" className="btn btn-info" onClick={handleModifyChannels}> Save</button>
    </div>

  )
}

export default SearchBuddyBar
