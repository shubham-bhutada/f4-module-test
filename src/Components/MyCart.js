import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/features/cart/cartSlice';

const MyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemoveFromCart = product => {
    dispatch(removeFromCart(product));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Items have been checked out successfully!');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='main'>
      <h2>My Cart</h2>
      <div className='mycart'>
        <div className='cart'>
            {cart.map(item => (
            <div className='cart-card' key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className='cart-product-details'>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
            </div>
            ))}
        </div>
        <div className='checkout'>
            <h3>Checkout list</h3>
            <div className='list'>
                {cart.map((item, index) => (
                    <div className='list-items'>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
                <hr/>
                <div className='total'>
                  <p>Total Price:</p>
                  <p>${totalPrice}</p>
                 </div>
                <hr/>
            </div>
            <button onClick={handleCheckout}>Click to Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default MyCart;
