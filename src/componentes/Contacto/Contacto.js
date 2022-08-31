import React from 'react'
import Cstyles from './Contacto.css'

function Contacto() {
  return (
    <section className="container mt-20 bg-transparent" id="contacto">
            <h2 className='titulo'>Contactame</h2>

            <form className='contact-form row justify-content-center px-3 py-2'>
                        
                        <div className='form-field col-lg-12'>
                        <label htmlFor="nombre" className='label'>Nombre</label>
                        <input type="text" className="form-control" id="nombre"/>
                    
                        </div>

                        <div className='form-field col-lg-12'>
                        <label htmlFor="email" className='label'>Email</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                        
                        </div>

                        <div className='form-field col-lg-12'>
                        <label htmlFor="telefono" className='label'>Telefono</label>
                        <input type="text" className="form-control" id="telefono"/>
                        
                        </div>
                        
                        <div className='form-field col-lg-12'>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea className='form-control' rows="8" id="mensaje" name="mensaje"></textarea>
                        </div>

                       

                        <div className='form-field col-lg-12 text-center'>
                        <input type="submit" className="submit-btn" value="Enviar" />
                        </div>

                
            </form>
        
        </section>
  )
}

export default Contacto