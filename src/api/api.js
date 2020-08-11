import * as axios from 'axios'

const axiosInstance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": "52d845d8-1943-4052-91df-960400832ef1"
   }
})

export const userApi = {
   getUsers(currentPage, pageSize) {
      return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
   },
   postFollow(id) {
      return axiosInstance.post(`/follow/${id}`).then(res => res.data)
   },
   deleteUnfollow(id) {
      return axiosInstance.delete(`/follow/${id}`).then(res => res.data)
   },
   getProfile(userId) {
      console.log('Не актуальный метод, profileAPI')
      return profileApi.getProfile(userId)
   }
}

export const profileApi = {
   getProfile(userId) {
      return axiosInstance.get(`/profile/${userId}`).then(res => res.data)
   },

   getStatus(userId) {
      return axiosInstance.get(`/profile/status/${userId}`)
   },

   updateStatus(status) {
      return axiosInstance.put(`/profile/status`, { status: status })
   }
}

export const authApi = {
   getAuthMe() {
      return axiosInstance.get(`/auth/me`).then(res => res.data)
   }
}
