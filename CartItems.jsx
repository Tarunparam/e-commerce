import React,{useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
export const CartItems = () => {
    const {getTotalCartItems,getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);
    return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(CartItems[e.id]>0){
                return  <div>
                            <div className="cartitems-format cartitem-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                                <p>${e.new_price*CartItems[e.id]}</p>
                                <button onClick={() => removeFromCart(e.id)} className='cartremove'>Remove</button>
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItems;