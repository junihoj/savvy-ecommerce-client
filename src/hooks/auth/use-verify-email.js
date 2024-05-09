import { useCallback, useMemo, useState } from "react";
import useApiService from "../api/use-api-service";
import { requestIsSuccessful } from "../../utils";
import { notifyErrorFxn, notifySuccessFxn } from "../../utils/toast-fnc";

const useVerifyEmail = ()=>{
    const {sendRequest} = useApiService();
    const [error, setError] = useState()

    const verifyEmail = useCallback(async (activation_token)=>{
        if(activation_token){
            try{
                const response = await sendRequest({url: '/user/verify-user-email', method:"post", data:{activation_token}});
                if(requestIsSuccessful(response)){
                    notifySuccessFxn('Your Email Verification was successful')
                }
            }catch(err){
                console.log("TOKEN HAS EXPIRED", err)
                notifyErrorFxn(`${err?.response?.data?.message}`)
                setError(true)
            }
        }
    },[])
    return useMemo(()=>({
        verifyEmail,
        error   
    }),[error, verifyEmail])
}

export default useVerifyEmail;