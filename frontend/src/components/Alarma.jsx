
const Alarma = ({alarma}) =>{
    return (
        <div className={`${alarma.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600' } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
        {alarma.msg}
        </div>
    )
}

export default Alarma

