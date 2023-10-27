import React, { useState } from 'react'
import { LayoutLogin } from './LayoutLogin'
import { Link, useNavigate } from 'react-router-dom/dist'
import { useFormik } from 'formik'
import axios from 'axios'
import { registerValidate } from '../../security/auth/registerValidate.mjs'

const initialValues = { id: '', name: '', lastName: '', email: '', phone:'', password: '', gender: 'Hombre' }


export const RegisterPage = () => {
    
    const [errorInternal, setErrorInternal] = useState(null)
    const navigate = useNavigate()
    
    const viewError = () => {
        setErrorInternal('Ya existe el usuario')
        setTimeout(() => {
            setErrorInternal(null)
        }, 3000);
    }

    const {errors, handleBlur, handleChange, handleSubmit, touched, values:{id, password, lastName, email, phone, name, gender} } = useFormik({
        initialValues,
        validate: values => registerValidate({values}),
        onSubmit: async({id, password, lastName, email, phone, name, gender}, {resetForm}) => {
            const existAuth = JSON.parse(localStorage.getItem('auth'))

                if(existAuth) {
                    const verifyDuplicate = existAuth.filter((e) => e.id == id)
                    if(verifyDuplicate.length > 0) return viewError()
                    existAuth.push({id, password, lastName, email, phone, name, gender})
                    localStorage.setItem('users', JSON.stringify(existAuth))
                    return navigate('/')
                }
                localStorage.setItem('users', JSON.stringify([{id, password, lastName, email, phone, name, gender}]))
                return navigate('/')

        }
    })

    return (
    <LayoutLogin>
        <p className="text-[30px] font-semibold text-[#313436]">Registrate</p>
            <form onSubmit={handleSubmit} className="flex gap-4 my-5 flex-col">
                {errorInternal && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errorInternal}</p>)}
                
                {(errors.name && touched.name) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.name}</p>)}
                {(errors.lastName && touched.lastName) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.lastName}</p>)}
                {(errors.email && touched.email) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.email}</p>)}
                {(errors.phone && touched.password) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.phone}</p>)}
                {(errors.id && touched.id) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.id}</p>)}
                {(errors.password && touched.password) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.password}</p>)}

                <div className='flex gap-3 items-center'>
                    <div className="flex flex-col w-full gap-2">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            id="nombre"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            type="text" 
                            name="name"
                            value={name}
                            required={true} 
                            inputMode="text" 
                            placeholder="Introduce tu nombre"
                        />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="lastName">Apellido</label>
                        <input 
                            id="lastName" 
                            placeholder="Introduce tu apellido"
                            type="lastName" 
                            value={lastName}
                            required={true} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                        />
                    </div>
                </div>

                <div className="flex w-full gap-3">
                    <div className='flex flex-col w-full gap-2'>

                        <label htmlFor="email">Correo</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            type="email"
                            required={true} 
                            name="email"
                            value={email}
                            inputMode="email" 
                            placeholder="Introduce tu correo"
                        />
                    </div>
                    
                    <div className='flex flex-col w-full gap-2'>

                        <label htmlFor="phone">Telefono</label>
                        <input 
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                            id="phone"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            type="tel" 
                            name="phone"
                            value={phone}
                            required={true}
                            inputMode="tel" 
                            placeholder="Introduce tu telefono"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="id">Cédula</label>
                    <input 
                        className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                        id="id"
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="number" 
                        name="id"
                        value={id}
                        required={true}
                        inputMode="numeric" 
                        placeholder="Introduce tu cédula"
                    />
                </div>
                <div>
                    <label htmlFor="gender">Genero</label>
                    <select 
                        className='w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]'
                        name="gender" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="gender" 
                        value={gender}
                        defaultValue={'hombre'}
                    >
                        <option value={'hombre'}>Hombre</option>
                        <option value={'mujer'}>Mujer</option>
                    </select>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        type="password" 
                        name="password"
                        value={password}
                        required={true}     
                        inputMode="text" 
                        placeholder="Introduce tu contraseña"
                    />
                </div>

                <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Registrarse</button>
            </form>
        <p className="mt-5 text-center  opacity-60">Ya tienes una cuenta? <Link to={'/'} >Inicia sesión</Link></p>
    </LayoutLogin>
  )
}
