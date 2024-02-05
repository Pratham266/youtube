import { connect } from "react-redux"
import Home from "../Pages/Home"
import { fetchYoutube, subscribeChannel, toggleToPremium } from "../redux";

const mapStateToProps = state=>({
    userState:state.user,
    youtubeState:state.youtube,
})

const mapDispatchToProps = dispatch=>({
    toggleToPremium:()=>{
        dispatch(toggleToPremium());
    },
    fetchYoutube:page=>{
        dispatch(fetchYoutube(page));
    },
    subscribeChannel:dataId=>{
        console.log("yes in")
        dispatch(subscribeChannel(dataId))
    }
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Home);