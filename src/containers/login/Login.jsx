import React from 'react'
import styles from '../../styles/styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useLoginUser from '../../hooks/auth/useAuthForm';
import DisplayFormError from '../../components/errors/DisplayFormError';

const Login = () => {
  const { formik, togglePasswordVisibility } = useLoginUser({isSignup:false});
  if(formik.errors){
    console.log(
      "FORMIK ERROR SIGNIN", formik.errors
    )
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" value={formik.values.email} onChange={formik.handleChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <DisplayFormError error={formik.touched.email && formik.errors.email? formik.errors.email: ''} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

            </div>
            <div className="mt-2 relative">
              <input id="password" name="password" type={formik.values.visible ? "text" : "password"} onChange={formik.handleChange} value={formik.values.password} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {formik.values.visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => togglePasswordVisibility()}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => togglePasswordVisibility()}
                />
              )}
               <DisplayFormError error={formik.touched.password && formik.errors.password? formik.errors.password: ''} />
            </div>
            <div className="text-sm flex justify-end">
              <a href="#1" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div className={`${styles.noramlFlex} justify-betweens`}>
            <div className={`${styles.noramlFlex}`}>
              <input type='checkbox' name="remember-me" id="remember-me" className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
              <label htmlFor='remember-me' className='"ml-2 block text-sm text-gray-900'>Remember me</label>
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={()=>formik.handleSubmit()}
            >
              Sign in
            </button>
          </div>
        </div>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#2" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> &nbsp; Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Login;