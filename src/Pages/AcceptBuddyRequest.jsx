import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const AcceptBuddyRequest = ({ teamState, decisonOnBuddyRequest }) => {

  const { id } = useParams();

  const navigate = useNavigate();

  const handleInvitation = (decision) => {
    decisonOnBuddyRequest(decision, id, navigate);
  };

  return (
    <div
      style={{ height: "350px" }}
      className="d-flex align-items-center justify-content-center"
    >
      {teamState?.loading ? (
        <Loader />
      ) : (
        <div className="card">
          <div className="card-header bg-primary text-white">
            INVITATION FROM SP
          </div>
          <div className="card-body">
            <blockquote className="blockquote">
              <p>Hi, I have invited you to join my team on SP</p>
              <p>I am very excited to have you on my team!</p>
              <div className="m-4">
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={() => handleInvitation("accept")}
                >
                  ACCEPT
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleInvitation("reject")}
                >
                  REJECT
                </button>
              </div>
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcceptBuddyRequest;