const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOOGL_IS_FETCHING = 'TOOGL_IS_FETCHING';
const TOOGL_IS_FOLLOWING_PROGRESS= 'TOOGL_IS_FOLLOWING_PROGRESS';

let init = {
  users:[ ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress:[]
  
}



const usersReducer = (state = init, action) => {
  switch (action.type) {
    case FOLLOW:
      return  {
        ...state,
        // users: [...state.users]}
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return  {
        ...state,
        users: state.users.map( u =>{
          if (u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        })
      }
      case SET_USERS: 
        return {
          ...state, users: action.users}

      case SET_CURRENT_PAGE:
        return{
          ...state, currentPage: action.currentPage
        }

        case SET_USER_TOTAL_COUNT:{
          return{...state, totalUsersCount: action.totalCount}
        }

        case TOOGL_IS_FETCHING:{
          return{...state, isFetching: action.isFetching }
        }

        case TOOGL_IS_FOLLOWING_PROGRESS:{
          return{...state, 
            followingInProgress: action.followingInProgress 
            ? [...state.followingInProgress, action.userId]  
            : state.followingInProgress.filter(id => id != action.userId)
          }
        }
    default:
      return state;
  }

}


export const follow = (userId) => ({
  type: FOLLOW,
  userId
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_USER_TOTAL_COUNT,
  totalCount: totalUsersCount
});

export const toogleIsFetching = (isFetching) => ({
  type: TOOGL_IS_FETCHING,
  isFetching
});

export const tooglesIsFollowingProgress = (followingInProgress, userId) => ({
  type: TOOGL_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId
});



export default usersReducer;