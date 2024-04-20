import React from 'react'
import './input.css'
export const Input = ({type, labels,   placeholder,h,onChange}) => {
  const handleChange = (e) => {
    onChange(e.target.value); 
    console.log(e.target.value)
  };
  return (
    <div style={{display:"flex",flexDirection:"column"  }}>
        <label>{labels}</label>
        <input type={type} className='input' style={{height:h}} placeholder={placeholder }  onChange={handleChange} />
    </div>
  )
}
