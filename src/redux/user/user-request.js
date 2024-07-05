import { apiService } from "../../utils/axios-api";

const getUser = ()=>apiService({url:`/user/get-user`, otherConfig:{withCredentials:true}});
const loginUser = (data)=>apiService({url: '/user/login-user', method:'post', data, otherConfig:{withCredentials:true}})
const userRequest = {
    getUser,
    loginUser
}

export default userRequest;