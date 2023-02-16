import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharactersAction } from '../redux/reducer/reducer';

function CharacterList() {
  const [charNameInput, setCharNameInput] = useState('');
  const dispatch = useDispatch();

  const inputCharNameChangeHandler = (e) => {
    setCharNameInput(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCharactersAction());
  }, [dispatch]);

  const characters = useSelector((state) => state.characters);
  let filterredCharacters = characters.slice(0, 25);
  if (charNameInput.trim().length > 0) {
    filterredCharacters = characters.filter((item) => (
      item.name.toLowerCase().includes(charNameInput.toLowerCase())
    ));
  }

  return (
    <div className="main">
      <div className="searchField">
        <input type="text" value={charNameInput} placeholder="Enter your favourite Hogwarts character" onChange={inputCharNameChangeHandler} />
      </div>
      <div className="cards">
        <ul>
          {filterredCharacters.map((character) => (
            <li className="mainContainer" key={character.id}>
              <Link to={`/details/${character.name}`}>
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default CharacterList;
