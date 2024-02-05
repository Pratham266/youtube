import { connect } from "react-redux";
import Signup from "../Pages/Signup";
import { decisonOnBuddyRequest } from "../redux";
import AcceptBuddyRequest from "../Pages/AcceptBuddyRequest";


const mapStateToProps = state=>({
   teamState:state.team,
})

const mapDispatchToProps = dispatch=>({
    decisonOnBuddyRequest:(decision,id,navigate)=>{
        dispatch(decisonOnBuddyRequest(decision,id,navigate));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(AcceptBuddyRequest);