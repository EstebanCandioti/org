import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front-End",
    foto:"",
    nombre:"Esteban",
    puesto:"Desarrollador",
    fav: true,
  }])

  const [equipos, actualizarEquipos]= useState(
    [
      {
        id: uuid(),
        titulo:  "Programacion",
        colorSecundario:"#D9F7E9",
        colorPrimario:"#57C278 "
      },
      {
        id: uuid(),
        titulo:  "Front-End",
        colorSecundario:  "#E8F8FF",
        colorPrimario:"#82CFFA"
      },
      {
        id: uuid(),
        titulo:  "Data Science",
        colorSecundario:"#F0F8E2",
        colorPrimario:"#A6D157"
      },
      {
        id: uuid(),
         titulo:  "Devops",
         colorSecundario:"#FDE7E8",
         colorPrimario:"#E06B69"
      },
      {
        id: uuid(),
        titulo:  "UX y Diseño",
        colorSecundario:"#FAE9F5",
        colorPrimario:"#DB6EBF"
      },
      {
        id: uuid(),
        titulo:  "Movil",
        colorSecundario:"#FFF5D9",
        colorPrimario:"#FFBA05"
      },
      {
        id: uuid(),
        titulo:  "Innovación y  Gestión",
        colorSecundario:"#FFEEDF",
        colorPrimario:"#FF8A29"
      }
  ])
  
  const like = (id)=>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  const eliminarColaborador= (id) =>{
    const nuevosColaboradores= colaboradores.filter((colaborador)=>colaborador.id!=id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const registrarColaborador = (colaborador) =>{
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const actualizarColor=(color, id)=>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color    
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo=(nuevoEquipo)=>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  return (
    <div>        
    <Header></Header>
    {
    mostrarFormulario?<Formulario 
      equipos={equipos.map((equipos)=> equipos.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
    ></Formulario>:<></>
    }
    <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    {
      equipos.map( (equipo) =>{
        return <Equipo 
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo=== equipo.titulo)}
          eliminarColaborador= {eliminarColaborador}
          actualizarColor= {actualizarColor}
          like={like}
          >
        </Equipo>
      })
    }
    <Footer></Footer>
    </div>
  );
}

export default App;
