import React, { useState } from 'react';
import ListEpisodes from '../ListEpisodes/ListEpisodes';
import { CSVLink } from "react-csv";

import "./FormEpisodes.css";

function FormEpisodes() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [list, setList] = useState([])

  const handleTitle = (e) => {
    setTitle(e)
 };

  const handleDate = (e) => {
    setDate(e)
  };

  const handleDescription = (e) => {
    setDescription(e)
  };

  const addEpisode = (e) => {
    e.preventDefault()

    const newArr = [...list];

    const newList = {};
    newList.title = title;
    newList.date = date;
    newList.description = description

    newArr.push(newList)
    setList(newArr)

    setTitle("")
    setDate("")
    setDescription("")
  }

  return (
    <div>
      <form onSubmit={(e) => addEpisode(e)}>
        <div className="first-line">
          <label>Titre de l'épisode</label>
          <input
            type="text"
            onInput={(e) => handleTitle(e.target.value)}
            placeholder="Titre de l'épisode"
            value={title}
          />

          <label>Date de publication</label>
          <input
            type="Date" onInput={(e) => handleDate(e.target.value)}
            value={date}          
          />

          <label>Description de l'épisode</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onInput={(e) => handleDescription(e.target.value)}
            placeholder="Decrivez l'épisode"
            value={description}
          ></textarea>
        </div>
        <div className="second-line">
          <button>Ajouter un épisode</button>
        </div>
      </form>

      <button className="btn-save-style">
        <CSVLink id="button-save" data={list}>
          Save
        </CSVLink>
      </button>

      <div className="list-episodes">
        <ListEpisodes list={list} />
      </div>
    </div>
  );
}

export default FormEpisodes;
