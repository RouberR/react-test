import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": '5fdc5b29-7b23-4eef-924f-d3fe5652edae'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
        .then(response => {
            return response.data;
        });
    },

    getProfile(userId = 1){
        return instance.get(`profile/${userId}`)
        .then(response => {      
             return response.data;
            
      });
    },    
}

