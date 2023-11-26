import React from 'react';
import './characterlist.css';
import { useState,useEffect } from 'react';
import Character from '../character/Character';


function NavPage(props) {
    return (
        <div className='d-flex justify-content-between align-items-center m-4'>
            <button className='btn btn-primary btn-sm'
            onClick={()=> props.setPage(props.page -1)}
            >
            Page {props.page}
            </button>
            <p className='m-3'>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
            onClick={()=> props.setPage(props.page +1)}
            >
            Page {props.page}
            </button>
        </div>
    )
  
}

function CharacterList () {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
        }

        fetchData();
    
    }, [page]);

    return (
        <div className='container'>

            <NavPage page= {page} setPage= {setPage} />

            <div className='row'>
                {characters.map((character) => {
                    return (
                        <div className='col-md-4' key={character.id}>
                             <Character  character={character}/>  
                        </div>
                    );
                })
                }
            </div>

            <NavPage page= {page} setPage= {setPage} />
        </div>
     
    )
}

export default CharacterList;

