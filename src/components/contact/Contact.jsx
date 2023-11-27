import React from 'react';
import './contact.css';
import { BsPersonSquare } from "react-icons/bs";

const Contact = () => {
    return (
        <> 
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='row mt-5'>
                        <h1 className='text-center text-warning'>Fundadores</h1>
                    </div>
                    <div className='row justify-content-center fs-1'>
                        <div className="card col-md-2 col-sm-6 bg-transparent border border-0">
                            <div className="card-body text-center">
                                <h1 className="card-title text-white"><BsPersonSquare /></h1>
                                <p className="card-text text-warning">Andres</p>
                            </div>
                        </div>
                        <div className="card col-md-2 col-sm-6 bg-transparent border border-0">
                            <div className="card-body text-center">
                                <h1 className="card-title text-white"><BsPersonSquare /></h1>
                                <p className="card-text text-warning">Franco</p>
                            </div>
                        </div>
                        <div className="card col-md-2 col-sm-6 bg-transparent border border-0">
                            <div className="card-body text-center">
                                <h1 className="card-title text-white"><BsPersonSquare /></h1>
                                <p className="card-text text-warning" >Joel</p>
                            </div>
                        </div>
                        <div className="card col-md-2 col-sm-6 bg-transparent border border-0">
                            <div className="card-body text-center">
                                <h1 className="card-title text-white"><BsPersonSquare /></h1>
                                <p className="card-text text-warning">Lautaro</p>
                            </div>
                        </div>
                        <div className="card col-md-2 col-sm-6 bg-transparent border border-0">
                            <div className="card-body text-center">
                                <h1 className="card-title text-white"><BsPersonSquare /></h1>
                                <p className="card-text text-warning">Luciano</p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <h2 className='text-center text-warning fs-1'>Contacto</h2>
                    </div>
                    <div className='row justify-content-center' >
                        <form className='bg-black m-5 border border-warning'>
                            <div className="row justify-content-center text-center text-white">
                                <div className='col-4 p-2'>
                                    <label>Nombre</label>
                                </div>
                                <div className='col-4 p-2'>
                                    <label>Apellido</label>
                                </div>
                                <div className='col-4 p-2'>
                                    <label>Correo</label>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-4 p-2'>
                                    <input type="text" className="form-control bg-transparent border border-warning text-white" id="exampleInputPassword1"></input>
                                </div>
                                <div className='col-4 p-2'>
                                    <input type="text" className="form-control bg-transparent border border-warning text-white" id="exampleInputPassword1"></input>
                                </div>
                                <div className='col-4 p-2 '>
                                    <input type="email" className="form-control bg-transparent border border-warning text-white" id="exampleInputPassword1"></input>
                                </div>
                            </div>
                            <div className='row justify-content-center mt-4'>
                                <div className='col-3'>
                                    <label className='text-white text-center fs-4'>Deje su comentario aqui</label>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-6 m-5'>
                                    <div class="form-floating">
                                        <textarea className="form-control bg-transparent border border-warning text-white p-5" placeholder="Deje su comentario aqui" id="floatingTextarea2" style={{height: '20rem'}}></textarea>
                                    </div>
                                </div>
                            </div>  
                            <div className='row justify-content-end'>
                                <div className='col-3'>
                                    <button type="submit" className="btn btn-warning border border-0 rounded-4 rounded-4 mb-3 ps-5 pe-5">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;