import React from 'react';


const Cart = ({kart}) => {
  
    return(
           <div className='art'>
            <h1>CART</h1>
            {kart.map(item =>
            <div className='card-cart'>
            <img src={item.search_image} alt=""></img>
            <span>{item.product_additional_info}</span>
            <label>{item.price}/-</label>
            </div>
            )}
           </div>
    );
}

export default Cart;