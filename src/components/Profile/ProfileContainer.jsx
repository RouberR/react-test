import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";


class ProfileContainer extends React.Component {




  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 20286;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    
  }

  render() {
   

    return (
      <Profile {...this.props} 
      owner={!this.props.match.params.userId}
      profile={this.props.profile}
       status={this.props.status} 
       updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} 
       />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});


export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
)(ProfileContainer);
