import { connect } from "react-redux";
import Details from "../Components/Details";
import { subscribeChannel } from "../redux";

const mapStateToProps = (state) => ({
  youtubeState: state.youtube,
});

const mapDispatchToProps = (dispatch) => ({
  subscribeChannel: (dataId) => {
    dispatch(subscribeChannel(dataId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
