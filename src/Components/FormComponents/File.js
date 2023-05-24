import React from 'react'

function File(props) {

    const {label, name , ...rest} = props
  return (
    <div>
        <label htmlFor={label}>{label}: </label>
        <input id={name} name={name} {...rest} />
    </div>
  )
}

export default File