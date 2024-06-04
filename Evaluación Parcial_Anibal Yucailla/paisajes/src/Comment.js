// src/Comment.js
import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ id, comment, addComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment);

  const handleSave = () => {
    addComment(id, text);
    setIsEditing(false);
  };

  return (

    
    <div className="comment">
      {isEditing ? (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}


            
            placeholder="Deja un comentario..."
          />
          <button onClick={handleSave}>Guardar</button>
        </>



      ) : (
        <>
          <p>{comment}</p>
          <button onClick={() => setIsEditing(true)}>Comentar</button>
        </>
      )}
    </div>
  );
};

export default Comment;
