import React from 'react';
import Header from './Header';
import { getUserData } from '../Redux/authReducer';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component{
  componentDidMount(){
    this.props.getUserData()
  }
  render(){
    return (
      <Header {...this.props}/>
    )
  }
  
}

const mapStateToProps = (state)=>{
  return {isAuth: state.auth.isAuth,login: state.auth.login}
  
}

export default connect (mapStateToProps,{getUserData}) (HeaderContainer)