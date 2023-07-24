import React, { useState } from "react";

const MostrarTareaFragments = ({ tareas, handleEliminarTarea }) => {
    return (
        <>
            <div className="col-12">
                <ul className="list-group">
                    {
                        tareas.map(tarea => <li className="list-group-item" key={tarea.id}>{tarea.nombre}
                            <button type="button" class="btn btn-outline-danger btn-sm ms-2" onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
                        </li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default MostrarTareaFragments