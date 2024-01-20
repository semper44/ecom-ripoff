// import React, { useReducer } from 'react'
// // import "./searchmodal.css"
// import styles from  "./searchmodal.module.css"
// import Modals from '../extra comp/Modals'

// const initialState={
//     product:"",
//     color:"",
//     sellers:"",
//     price:""
// }

// function Reducer(state, action){

// }

// function SearchModal2(props) {
//   console.log("search")

//     const[state, dispatch]= useReducer(Reducer, initialState)

//     function Change(){

//     }
//   return (
//     <Modals>
//         <div className={styles['all-items']}>
//           <button id={styles.cancel} onClick={()=>props.changed(false)}>&#10005;</button>
//           <div className={styles['search-items']}>
//             <input type="text" 
//             className={styles.product} 
//             placeholder='product'
//             onChange={Change}
//             name='product'/>

//             <input type="text" 
//             className={styles.colors} 
//             placeholder='colors'
//             onChange={Change}
//             name='colors'/>

//             <input type="text" 
//             className={styles.sellers}
//             placeholder='sellers'
//             onChange={Change}
//             name='sellers'/>

//             <input type="number" 
//             className={styles.price}
//             placeholder='price'
//             onChange={Change}
//             name='price'/>

//             <button className={styles.search}>Search</button>
//           </div>
//       </div>
//     </Modals>
//   )
// }

// export default SearchModal2