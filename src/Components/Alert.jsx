import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Alert = ({message,type}) => {
    const [visiable,setVisiable] = useState(true)

    const alert  = type === "success" ? "alert-success":"alert-danger";
    
    return (
        visiable ?
            <>
            <div class={`alert alert-dismissible ${alert}`}>
          <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={()=>setVisiable(!visiable)}></button>
          <strong>{message}</strong>
        </div>
        </>:<></>
  )
}

export default Alert
