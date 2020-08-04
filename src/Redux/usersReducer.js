import { usersAPI } from "../API/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS ';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNTS = 'SET-TOTAL-USER-COUNTS';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING ';
const TOOGLE_IS_FOLLOWING = 'TOOGLE-IS-FOLLOWING ';

let initialState = {
  users:[
    // {id:1,photoUrl:'https://res.cloudinary.com/heroespatches/image/upload/v1483416716/hero/illidan.jpg',
    // followed: false,fullName:'Dmitry', status:'it-kamasutra, boss',location:{city:'Minsk',country:'Belarus'}},
    // {id:2,photoUrl:'https://res.cloudinary.com/heroespatches/image/upload/v1483416716/hero/illidan.jpg',
    // followed: true,fullName:'Sasha', status:'it-kamasutra, secondary',location:{city:'Moskow',country:'Russian'}},
    // {id:3,photoUrl:'https://res.cloudinary.com/heroespatches/image/upload/v1483416716/hero/illidan.jpg',
    // followed: false,fullName:'Andrew', status:'it-kamasutra, third',location:{city:'Kiev',country:'Ukraine'}}, 
    ],pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress: []

}

 const usersReducer = (state = initialState,action) =>{
   switch(action.type) {
     case FOLLOW:
      return{...state,
        users:state.users.map(u => {
          if(u.id === action.userId){
            return{...u,followed:true}
          }
          return u;
        })
      }
     case UNFOLLOW:
      return{...state,
        users:state.users.map(u => {
          if(u.id === action.userId){
            return{...u,followed:false}
          }
          return u;
        })
      }
      case SET_USERS:{
        return {...state,users:[...action.users]}
      }
      case SET_CURRENT_PAGE:{
        return {...state,currentPage: action.currentPage}
      }
      case SET_TOTAL_USER_COUNTS:{
        return {...state,totalUsersCount : action.totalUsersCount}
      }
      case TOOGLE_IS_FETCHING:{
        return {...state,isFetching : action.isFetching}
      }
      case TOOGLE_IS_FOLLOWING:{
        return {
          ...state,
          followingInProgress :action.isFetching 
          ?  [...state.followingInProgress,action.userId] 
          :  state.followingInProgress.filter(id=> id != 
            action.userId)}
      }
    default: return state;
   }
}

export const followSuccess =(userId) => ({type: FOLLOW,userId})
export const unfollowSuccess =(userId) => ({type:UNFOLLOW,userId})
export const setUser =(users) => ({type:SET_USERS,users})
export const setCurrentPage=(currentPage) =>({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUserCounts=(totalUsersCount) =>({type:SET_TOTAL_USER_COUNTS,totalUsersCount})
export const toogleIsFetching=(isFetching) =>({type:TOOGLE_IS_FETCHING,isFetching})
export const toogleIsFollowingProgress=(isFetching,userId) =>({type:TOOGLE_IS_FOLLOWING,isFetching,userId})

export const getUsers = (currentPage,pageSize) =>{

  return (dispatch) =>{
  dispatch(toogleIsFetching(true))
    usersAPI.getUsers(currentPage,pageSize).then(data => {
          dispatch(toogleIsFetching(false))
          dispatch(setUser(data.items))
          dispatch(setTotalUserCounts(data.totalCount))
    });
  }
}

export const follow = (userId) =>{
  return (dispatch) =>{
    dispatch(toogleIsFollowingProgress(true,userId))
    usersAPI.follow(userId).then(response => {
      if(response.data.resultCode ===0){
        dispatch(followSuccess(userId))
      }
      dispatch(toogleIsFollowingProgress(false,userId))
     });
  }
}

export const unfollow = (userId) =>{
  return (dispatch) =>{
    dispatch(toogleIsFollowingProgress(true,userId))
    usersAPI.unfollow(userId).then(response => {
      if(response.data.resultCode ===0){
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toogleIsFollowingProgress(false,userId))
     });
  }
}

export default usersReducer