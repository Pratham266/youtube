import { connect } from "react-redux";
import TeamPage from "../Pages/TeamPage";
import { fetchBuddySubscribedChannels, fetchTeam } from "../redux";

const mapStateToProps = (state) => ({
  teamState: state.team,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBuddySubscribedChannels: (data, page) => {
    dispatch(fetchBuddySubscribedChannels(data, page));
  },
  fetchTeam: () => {
    dispatch(fetchTeam());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
