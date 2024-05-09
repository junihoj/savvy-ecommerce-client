import React from 'react'

const DisplayFormError = ({error}) => {
  return (
    <p className={`text-[#D63301] text-xs`}>{error}</p>
  )
}

export default DisplayFormError