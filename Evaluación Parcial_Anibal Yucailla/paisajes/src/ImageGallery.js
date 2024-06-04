// src/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, addToCart, comments, addComment }) => {
  const [editMode, setEditMode] = useState({});

  const handleCommentChange = (e, id) => {
    addComment(id, e.target.value);
  };

  const toggleEditMode = (id) => {
    setEditMode({ ...editMode, [id]: !editMode[id] });
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.src.large} alt={image.alt || 'Imagen de naturaleza'} />
          <p>{image.alt || 'Paisaje hermoso'}</p>
          <button onClick={() => addToCart(image)}>Agregar al carrito</button>
          {editMode[image.id] ? (
            <textarea
              value={comments[image.id] || ''}
              onChange={(e) => handleCommentChange(e, image.id)}
              placeholder="Edita tu comentario..."
            />
          ) : (
            <p>{comments[image.id] || 'Deja un comentario...'}</p>
          )}
          <button onClick={() => toggleEditMode(image.id)}>
            {editMode[image.id] ? 'Guardar' : 'Editar'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
