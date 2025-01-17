import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
            />
       
       <div>
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping basket </h2>
        {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
</div>
</div>
<div className="checkout__right">
    <Subtotal/>
    
</div>

      
    </div>
  );
}

export default Checkout;


