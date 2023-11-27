import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./personaje.css"

const Personaje = () => {
  const [personajes, setPersonajes] = useState([]);
  const nombrePersonaje = useRef();

  const pedirPersonajes = async () => {
    const personajeAbuscar = nombrePersonaje.current.value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${personajeAbuscar}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.results.length > 0) {
          setPersonajes(data.results);
        } else {
          setPersonajes([]);
        }
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
      });
  };

  return (
    <div className="contenido container-fluid">
      <h1 className='text-warning'>BUSQUE SU PERSONAJE</h1>
      <div inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              ref={nombrePersonaje}
              type="text"
              placeholder="Ingrese el nombre"
              className=" mr-sm-2 border border-warning pe-4 ps-4"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='bg-warning border border-0 text-black' onClick={pedirPersonajes}>
              Buscar...
            </Button>
          </Col>
        </Row>
      </div>
      {personajes.length === 0 ? (
        <p className="espacio-blanco text-warning">Ingrese un personaje</p>
      ) : (
        <div className="card-container personajes">
          {personajes.map((personaje) => (
            <div className='card m-2 bg-transparent border border-0 shadow-lg' style={{ height: '24rem'}}>
              <div className='card-body'>
                <div className='card-title p-2 '>
                  <h2 className='fs-3 text-white text-center'>{personaje.name}</h2>
                </div>
                <div className='card-img text-center'>
                  <img className='rounded-5 img-fluid' src={personaje.image} alt={personaje.nam} style={{width: '14rem', height: '14rem'}}/>
                </div>
                <div className='card-text'>
                  <p className='m-2 text-warning fs-5 text-center'>{personaje.origin.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Personaje;