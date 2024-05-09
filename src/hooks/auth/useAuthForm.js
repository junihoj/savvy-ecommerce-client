import { useFormik } from "formik";
import * as Yup from 'yup';
import useApiService from "../api/use-api-service";
import { useCallback, useState } from "react";
import { requestIsSuccessful } from "../../utils";
import { notifySuccessFxn } from "../../utils/toast-fnc";
import {useNavigate} from 'react-router-dom';
const useAuthForm = ({isSignup=true}) => {
    const navigate = useNavigate();
    const [isSucess, setIsSuccess] = useState(false)
    const {sendRequest} = useApiService();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
                    .min(8, 'Password must be 8 characters long')
                    .matches(/[0-9]/, 'Password requires a number')
                    .matches(/[a-z]/, 'Password requires a lowercase letter')
                    .matches(/[A-Z]/, 'Password requires an uppercase letter'),
        rememberMe: Yup.boolean(),
        visible: Yup.boolean(),
        ...(isSignup? {
            fullName:Yup.string().required("FullName is required"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
            //TODO: add validation for check box Terms and agreement
    }: {})
    });

    const handleSignup = useCallback(async(values)=>{
        const data = {
            name:values.fullName,
            email: values.email,
            password: values.password
        }
        const response = await sendRequest({url: '/user/create', method:'post', data});
        if(requestIsSuccessful(response)){
            formik.resetForm();
            setIsSuccess(true);
            notifySuccessFxn("Your Registration was successful");
        }
    },[])

    const handleSignin = useCallback(async (values)=>{
        const data = {
            email: values.email,
            password: values.password
        }
        const response = await sendRequest({url: '/user/login-user', method:'post', data, otherConfig:{withCredentials:true}});
        if(requestIsSuccessful(response)){
            formik.resetForm();
            setIsSuccess(true);
            notifySuccessFxn("You have Signedin Successfully");
            navigate('/');
        }
    },[])
    const handleSubmit = async (values) => {
        console.log("FORM VALUES COMING THROUGH",values);
        try{
            if(isSignup){
                await handleSignup(values);           
            }else{
                await handleSignin(values);
            }
        }catch(err){

        }
    }

    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            visible: false,
            fullName:'',
            confirmPassword:''
        },
        validationSchema,
        onSubmit: handleSubmit
    });

    const togglePasswordVisibility = () => {
        const visible = formik.values.visible;
        formik.setFieldValue('visible', !visible)
    }

    return {
        formik,
        togglePasswordVisibility,
        isSucess
    }
}


export default useAuthForm;