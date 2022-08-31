import React from 'react'
import Smestilos from './Sobremi.css'

function Sobremi() {
  return (
    <section className="container-fluid m-25 p-10" id="sobre-mi">
            <div className='container p-2'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                   <h3>Sobre mi</h3>
                        <h2 className='text-uppercase'>Maria Sol Vassia</h2>
                        
                            <p> Soy Psicóloga Psicoanalista, egresada de la Universidad Nacional de Córdoba en Argentina. 
                            A lo largo de mis años de formación, me he nutrido de conocimientos brindados por el Psicoanálisis. Saberes que me han permitido entender a cada persona en su singularidad y comprender que un tratamiento se teje artesanalmente en cada caso, con cada quien, sin tiempos preestablecidos ni pasos a seguir. 
                            Trabajo presencial y virtualmente con niños, adolescentes y adultos. Desempeñándome también en centros que acompañan a sujetos en dificultad o con alguna discapacidad. 
                            <br/>  M.P. 12720
                            </p>
                            
                            <a href='/M.SolVassia-cv.pdf' download>
                                <button className='submit-btn'>Curriculum</button></a>
                            
                    </div>
                    <div className='d-none d-lg-block col-4'>
                    <img src="/thinking.png" className='img-fluid'  alt="Dominica"/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Sobremi;