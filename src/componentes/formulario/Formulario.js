import "./Formulario.css";
import {v4 as uuid} from 'uuid'
import Campo from "../Campo/Campo.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton.js";
import { useState } from "react";
const Formulario = (props) => {
  const Envio = (event) => {
    event.preventDefault();
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
      id: uuid()
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (event) => {
    event.preventDefault();
    crearEquipo({titulo, colorPrimario:color})
  }

  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");
  const { registrarColaborador, crearEquipo } = props;

  return (
    <section className="formulario">
      <form onSubmit={Envio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        ></Campo>
        <Campo
          titulo="Puesto"
          placeholder="puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        ></Campo>
        <Campo
          titulo="Foto"
          placeholder="enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        ></Campo>
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Titulo"
          placeholder="ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        ></Campo>
        <Campo
          titulo="Color Primario"
          placeholder="ingresar el color primario"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        ></Campo>
        <Boton> Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
