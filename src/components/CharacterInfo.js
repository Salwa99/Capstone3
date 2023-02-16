import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CharacterInfo() {
  const { charName } = useParams();

  const characters = useSelector((state) => state.characters);
  const character = characters.find((item) => item.name === charName);
  return (
    <div className="mainInfo">
      <ul className="infoContainer">
        {character && (
          <>
            <li>
              <img src={character.image} alt={character.name} />
            </li>
            <div className="charInfo">
              <li>
                Name:
                {character.name}
              </li>
              <li>
                House:
                {character.house}
              </li>
              <li>
                Birth:
                {character.dateOfBirth}
              </li>
              <li>
                Ancestry:
                {character.ancestry}
              </li>
              <li>
                Actor:
                {character.actor}
              </li>
            </div>
          </>
        )}
        {!character && <p>No Character is found!!</p>}
      </ul>
    </div>
  );
}

export default CharacterInfo;
