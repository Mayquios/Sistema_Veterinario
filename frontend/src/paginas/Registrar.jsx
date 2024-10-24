import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alarma  from '../components/Alarma';
import axios  from 'axios';


const Registrar = () => { 
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')

    const [alarma, setAlarma] = useState({})


    //con esto estamos enviando datos  a la base de datos
    const handleSubmit = async e => {
        e.preventDefault();

        //aca verificamos q no esten los campos vacios del formulario para registrar
        if([nombre,  email, password, repetirPassword].includes('')){
            setAlarma({msg: 'Hay campos vacios',  error: true})

            return;
        }
        if(password !== repetirPassword){
            setAlarma({msg: 'la contraseña no coincide',  error: true})
            return
        }
        if(password <= 6){
            setAlarma({msg: 'contraseña debe tener mas de 6 caracteres',  error: true})
            return;
    }
    setAlarma({}) // esto vacia el formulario

    //crear el usuario en la api = agregar datos a la db desde front al back (fetchAPI, axios )
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/`
        await axios.post(url, {nombre, email, password})
        setAlarma({
            msg: 'Usuario creado con exito revisa tu email',
            error: false
        })

    } catch (error) {
        setAlarma({
            msg: error.response.data.msg,
        })
    }
}

const { msg } =  alarma;


    return (
        <>

            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
                <div>
                    <h1 className="text-indigo-600 font-black text-6xl">
                    Crea tu cuenta y Administra  {""}
                    <span className="text-black">tus pacientes</span></h1>
                </div>

                <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

                    {msg && <Alarma
                        alarma={alarma}
                    />}
                    <form
                        onSubmit={handleSubmit}
                    >

                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                            </label>
                            <input 
                            type="text"
                            placeholder="Tu Nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                            </label>
                            <input 
                            type="email"
                            placeholder="Email de Registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}    
                            />
                        </div>

                        <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Tu Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                        </div>

                        <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Repetir Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Repite tu Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                            value={repetirPassword}
                            onChange={(e) => setRepetirPassword(e.target.value)}      
                        />
                        </div>

                        <input type="submit"
                            value="Registrar"
                            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                        />
                    </form>

                    <nav className='mt-10 lg:flex lg:justify-between'>
                        <Link
                            className='block text-center my-5 text-gray-500'
                            to="/">Tienes una Cuenta?  Inicia Sesion</Link>
                        <Link
                            className='block text-center my-5 text-gray-500'
                            to="/olvide-password">Olvide mi Contraseña</Link>
                    </nav>

                </div>
            </main>
        </>
    )
}

export default Registrar
