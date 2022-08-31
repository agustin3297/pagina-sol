import Hstyles from './Home.css';

import Servicios from '../../componentes/Servicios/Servicios';
import Contacto from '../../componentes/Contacto/Contacto';
import Sobremi from '../../componentes/Sobre-mi/Sobremi';
import Obras from '../../componentes/Osociales/Obras';



export default function Home(){

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


        </>)
}