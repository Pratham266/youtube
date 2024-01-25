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
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
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