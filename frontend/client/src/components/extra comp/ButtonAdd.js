import {useContext} from 'react'
import {cartContxt} from '../../stores/CartContxt';


function ButtonAdd({item}) {
   const addOrRemoveCart=useContext(cartContxt)
  const clickObject = (value)=>{
      // addOrRemoveCart is the connection to the cart reducer
      //  console.log(value)
      addOrRemoveCart.addItemsToCart({
      id:value?.id,
      category:value?.category,
      image:value?.image,
      price:value?.price,
      // totalPrice:item.totalPrice,
      // seller:"semper",
      qty:0,
      
      })
      addOrRemoveCart.seeSetDisplay(false)
  }
return(
   <>
   <button className="plus" onClick={()=>clickObject(item)}>+</button>
   </>
)
      
}

export default ButtonAdd
