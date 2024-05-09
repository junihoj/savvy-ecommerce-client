import { apiService } from "../../utils/axios-api";

const getUser = ()=>apiService({url:`/user/get-user`, otherConfig:{withCredentials:true}});

const userRequest = {
    getUser
}

export default userRequest;