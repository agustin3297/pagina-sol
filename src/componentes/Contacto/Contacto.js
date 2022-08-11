import React from 'react'
import Cstyles from './Contacto.css'

function Contacto() {
  return (
    <section className="container mt-20 bg-transparent" id="contacto">
            <h2 className='titulo'>Contactame</h2>

            <form className='contact-form row justify-content-center px-3 py-2'>
                        
                        <div className='form-field col-lg-6'>
                        <input type="text" className="input-text" id="nombre"/>
                        <label htmlFor="nombre" className='label'>Nombre</label>
                        </div>

                        <div className='form-field col-lg-6'>
                        <input type="text" className="input-text" id="Apellido"/>
                        <label htmlFor="apellido" className='label'>Apellido</label>
                        </div>

                        <div className='form-field col-lg-12'>
                        <input type="text" className="input-text" id="email" aria-describedby="emailHelp" />
                        <label htmlFor="email" className='label'>Email</label>
                        </div>

                        <div className='form-field col-lg-12'>
                        <input type="text" className="input-text" id="telefono"/>
                        <label htmlFor="telefono" className='label'>Telefono</label>
                        </div>
                        
                        <div className='form-field col-lg-12'>
                        <input type="text" className="input-text" id="mensaje"/>
                        <label htmlFor="mensaje" className='label'>Mensaje</label>
                        </div>

                       

                        <div className='form-field col-lg-12 text-center'>
                        <input type="submit" className="submit-btn" value="Enviar" />
                        </div>

                
            </form>
        
        </section>
  )
}

export default Contacto