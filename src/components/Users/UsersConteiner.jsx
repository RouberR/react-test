import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { tooglesIsFollowingProgress, follow, toogleIsFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../img/Preloader/Preloader';
import { usersAPI } from '../../api/api';



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {      
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toogleIsFetching(false);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toogleIsFetching(false);
        });

    }




    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                tooglesIsFollowingProgress={this.props.tooglesIsFollowingProgress}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toogleIsFetching: (isFetching) => {
            dispatch(isFetchingAC(isFetching));
        }
    }
}
*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching,
    tooglesIsFollowingProgress
})(UsersAPIComponent);