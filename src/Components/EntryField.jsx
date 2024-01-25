import React, { useState } from 'react'

const EntryField = ({label,name,type,value,id,error,onChange,placeholder,required,max,disabled}) => {
  const bday =  name === "bday"
  return (
    <>
      <div className="form-group">
          <label className="form-label mt-4">
            {label}
          </label>
          <input
            type={type}
            className={`form-control border ${error ? " border-danger" : "border-primary"}`}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            max={max}
            disabled={disabled}
          />
        </div>
    </>
  )
}

export default EntryField
