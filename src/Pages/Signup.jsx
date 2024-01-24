import React, { useState } from "react";
import EntryField from "../Components/EntryField";
import {
  getCurrentDate,
  isValidEmail,
  isValidPassword,
  isValidPhonenumber,
} from "../Js/Validator";
import ErrorAtEntryField from "../Components/ErrorAtEntryField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux";




const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    bday: "",
    gender: "",
  });


  const [errors, setErrors] = useState({});

  const handleOnchange = (e) => {
    setSignupData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    clearError(e.target.name);
  };

  const clearError = (fieldName) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  const setError = (fieldName, errorMessage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
  };


  const handleSignup = (e) => {
    e.preventDefault();

    

    const {firstname,lastname,email,password,cpassword,bday,mono,gender} = signupData;

    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);
    const validMonumber = isValidPhonenumber(mono);

    if (!validEmail) {
      setError("email", "email is not valid!");
    }

    if (!validPassword) {
      setError(
        "password",
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and onedigit."
      );
    }

    if (!validMonumber) {
      setError("mono", "Mobile Number length is 10 digit.");
    }

    if (firstname === "") {
      setError("firstname", "fill this field");
    }
    if (lastname === "") {
      setError("lastname", "fill this field");
    }

    if (cpassword === "") {
      setError("cpassword", "Confirm Password is required");
    }

    if (password !== cpassword) {
      setError("cpassword", "Passwords are not match");
    }
    if (bday === "") {
      setError("bday", "Please select the Birthdate");
    }
    if (gender === "") {
      setError("gender", "Gender is required");
    }



    if (validEmail && validPassword && validMonumber && password === cpassword && firstname !== "" && lastname !== "" && gender !== "" && bday !== ""){
      

       dispatch(userSignup(signupData,navigate)) 
      
    }
     
  };


  return (
    <div className="row mt-4">     
      <div className="col-md-8 mx-auto">
        <form>
          <legend>Signup</legend>

          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              
              <EntryField
                label={"First Name"}
                type={"text"}
                name={"firstname"}
                id={"firstname"}
                placeholder={"First"}
                onChange={handleOnchange}
                error={errors.hasOwnProperty("firstname")}
              />

              {errors.hasOwnProperty("firstname") && (
                <ErrorAtEntryField errorMessage={errors.firstname} />
              )}
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Last Name"}
                type={"text"}
                name={"lastname"}
                id={"lastname"}
                placeholder={"Last"}
                onChange={handleOnchange}
                error={errors.hasOwnProperty("lastname")}
              />
              {errors.hasOwnProperty("lastname") && (
                <ErrorAtEntryField errorMessage={errors.lastname} />
              )}
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
                onChange={handleOnchange}
                error={errors.hasOwnProperty("email")}
              />
              {errors.hasOwnProperty("email") && (
                <ErrorAtEntryField errorMessage={errors.email} />
              )}
            </div>
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                label={"Enter mobile no"}
                placeholder={"999-999-9999"}
                name={"mono"}
                id={"mono"}
                onChange={handleOnchange}
                type={"number"}
                error={errors.hasOwnProperty("mono")}
              />
              {errors.hasOwnProperty("mono") && (
                <ErrorAtEntryField errorMessage={errors.mono} />
              )}
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
                onChange={handleOnchange}
                error={errors.hasOwnProperty("password")}
              />
              {errors.hasOwnProperty("password") && (
                <ErrorAtEntryField errorMessage={errors.password} />
              )}
            </div>
            <div className="p-2 flex-fill bd-highlight">
              {" "}
              <EntryField
                label={"Confirm Password"}
                type={"text"}
                name={"cpassword"}
                placeholder={"Confirm Password"}
                id={"cpassword"}
                onChange={handleOnchange}
                error={errors.hasOwnProperty("cpassword")}
              />
              {errors.hasOwnProperty("cpassword") && (
                <ErrorAtEntryField errorMessage={errors.cpassword} />
              )}
            </div>
          </div>

          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <EntryField
                type={"date"}
                label={"Birthdate"}
                name={"bday"}
                id={"bday"}
                onChange={handleOnchange}
                error={errors.hasOwnProperty("bday")}
                max={getCurrentDate()}
              />

              {errors.hasOwnProperty("bday") && (
                <ErrorAtEntryField errorMessage={errors.bday} />
              )}
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
                          onChange={handleOnchange}
                          id={item}
                          value={item}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    );
                  })}
                </div>
                {errors.hasOwnProperty("gender") && (
                  <ErrorAtEntryField errorMessage={errors.gender} />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-primary mt-2 "
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
