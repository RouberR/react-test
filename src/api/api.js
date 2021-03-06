import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "5fdc5b29-7b23-4eef-924f-d3fe5652edae" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please profileAPI object")
      return instance.get('profile/' + userId);
  },


  follow(userId){
    return instance.post(`follow/${userId}`)},

  unfollow(userId){
    return instance.delete(`follow/${userId}`)}
};


export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
   getStatus(userId){
    return instance.get('profile/status/' + userId);
   },
   updateStatus(status){
    return instance.put('profile/status', {
      status: status
    });
   },
   savePhoto(photoFile){
     const formData = new FormData();
     formData.append("image", photoFile)
    return instance.put('profile/photo', formData,{
      headers: {
        'Content-Type': "multipart/form-data"
      }
    });
   }
}




export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }

  
}