import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from "./deletemodal.module.css"

function Backdrop(props){
    return(
        <div className={styles.backdrop}>
             {props.children}
        </div>
    )
}
// function ModalOverlay(props){
//     return(
//         <div className={styles.modal}>
//             {props.children}
//         </div>
//     )
// }


const portalElement = document.getElementById("modals")
function DeleteModals(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop >{props.children}</ Backdrop >, portalElement)}
    {/* {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} */}
    </>
  )
}

export default DeleteModals