// src/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.src.small} alt={item.alt} />
              <p>{item.alt}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button className="purchase-button">Comprar</button>}
    </div>
  );
};

export default Cart;

