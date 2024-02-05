import { connect } from "react-redux";
import SubscribeChannels from "../Pages/SubscribeChannels";
import { getSubscribedData } from "../redux";

const mapStateToProps = state=>({
    userState:state.user,
    
})
const mapDispatchToProps = dispatch =>({
    getSubscribedData:()=>{
        dispatch(getSubscribedData());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SubscribeChannels);