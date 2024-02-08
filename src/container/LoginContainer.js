import { connect } from "react-redux";
import Login from "../Pages/Login";
import { userLogin } from "../redux"

const mapStateToProps = state=>({
    userState:state.user,
})

const mapDispatchToProps = dispatch=>({
    userLogin:(loginData,navigate)=>{
        dispatch(userLogin(loginData,navigate));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);