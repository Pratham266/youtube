import { connect } from "react-redux"
import Home from "../Pages/Home"
import { editUser, fetchYoutube, subscribeChannel, toggleToPremium } from "../redux";

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
        dispatch(subscribeChannel(dataId))
    },
    editUser:(user)=>{
        dispatch(editUser(user));
    }
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Home);