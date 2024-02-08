import React, { useEffect, useRef, useState } from 'react'
import { addBuddyRequest, getSearchUserData } from '../API/api';
import { debounce } from '../Js/functionForData';
import ImageComponent from './ImageComponent';
import { BackendUrl } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faXmark } from '@fortawesome/free-solid-svg-icons';

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
              className=" search_buddy_bar dropdown-menu show border-2"
              
            >
              <div className='d-flex justify-content-between'>
              <h6 className="dropdown-header text-black"> Buddies</h6>
              <h6 className="dropdown-header cursor-pointer" onClick={()=>setShowBuddy(!showBuddy)}> <FontAwesomeIcon icon={faXmark}  size="xl" /> </h6>
              </div>
              
              <div className="earch_buddy_bar_scroll scrollbar-ripe-malink">

                {searchUser.map((item) => {
                  return (
                    <div
                      key={item.userId}
                      className="dropdown-item border border-primay cursor-pointer"
                      onClick={() => handleSearchAddBuddy(item.userId)}
                    >
                      <div className="d-flex">

                        <div>
                          <ImageComponent
                            src={item.image}
                            alt={`${item.firstname}_pic`}
                            className={`rounded-circle img-profile`}
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
          <div className="nav-link  show text-white" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" onClick={() => setShow(!show)}>{checkedUsers.length === 0 ? "" : checkedUsers.length} Buddies
          <span className='px-1'>
          {show ? <FontAwesomeIcon icon={faCaretDown}/>:<FontAwesomeIcon icon={faCaretUp} />}
          </span>
          </div>
          {show ? <>
            <div className=" search_buddy_bar_drop_down dropdown-menu show ">
              {team?.map((item) => {
                return (

                  <div className=' search_buddy_bar_list_card p-1' key={item.userId}>

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
