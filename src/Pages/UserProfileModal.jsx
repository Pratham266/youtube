import React from "react";
import EntryField from "../Components/EntryField";
import { useSelector } from "react-redux";
import { BackendUrl } from "../constants";

const UserProfile = ({ handleClose }) => {
  const userData = useSelector((state) => state.user.user);
  const {
    _id: id,
    firstname,
    lastname,
    email,
    gender,
    mobile,
    age,
    birthdate,
    isPremium
  } = userData;
console.log('data : ',userData)
  return (
    <div className="modal w-full" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={`${BackendUrl}/${userData.image}`}
              className="rounded-circle m-2"
              style={{ width: "45px", height: "45px" }}
              alt="profile_photo"
            />
            <h5 className="modal-title">Profile</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  label={"First Name"}
                  type={"text"}
                  value={firstname}
                  disabled
                />
              </div>
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  label={"Last Name"}
                  type={"text"}
                  value={lastname}
                  disabled
                />
              </div>
            </div>

            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  label={"Email"}
                  type={"email"}
                  value={email}
                  disabled
                />
              </div>
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  label={"Enter mobile no"}
                  type={"number"}
                  disabled
                  value={mobile}
                />
              </div>
            </div>

            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight">
                <EntryField label={"Age"} type={"text"} disabled value={age} />
              </div>
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  label={"Birthdate"}
                  type={"text"}
                  value={birthdate}
                  disabled
                />
              </div>
            </div>

            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight">
                <EntryField
                  type={"text"}
                  label={"Gender"}
                  value={gender}
                  disabled
                />
              </div>

              <div className="p-2 flex-fill bd-highlight" style={{marginTop:"65px"}}>
              <button className={`btn btn-warning ${isPremium ? "disabled":""}`}>
                    Upgrad to Premium
                </button>
              
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
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
