import React from 'react'

const EntryField = ({label,name,type,value,id,error,onChange,placeholder,required,maxlength,disabled}) => {
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
            disabled={disabled}
            maxLength={maxlength}
          />
        </div>
    </>
  )
}

export default EntryField
