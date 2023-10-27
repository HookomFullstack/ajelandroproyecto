import { useFormik } from "formik"
import { LayoutLogin } from "./LayoutLogin"
import { Link, useNavigate } from "react-router-dom/dist"
import { loginValidate } from "../../security/auth/loginValidate.mjs"
import { useState } from "react"
import { seed } from "../../../factory/seed.mjs"

const initialValues = { id: '', password: '' }

export const LoginPage = () => {
    
    const [errorInternal, setErrorInternal] = useState(null)
    const navigate = useNavigate()
    const {errors, handleBlur, handleChange, handleSubmit, touched, values:{id, password}, } = useFormik({
        initialValues,
        validate: values => loginValidate({values}),
        onSubmit: async({id, password}, {resetForm}) => {
                const existAuth = JSON.parse(localStorage.getItem('users'))

                if(existAuth) {
                    const verifyDuplicate = existAuth.filter((e) => e.id == id)
                    if(verifyDuplicate.length > 0 && verifyDuplicate[0]?.password == password) {
                        const dataUser = seed(1000)

                        localStorage.setItem('auth', JSON.stringify([{verifyDuplicate, dataUser}]))
                        return navigate('/dashboard')
                    }
                }

                setErrorInternal('Usuario invalido')
                setTimeout(() => {
                    setErrorInternal(null)
                }, 3000);
            return resetForm()
        }
    })
    return (
        <LayoutLogin>
                    <p className="text-[30px] font-semibold text-[#313436]">Iniciar sesión</p>
                <form onSubmit={handleSubmit} className="flex gap-4 my-5 flex-col">
                    {errorInternal && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errorInternal}</p>)}
                    {(errors.id && touched.id) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.id}</p>)}
                    {(errors.password && touched.password) && (<p className="bg-red-600 pl-4 text-white rounded-[3px] py-1">{errors.password}</p>)}
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
                            inputMode="numeric" 
                            placeholder="Introduce tu cédula"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Clave</label>
                        <input 
                            id="password" 
                            placeholder="Introduce tu clave"
                            type="password" 
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full border-[1px] border-[#C4CEDC] px-5 py-2 rounded-[5px]"
                        />
                    </div>
                    <button className="border-[1px] py-3 rounded-[5px] bg-[#4a57ca] text-white font-semibold" type="submit">Ingresar</button>
                </form>
                <p className="mt-5 text-center  opacity-60">¿No tienes una cuenta? <Link to={'/register'} >Registrate</Link></p>
        </LayoutLogin>
    )
}
