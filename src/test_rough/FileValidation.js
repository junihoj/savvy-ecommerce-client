// const validationSchema = Yup.object().shape({
//     [Form.File]: Yup.mixed()
//      .test({
//        message: 'Please provide a supported file type',
//        test: (file, context) => {
//          const isValid = ['png', 'pdf'].includes(getExtension(file?.name));
//          if (!isValid) context?.createError();
//          return isValid;
//        }
//      })
//      .test({
//        message: `File too big, can't exceed ${MAX_FILE_SIZE}`,
//        test: (file) => {
//          const isValid = file?.size < MAX_FILE_SIZE;
//          return isValid;
//        }
//      })
//    });

// myFile: Yup.mixed().required('required')
//       .test('fileFormat', 'Only PDF files are allowed', value => {
//         if (value) {
//           const supportedFormats = ['pdf'];
//           return supportedFormats.includes(value.name.split('.').pop());
//         }
//         return true;
//       })
//       .test('fileSize', 'File size must be less than 3MB', value => {
//         if (value) {
//           return value.size <= 3145728;
//         }
//         return true;
//       }),

import React from 'react'

const FileValidation = () => {
  return (
    <div>FileValidation</div>
  )
}

export default FileValidation