import React from "react";
import Sstyles from './Servicios.css'


function Servicios(){
  return (
    <>
      <section className="container-fluid p-3" id="servicios">

<h1>Servicios</h1>
<hr className='mx-auto mb-5 w-25'/>

<div className='row p-2 mb-5'>

    <article className='col-lg-4 col-md-12'>

       <div className='card shadow h-100'>
          <img src="/thinking.png" alt='' className='card-img-top'/>

            <div className='card-body h-100'>
                    <h3>Orientación vocacional</h3>
                    <hr className='mx-auto w-75'/>
                    <p>Nuestra vida se define en base a las elecciones que tomamos..Y toda elección, implica renuncias: a personas, proyectos, lugares e incluso a la persona que podríamos haber sido. Las renuncias no se logran sin esfuerzo, se convierten en pérdidas a elaborar y heridas a sanar. No es fácil renunciar a nuestra omnipotencia y aceptar que no podemos tenerlo todo. 
                    La elección es necesaria para avanzar, de lo contrario uno permanece en un lugar indefinido, escindido entre dos o más posibilidades. ¿Cuál es la opción correcta? No existe. Pero si podemos acercarnos a la elección adecuada, aquella que resuena con nuestro deseo. 
                    </p>
            </div>   
        </div>


    </article>

    <article className='col-lg-4 col-md-12'>

       <div className='card shadow h-100'>
          <img src="/thinking.png" alt='' className='card-img-top'/>

            <div className='card-body'>
                    <h3>Piscoterapia</h3>
                    <hr className='mx-auto w-75'/>
                    <p>El escuchar no es lo mismo que oír. Oír es un fenómeno físico, mientras que escuchar es una práctica psicológica, requiere de algo más: atención, sostén y deseo. El escuchar no es un acto pasivo, invita a leer entre líneas, deducir de lo que se dice y de lo que no se dice. 
La psicoterapia es eso, escucha del decir y del no decir. Escucha de dolor, de ansiedades, de fantasías, miedos y proyectos; escucha que busca devolver una pregunta que haga al paciente replantearse algo de aquello que dice.
</p>
            </div>   
        </div>


    </article>

    <article className='col-lg-4 col-md-12'>

       <div className='card shadow h-100'>
          <img src='/thinking.png' alt='' className='card-img-top'/>

            <div className='card-body'>
                    <h3>Aptos psicológicos</h3>
                    <hr className='mx-auto w-75'/>
                    <p> El escuchar no es lo mismo que oír. Oír es un fenómeno físico, mientras que escuchar es una práctica psicológica, requiere de algo más: atención, sostén y deseo. El escuchar no es un acto pasivo, invita a leer entre líneas, deducir de lo que se dice y de lo que no se dice. 
La psicoterapia es eso, escucha del decir y del no decir. Escucha de dolor, de ansiedades, de fantasías, miedos y proyectos; escucha que busca devolver una pregunta que haga al paciente replantearse algo de aquello que dice.
</p>
            </div>   
        </div>


    </article>


  
</div>
</section>
    </>
    
  );
}

export default Servicios;