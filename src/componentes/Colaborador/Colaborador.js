import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
const Colaborador = (props) =>{
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like}= props
    const estilo= {
        backgroundColor:colorPrimario
    }
    return <div className="colaborador">
        <AiFillCloseCircle onClick={()=>eliminarColaborador(id)} className="eliminar"></AiFillCloseCircle>
        <div className="encabezado" style={estilo}>
            <img src={foto} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav?<AiFillHeart color="red" onClick={()=> like(id)}></AiFillHeart>:<AiOutlineHeart onClick={()=> like(id)}></AiOutlineHeart>}
        </div>
    </div>
}

export default Colaborador