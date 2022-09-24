import React from 'react'

const inputClass = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 sm:text-sm"
const lableClass = "font-sans mb-2"
const containerClass = "flex flex-col py-2 mb-3"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
}){
    return(
        <div className={containerClass}>
            <label htmlFor={labelFor} className={lableClass}>
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={inputClass}
              placeholder={placeholder}
            />
          </div>
    )
}