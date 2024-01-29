import React from 'react'

const ErrorText = ({message}) => {
    
  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <p className="fs-3"> <span className="text-danger">{message}</span></p>
        </div>
    </div>
</>
  )
}

export default ErrorText
