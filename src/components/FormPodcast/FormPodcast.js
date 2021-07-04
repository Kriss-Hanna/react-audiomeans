import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import data from '../../data';
import ListPodcasts from '../ListPodcasts/ListPodcasts';

import './FormPodcast.css';

function Form() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [cards, setCards] = useState(data);

  const handleTitle = (e) => {
    setTitle(e);  
  }

  const handleImage = (e) => {
    setImage(e)    
  }

  const addPodcast = (e) => {
    e.preventDefault()
    
    const newArr = [...cards]

    const newCard = {};
    newCard.title = title
    newCard.image = image
    newCard.id = uuid() 

    newArr.push(newCard);
    setCards(newArr)
 }
  
  return (
    <div className="form-container">
      <div className="form-podcast">
        <form onSubmit={(e) => addPodcast(e)} className="form">
          
          <div className="form-title">
            <label>Titre du podcast</label>
            <input
              type="text"
              placeholder="Titre du podcast"
              onInput={(e) => handleTitle(e.target.value)}
            />
          </div>

          <div className="form-img">
            <label>Image du podcast</label>
            <input
              type="text"
              onInput={(e) => handleImage(e.target.value)}
              placeholder="Url de l'image"
            />
          </div>
          <button>Ajouter un podcast</button>
        </form>
      </div>

      <div className="list-cards">
        <ListPodcasts cards={cards} />
      </div>
    </div>
  );
}

export default Form;
