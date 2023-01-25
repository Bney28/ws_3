import React from 'react'
import Terms from './Terms'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const enviarForm = (data) => {
        console.log(data)
        resetField("nombre")
        resetField("apellido")
        resetField("email")
        resetField("contrasena")
    };

    return (
        <div id="form">
            <form onSubmit={handleSubmit(enviarForm)}   >
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <span className='error'> <i className="fa-solid fa-circle-exclamation"></i> Por favor escribe tu nombre</span>}

                <input type="text" placeholder="Apellido"{...register("apellido", { required: true })} />
                {errors.apellido && <span className='error'> <i className="fa-solid fa-circle-exclamation"></i> Por favor escribe tu apellido</span>}

                <input type="email" placeholder="Dirección de correo electrónico" {...register("email", { required: true })} />
                {errors.email && <span className='error'> <i className="fa-solid fa-circle-exclamation"></i> Por favor escribe tu correo</span >}

                <input type="password" placeholder="Contraseña" {...register("contrasena", { required: true })} />
                {errors.contrasena && <span className='error'> <i className="fa-solid fa-circle-exclamation"></i> Por favor escribe tu contraseña</span >}

                <button type="submit">RECLAMA TU PRUEBA GRATUITA</button>

            </form >
            <Terms />
        </div >

    )
}

export default Form