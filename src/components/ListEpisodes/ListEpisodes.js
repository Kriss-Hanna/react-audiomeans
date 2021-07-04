import React, { useState } from 'react';

import "./ListEpisodes.css";

const ListEpisodes = ({ list }) => {
  
  const [searchDatas, setSearchDatas] = useState("");
 
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    })
    return newDate
  };

   const handleSearchDatas = (e) => {
     let value = e.target.value;
     setSearchDatas(value);
   };

   const filter = list
     .filter((val) => {
       return val.title.includes(searchDatas);
     })
     .map((val, i) => {
        return (
          <div className="list-element">
            <ul className="element-episode" key={i}>
              <li>Titre : {val.title}</li>
              <li>Publié le : {dateParser(val.date)}</li>
              <li>Description : {val.description}</li>
            </ul>
          </div>
        );
     });
  
  return (
    <div className="list-container">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher un épisode"
        onChange={handleSearchDatas}
      />
      { filter }
    </div>
  );
};

export default ListEpisodes;
