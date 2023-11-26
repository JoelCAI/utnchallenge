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
    <div className="contenido">
      <h1>BUSQUE SU PERSONAJE</h1>
      <div inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              ref={nombrePersonaje}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={pedirPersonajes}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
      {personajes.length === 0 ? (
        <p className="espacio-blanco">Ingrese un personaje</p>
      ) : (
        <div className="card-container personajes">
          {personajes.map((personaje) => (
            <div className='text-center p-4'>
              <h2 className='fs-5'>{personaje.name}</h2>
              <img className='rounded-5' src={personaje.image} alt={personaje.name} />
              <p className='m-2 text-primary fs-2'>{personaje.origin.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Personaje;