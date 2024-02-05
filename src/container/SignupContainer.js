import { connect } from "react-redux";
import Signup from "../Pages/Signup";
import { userSignup } from "../redux";

const mapDispatchToProps = dispatch=>({
    userSignup:(signupData,navigate)=>{
        dispatch(userSignup(signupData,navigate));
    }
})

export default connect(null,mapDispatchToProps)(Signup);