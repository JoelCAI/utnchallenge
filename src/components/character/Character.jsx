import React from 'react';
import './character.css';

const Character = ({character}) => {
    return (
        <div className='text-center p-4'>
            <h2 className='fs-5'>{character.name}</h2>
            <img className='rounded-5' src={character.image} alt={character.name} />
            <p className='m-2 text-primary fs-2'>{character.origin.name}</p>
        </div>
    )
}

export default Character;