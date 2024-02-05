import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../Js/functionForData";
import { BackendUrl } from "../constants";
import ImageComponent from "../Components/ImageComponent";
import { addBuddyRequest, getSearchUserData } from "../API/api";
import Loader from "../Components/Loader";
import SearchBuddyBar from "../Components/SearchBuddyBar";
import SmallLoader from "../Components/SmallLoader";
import { useNavigate } from "react-router-dom";
import BuddyChannels from "./BuddyChannels";

const TeamPage = ({teamState,fetchBuddySubscribedChannels,fetchTeam}) => {

  const { team } = teamState;
  console.log("team",team)
  const navigate = useNavigate();

  const [checkedUsers, setCheckedUsers] = useState([]);
  
  const handleModifyBuddiesChannels =()=>{
    console.log("checked users:",checkedUsers)
    fetchBuddySubscribedChannels(checkedUsers)
  }


  useEffect(() => {
    fetchTeam()
    fetchBuddySubscribedChannels(checkedUsers)
  }, []);

  if(teamState?.loading){
    return (<Loader/>)
  }

  return (
    <>
      <SearchBuddyBar team={teamState?.members} checkedUsers={checkedUsers} setCheckedUsers={setCheckedUsers} handleModifyBuddiesChannels={handleModifyBuddiesChannels} />

      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#686565", height: "80vh" }}
      >
        <div className="w-25  border-dark m-2 bg-primary rounded">
          {teamState?.loading ? (
            <SmallLoader color={"white"} />
          ) : (
            <div className="scrollbar-ripe-malinka">
              {teamState?.members.map((item) => {
                return (
                  <div
                    className="card m-2 bg-black border-white text-white"
                    key={item._id}
                  >
                    <div className="card-header d-flex">
                      <ImageComponent
                        src={`${BackendUrl}/${item.image}`}
                        alt={`${item.firstname}_pic`}
                        style={{ width: "45px", height: "45px" }}
                        className={`rounded-circle`}
                      />
                      <div>
                        <span className="mx-2">
                          {item.firstname} {item.lastname}
                        </span>
                        <div className="p-1">
                          <p className="card-text">{item.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-75 border m-2 border-dark rounded bg-primary p-2">
           <BuddyChannels team={teamState}/>     
        </div>
      </div>
    </>
  );
};

export default TeamPage;
