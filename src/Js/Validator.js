export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

export const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };


export const isValidPhonenumber=(mono)=>{
  var phonenoRegex = /^\d{10}$/;
  return phonenoRegex.test(mono)
}

export const  getCurrentDate=() =>{
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

 export const formatTimeAndDate = () => {
    var now = new Date()
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    console.log(date," -> ",time);
    return `${date}  ${time}`
}

export const UpdateImageUrl=(url)=>{
  console.log("inupdate : ",url)
    const updateUrl = url.split(`\\`)
    return updateUrl[1];
}


export const validateAllFieldsUser = (signupData,setError,image)=>{
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
      console.log({ ...signupData, image })
      return true;
      //userSignup({ ...signupData, image }, navigate);
    }
    return false
}
export const validateAllEditUser = (editData,setError)=>{
  const {
    firstname,
    lastname,
    email,
    bday,
    mobile,
    gender,  
} = editData;

  const validEmail = isValidEmail(email);
  const validMonumber = isValidPhonenumber(mobile);

  if (!validEmail) {
    setError("email", "email is not valid!");
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

  if (bday === "") {
    setError("bday", "Please select the Birthdate");
  }

  if (gender === "") {
    setError("gender", "Gender is required");
  }

  if (validEmail && validMonumber && firstname !== "" && lastname !== "" && gender !== "" && bday !== "") {
    return true;
  }

  return false
}