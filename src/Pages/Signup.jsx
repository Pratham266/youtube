import React, { useState } from "react";
import EntryField from "../Components/EntryField";
import {
  getCurrentDate,
  isValidEmail,
  isValidPassword,
  isValidPhonenumber,
} from "../Js/Validator";
import ErrorAtEntryField from "../Components/ErrorAtEntryField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignup } from "../redux";
import { debounce } from "../Js/functionForData";

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
    mobile: "",
    gender: "",
  });

  const [image, setImage] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSignupData = (name, value) => {
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleData = (name, value) => {
    debounce(handleSignupData, 300)(name, value);
    clearError(name);
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    handleData(name, value);
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

    const {
      firstname,
      lastname,
      email,
      password,
      cpassword,
      bday,
      mobile,
      gender,
    } = signupData;

    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);
    const validMonumber = isValidPhonenumber(mobile);

    if (!validEmail) {
      setError("email", "email is not valid!");
    }

    if (!validPassword) {
      setError("password", "Create Strong Password");
    }

    if (!validMonumber) {
      setError("mobile", "Mobile Number length is 10 digit.");
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


    if (!image) {
      console.log(image)
      setError("image", "image is required");
    }
    if (
      validEmail &&
      validPassword &&
      validMonumber &&
      password === cpassword &&
      firstname !== "" &&
      lastname !== "" &&
      gender !== "" &&
      bday !== "" &&
      image
    ) {
      dispatch(userSignup({ ...signupData, image }, navigate));
    }
  };

  return (
    <div className="mt-4">
      <div className="col-md-8 mx-auto">
        <form onSubmit={handleSignup}>
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
                name={"mobile"}
                id={"mobile"}
                onChange={handleOnchange}
                type={"number"}
                maxlength={"10"}
                error={errors.hasOwnProperty("mobile")}
              />
              {errors.hasOwnProperty("mobile") && (
                <ErrorAtEntryField errorMessage={errors.mobile} />
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

            <div
              className="p-2 flex-fill bd-highlight"
              style={{ width: "182px" }}
            >
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
                        <label className="form-check-label" htmlFor={item}>
                          {item}
                        </label>
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

          <div className="form-group">
            <label className="form-label mt-4">
              Upload your Pofile Picture
            </label>
            <input
              className="form-control"
              type="file"
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              error={errors.hasOwnProperty("image")}
            />

          </div>
          {errors.hasOwnProperty("image") && (
            <ErrorAtEntryField errorMessage={errors.image} />
          )}
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-primary mt-2 "
            >
              Signup
            </button>
          </div>
        </form>
        <div className="mt-2">
          <p>
            Already have an account!
            <Link to="/login" style={{ fontStyle: "italic" }}>
              Login Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
