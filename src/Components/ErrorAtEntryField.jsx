import React from 'react'

const ErrorAtEntryField = ({errorMessage}) => {
  return (
    <small className="form-text text-danger">
        {errorMessage}          
    </small>
  )
}

export default ErrorAtEntryField
