import React from "react";
import EntryField from "../Components/EntryField";

const UserProfile = ({handleClose}) => { 
    console.log("in modal");
 return (

<div className="modal w-full" style={{"display":"block"}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="modal-body">
      <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"First Name"}
                type={"text"}
                name={"firstname"}
                id={"firstname"}
                placeholder={"First"} 
              />
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Last Name"}
                type={"text"}
                name={"lastname"}
                id={"lastname"}
                placeholder={"Last"}
              />
             
            </div>
          </div>

          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Email"}
                placeholder={"Enter Email"}
                name={"email"}
                type={"email"}
                id={"email"}
                value={"email"}
              />
              
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Enter mobile no"}
                placeholder={"999-999-9999"}
                name={"mono"}
                id={"mono"}
               
                type={"number"}
                             />
             
            </div>
          </div>

          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Password"}
                placeholder={"Enter Password"}
                name={"password"}
                type={"password"}
                id={"password"}
               
              />
         
            </div>
            <div className="p-2 flex-fill bd-highlight">
              {" "}
              <EntryField
                label={"Confirm Password"}
                type={"text"}
                name={"cpassword"}
                placeholder={"Confirm Password"}
                id={"cpassword"}
               
              />
             
            </div>
          </div>

          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                type={"date"}
                label={"Birthdate"}
                name={"bday"}
                id={"bday"}
                
              />

             
            </div>

            <div className="p-2 flex-fill bd-highlight" style={{ width: "182px" }}>
              <div>
                <label className="form-label mt-4">Gender</label>
                <div className="d-flex">
                  {["male", "female", "other"].map((item, index) => {
                    return (
                      <div className="form-check flex-fill mt-2" key={item}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id={item}
                          value={item}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default UserProfile;
