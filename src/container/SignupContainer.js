import { connect } from "react-redux";
import Signup from "../Pages/Signup";
import { userSignup } from "../redux";

const mapStateToProps = state=>({
    userState:state.user,
})

const mapDispatchToProps = dispatch=>({
    userSignup:(signupData,navigate)=>{
        dispatch(userSignup(signupData,navigate));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup);