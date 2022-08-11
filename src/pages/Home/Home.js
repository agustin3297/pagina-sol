import Hstyles from './Home.css'
import React, {useState} from 'react';

import Servicios from '../../componentes/Servicios/Servicios';
import Contacto from '../../componentes/Contacto/Contacto';
import Sobremi from '../../componentes/Sobre-mi/Sobremi';
import Obras from '../../componentes/Osociales/Obras';

import Modalsblog from '../../componentes/Modals-blog/Modalsblog';
import Model from '../../Model';

export default function Home(){
   
    const [model,setModel] = useState(false);
    const [tempData,setTempData] = useState([]);

    const getData = (img,title,desc,texto) =>{
        let tempData = [img,title,desc,texto];
        setTempData(item=>[1,...tempData])
        return setModel(true);
    }

    return (<>

<a href="https://wa.me/005493535624290?text=¡Estoy+interesado!" className="btn-wsp" target="_blank">
	    <i className="fa fa-whatsapp icono"></i>
	</a>
        <section className='container-fluid' id="banner">
            <h1>Home</h1>
        </section>

        <Sobremi/>
        <Servicios/>

        <Obras/>
        <Contacto/>

        <section className='py-4 py-lg-5 container' id='escritos'>
            <h2>Escritos</h2>
            <div className='row justify-content-center align-item-center'>

            {
                Modalsblog.cardData.map((item, index)=>{
                    return (
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img className="card-img-top" src="/thinking.png" alt="Card image cap"/>

                            <div className="card-body d-flex flex-column">
                                <h5 className='card-title'>{item.tittle}</h5>
                                <p className="card-text">{item.desc}</p>
                                <button className='btn btn-primary w-50 mt-auto align-self-end' onClick={()=>getData(item.imgSrc,item.tittle,item.texto) }>Leer mas</button>
    
                            </div>
                        </div>
                    </div>
                    )
                })
            }

                
            </div>
        </section>
        
        {
        model === true ? <Model img={tempData[1]} title={tempData[2]} texto={tempData[3]}
        hide={()=> setModel(false)}  />: ''
}
        </>)
}