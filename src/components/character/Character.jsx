import React from 'react';
import './character.css';

const Character = ({character}) => {
    return (
        <>
            <div className='card m-2 bg-transparent border border-0 shadow-lg' style={{ height: '24rem'}}>
                <div className='card-body'>
                    <div className='card-title p-2 '>
                        <h2 className='fs-3 text-white text-center'>{character.name}</h2>
                    </div>
                    <div className='card-img text-center'>
                        <img className='rounded-5 img-fluid' src={character.image} alt={character.name} style={{width: '14rem', height: '14rem'}}/>
                    </div>
                    <div className='card-text'>
                        <p className='m-2 text-warning fs-5 text-center'>{character.origin.name}</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Character;