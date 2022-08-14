import React from 'react'

const Alert = (props) => {
  return (
    <>
   {props.alert!==null?<div className={`alert alert-${props.alert.type}`} role="alert">
   <strong>{props.alert.msg}</strong>:{props.alert.type}
  </div>:props.alert}
    </>
    )
}

export default Alert