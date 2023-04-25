import hexToRgba from 'hex-to-rgba';

import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"
const Equipo = (props) =>{

    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor,like}= props

    const estiloFondo={
        backgroundColor: hexToRgba(colorPrimario, 0.6),
    }

    const estiloTitulo={
        borderColor:colorPrimario
    }

    return <>{colaboradores.length> 0 && <section className="equipo" style={estiloFondo}>
        <input 
            type="color" 
            className="input-color" 
            value={colorPrimario} 
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)
            }}>
        </input>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) =><Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    id={id}
                    >
                </Colaborador>)
            }
        </div>
    </section>
    }</> 
}

export default Equipo;