import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import useVerifyEmail from '../../hooks/auth/use-verify-email';

const Activation = () => {
    const {verifyEmail, error} = useVerifyEmail();
    const {activation_token} = useParams();
    useEffect(()=>{
        if(activation_token){
            verifyEmail(activation_token)
        }
    },[activation_token, verifyEmail])
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        {error? <p> Your Token has Expired</p>:(
           <p>Your Email Verification was successful</p> 
        )}
    </div>
  )
}

export default Activation;