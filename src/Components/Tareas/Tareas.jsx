import React, { useState } from "react";
import AgregarTareaFragments from "./fragments/AgregarTareaFragments"
import MostrarTareaFragments from "./fragments/MostrarTareaFragments"

const listaEjemplo = [
    {
        id : 1,
        nombre : "Alimentar a los leones"
    },
    {
        id : 2,
        nombre : "Jugar con las quimeras"
    },
    {
        id : 3,
        nombre : "Mimir"
    }
]

// view

const Tareas = () => {
    const [tareas, setTareas] = useState(listaEjemplo)
    const [nombreTarea, setNombreTarea] = useState ('')

    const handleModificarTarea = (evento) => {
        //lo que se escribe se ve reflejado en el evento.target.value
        setNombreTarea(evento.target.value)
    }
    
    const handleBotonAgregarTarea = (evento) => {
        if (nombreTarea == ""){
            alert("Debes escribir uuna tarea!!")
        } else{
            //creacion de un nuevo objeto tarea
            let tareaNueva = {
                id : tareas.length +1,
                nombre : nombreTarea
            }
            //agregacion del objeto creado a la lista tareas uniendolo junto al resto de los elementos
            setTareas([...tareas, tareaNueva])
            //reseteo del campo nombre tarea
            setNombreTarea("")
        }
    }
    const handleEliminarTarea = (id) => {
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }

    return (
    <div>
        <div className="row">
            <div className="col-12">
                <h1>Tareas</h1>
            </div>
            <AgregarTareaFragments
                nombreTarea={nombreTarea}
                handleModificarTarea={handleModificarTarea}
                handleBotonAgregarTarea={handleBotonAgregarTarea}
            />
            <div className="col-12 mt-4">
                <h2>Lista de tareas</h2>
            </div>
            <MostrarTareaFragments
            tareas={tareas}
            handleEliminarTarea={handleEliminarTarea}
            />
        </div>
    </div>
    )
}
export default Tareas