import React, { useEffect, useRef, useState } from "react";
import { debounce } from "../Js/functionForData";
import { BackendUrl } from "../constants";
import ImageComponent from "../Components/ImageComponent";
import { addBuddyRequest, getSearchUserData } from "../API/api";
import Loader from "../Components/Loader";
import SearchBuddyBar from "../Components/SearchBuddyBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../redux";
import SmallLoader from "../Components/SmallLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import BuddyChannels from "./BuddyChannels";

const TeamPage = () => {
  const { team } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTeam());
  }, []);

  return (
    <>
      <SearchBuddyBar />

      <div
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#686565", height: "80vh" }}
      >
        <div className="w-25  border-dark m-2 bg-primary rounded">
          {team?.loading ? (
            <SmallLoader color={"white"} />
          ) : (
            <div className="scrollbar-ripe-malinka">
              {team?.members.map((item) => {
                return (
                  <div
                    style={{cursor: "pointer",}}
                    class="card m-2 bg-black border-white text-white"
                    key={item._id}
                    onClick={() => navigate(`/team/${item.userId}`)}
                  >
                    <div class="card-header d-flex">
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
                          <p class="card-text">{item.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-75 border m-2 border-dark rounded bg-primary ">
        <BuddyChannels/>
              
        </div>
      </div>
    </>
  );
};

export default TeamPage;
