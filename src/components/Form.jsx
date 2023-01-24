import React from 'react'
import Terms from './Terms'

const Form = () => {
    return (
        <div id="form">
            <form action="">
                <input type="text" id="name" placeholder="Nombre" required />
                <input type="text" id="lastname" placeholder="Apellido" required />
                <input type="email" id="email" placeholder="Dirección de correo electrónico" required />
                <input type="password" id="password" placeholder="Contraseña" required />
                <button type="submit">RECLAMA TU PRUEBA GRATUITA</button>
            </form>
            <Terms />
        </div>

    )
}

export default Form