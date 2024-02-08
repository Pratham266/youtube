import React, { useEffect, useState } from "react";
import EntryField from "../Components/EntryField";
import { useDispatch, useSelector } from "react-redux";
import { BackendUrl } from "../constants";
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile";



const UserProfile = ({ handleClose, userState, toggleToPremium, editUser }) => {
  const userData = userState?.user
  const [editProfile, setEditProfile] = useState(false);

  const { firstname, lastname, email, gender, mobile, age, birthdate, isPremium } = userData;
  const handleEditProfile = () => {
    setEditProfile(!editProfile)
  }
  const handlePremium = () => {
    toggleToPremium();
  };

  const style = { cursor: "pointer", fontStyle: "italic", textDecoration: "underline" }

  return (
    <div className="modal w-full">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={userData.image}
              className={`img-profile rounded-circle m-2 border border-3  ${userData.isPremium ? "border-warning" : "border-dark"}`}
              alt="profile_photo"
            />

            {<span onClick={handleEditProfile} style={style} >
              {editProfile ? "View Profile" : "Edit Profile"}
            </span>}

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
            </button>
          </div>
          <div className="modal-body">
            {editProfile ? <EditProfile data={userData} editUser={editUser} /> : <Profile data={userData} handlePremium={handlePremium} />}
          </div>
          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
