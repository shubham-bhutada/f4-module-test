import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';
import { setProducts } from '../redux/features/cart/productSlice';
import axios from 'axios';

const CartHome = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  console.log(products);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
    .then(response => {
      dispatch(setProducts(response.data.products))
      console.log(response.data);
    })
  }, [dispatch]);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <div className='home'>
      <h2>All Items</h2>
      <div className='cards'>
        {products.map(product => (
          <div className='card' key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className='product-details'>
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartHome;
