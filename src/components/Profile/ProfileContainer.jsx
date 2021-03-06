import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile,getStatus,updateStatus} from '../../Redux/postDataReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId){
      userId=9616;
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
     return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
     )
  }
}

let mapStateToProps = (state) =>({
  profile: state.postPage.profile,
  status: state.postPage.status
 })

// let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

export default compose (connect (mapStateToProps,{getUserProfile,getStatus,updateStatus}),withRouter,
// withAuthRedirect
) (ProfileContainer) ;