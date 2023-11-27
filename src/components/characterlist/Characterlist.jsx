import React from 'react';
import './characterlist.css';
import { useState,useEffect } from 'react';
import Character from '../character/Character';


function NavPage(props) {
    return (
        <div className='d-flex justify-content-between align-items-center m-4'>
            <button className='btn btn-warning btn-md p-2.5 border border-black rounded-4 shadow-lg fs-5'
            onClick={()=> props.page == 1 ? props.setPage(props.page) : props.setPage(props.page -1)}
            >
            Page {props.page - 1}
            </button>
            <p className='m-3 fs-2 fw-bold text-warning'>Page: {props.page}</p>
            <button className='btn btn-warning btn-md p-2.5 border border-black rounded-4 shadow-lg fs-5'
            onClick={()=> props.setPage(props.page +1)}
            >
            Page {props.page + 1}
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
                        <div className='col-lg-4 col-md-6 col-sm-6' key={character.id}>
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

