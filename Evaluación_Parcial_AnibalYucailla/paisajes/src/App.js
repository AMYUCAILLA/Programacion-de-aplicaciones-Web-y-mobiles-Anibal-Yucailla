// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import ImageGallery from './ImageGallery';
import Cart from './Cart';

const API_URL = 'https://api.pexels.com/v1/search?query=';
const API_KEY = 'ev8xjgEufiTkAii7jds58yYpXpxMoR71IxxSyivHBQKUozE25hxvLR9u';
const RANDOM_QUERY = 'landscape';

function App() {
  const [images, setImages] = useState([]);
  const [cart, setCart] = useState([]);
  const [comments, setComments] = useState({});
  const [backgroundImage, setBackgroundImage] = useState('');

  const fetchImages = async (query) => {
    try {
      const response = await fetch(`${API_URL}${query}&per_page=3`, {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      setImages(data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchRandomBackground = async () => {
    try {
      const response = await fetch(`${API_URL}${RANDOM_QUERY}&per_page=1`, {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      if (data.photos.length > 0) {
        setBackgroundImage(data.photos[0].src.large);
      }
    } catch (error) {
      console.error('Error fetching background image:', error);
    }
  };

  useEffect(() => {
    fetchRandomBackground();
  }, []);

  const addToCart = (image) => {
    setCart([...cart, image]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const addComment = (id, text) => {
    setComments({ ...comments, [id]: text });
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Los paisajes más hermosos del mundo</h1>
      <SearchForm onSearch={fetchImages} />
      <ImageGallery images={images} addToCart={addToCart} comments={comments} addComment={addComment} />
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
