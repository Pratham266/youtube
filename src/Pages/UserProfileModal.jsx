import React, { useEffect } from "react";
import EntryField from "../Components/EntryField";
import { useDispatch, useSelector } from "react-redux";
import { BackendUrl } from "../constants";
import { toggleToPremium } from "../redux";

const UserProfile = ({ handleClose }) => {
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const {
    _id: id,
    firstname,
    lastname,
    email,
    gender,
    mobile,
    age,
    birthdate,
    isPremium,
    userId,
  } = userData;

  const handlePremium = () => {
    dispatch(toggleToPremium());
    handleClose();
  };

  return (
    <div className="modal w-full" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={`${BackendUrl}/${userData.image}`}
              style={{ width: "45px", height: "45px"}}
            className={`rounded-circle m-2 border border-3  ${userData.isPremium ? "border-warning":"border-dark"}`}
              alt="profile_photo"
            />
            {userData.isPremium && <span class="badge rounded-pill bg-warning">Premium</span>}
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

              <div
                className="p-2 flex-fill bd-highlight"
                style={{ marginTop: "65px" }}
              >
                <button
                  className={`btn btn-warning ${isPremium ? "" : ""}`}
                  onClick={handlePremium}
                >
                  {!isPremium ? "Upgrade to Premium" : "Downgrade to Normal"}
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
