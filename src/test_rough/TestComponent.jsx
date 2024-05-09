import React, { useCallback } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const TestComponent = () => {
    const validationSchema = Yup.object().shape({
        myFile:Yup.mixed().test('fileSize', 'file too large', (value)=>{
            console.log("FILES CHECKING YES", value.name)
            return true;
        })
    })
    const handleSubmit = useCallback((values)=>{

    },[])
    const formik = useFormik({
        initialValues:{
            myFile:''
        },
        validationSchema,
        onSubmit:handleSubmit
    })
  return (
    <div>
        <input type='file' name='myFile' accept='.pdf'/>
    </div>
  )
}

export default TestComponent