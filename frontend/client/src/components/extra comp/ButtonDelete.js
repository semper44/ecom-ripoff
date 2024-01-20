import React, {useContext} from 'react'
import {cartContxt} from '../../stores/CartContxt';



function ButtonDelete({item}) {
    const addOrRemoveCart=useContext(cartContxt)
    function clickToRemove(item){
        addOrRemoveCart.removeItemsFromCart({
          id:item.id,
        })
    }
    return(
        <>
        <button className='minus' onClick={()=>clickToRemove(item)}>
          -
        </button>
        </>
      )
}

export default ButtonDelete
