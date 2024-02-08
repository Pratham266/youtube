import { connect } from "react-redux";
import Details from "../Components/Details";

const mapStateToProps = state=>({
    youtubeState:state.youtube,
})

const mapDispatchToProps = dispatch=>({
    subscribeChannel:dataId=>{
        console.log("yes in")
        dispatch(subscribeChannel(dataId))
    }
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Details);