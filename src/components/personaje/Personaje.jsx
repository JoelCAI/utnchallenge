import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
          setPersonajes(data.results || []);
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
          <p>Ingrese un personaje</p>
        ) : (
          <div className="card-container">
            {personajes.map((personaje) => (
              <Card key={personaje.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.image} />
                <Card.Body>
                  <Card.Title>{personaje.name}</Card.Title>
                  <Card.Text>
                    Species: {personaje.species}
                    <br />
                    Gender: {personaje.gender}
                    <br />
                    Status: {personaje.status}
                  </Card.Text>
                  <Button variant="primary" href={personaje.url}>
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
}

export default Personaje;