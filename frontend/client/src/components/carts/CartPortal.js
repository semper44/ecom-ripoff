import React from 'react'
import  ReactDOM  from 'react-dom'


const ModalOverlay=(props)=>{
    return(
        <>
        {props.children}
        </>
    )
}

function CartPortal(props) {
  return (
    <>
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modals"))}
    </>
  )
}

export default CartPortal