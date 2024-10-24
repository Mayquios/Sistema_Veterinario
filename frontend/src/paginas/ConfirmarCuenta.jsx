import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios  from 'axios'
import Alarma  from '../components/Alarma';
//import clienteAxios  from '../config/axios';


const ConfirmarCuenta = () => {
    //volvemos la alerta reactivo
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false) // es por que no esta confirmada
    const [cargando, setCargando] = useState(true)

    const [alarma, setAlarma] = useState({})
    //usaremos useEffect para q ejecute un codigo automaticamente
    const params = useParams()
        const { id } = params;
        useEffect(()=> {
            //llamamos a la api para confirmar la cuenta
            const ConfirmarCuenta = async () => {
                try {
                    const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`
                    const { data } = await axios(url)
                    //confirmamos correctamente
                    setCuentaConfirmada(true)
                    setAlarma({
                        msg: data.msg
                    })

                } catch (error) {
                    setAlarma({
                        msg: error.response.data.msg,
                        error:true
                    })
                }
                setCargando(false)
            }
            ConfirmarCuenta(); 
        },[])
    return (
        <>
            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
                <div>
                    <h1 className="text-indigo-600 font-black text-6xl">
                        Confirma tu Cuenta y Comienza Administrar  {""}
                    <span className="text-black">tus pacientes</span></h1>
                </div>
                <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                    {!cargando && <Alarma
                        alarma={alarma}
                    />}
                    {cuentaConfirmada && (
                        <Link
                            className='block text-center my-5 text-gray-500'
                            to="/">Inicia Sesion</Link>
                    )}
                </div>
            </main>
        </>
    )
}

export default ConfirmarCuenta
