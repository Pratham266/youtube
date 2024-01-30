import React, {useState } from "react";
import EntryField from "../Components/EntryField";
import { isValidEmail, isValidPassword } from "../Js/Validator";
import ErrorAtEntryField from "../Components/ErrorAtEntryField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux";
import { debounce } from "../Js/functionForData";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginData =(name,value)=>{
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleData = (name,value) =>{
    debounce(handleLoginData,1000)(name,value);
    clearError(name);
  }
  
   const handleOnchange = (e) => {
    const {name,value} = e.target;
    handleData(name,value)
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

  const handleLogin =async (e) => {
    e.preventDefault();
    
    const { email, password } = loginData;
    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);
    
    if (!validEmail) {
      setError("email", "email is not valid!");
    }

    if (!validPassword) {
      setError(
        "password",
        "Password is not valid"
      );
    }
    
    if(validEmail && validPassword){
      dispatch(userLogin(loginData,navigate))
    }

  };

  return (
    <div className="mt-4">  
      <div className="col-md-8 mx-auto">

      <form>
        <legend>Login</legend>

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

        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary mt-2 "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-2">
        <p>Don't have an account yet! <Link to="/signup" style={{fontStyle:"italic"}}>Create Account</Link></p>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
