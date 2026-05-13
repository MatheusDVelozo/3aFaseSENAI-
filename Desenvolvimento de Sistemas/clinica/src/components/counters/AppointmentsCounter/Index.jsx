import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaFileMedicalAlt, FaStethoscope } from 'react-icons/fa'

const AppointmentsCounter = () => {

    const [AppointmentsCounter, setAppointmentsCounter] = useState(0)

    useEffect(() => {
        const fetchAppointmentsCounter = async () => {
            try {
                const response = await axios.get('http://localhost:3000/consults')
                setAppointmentsCounter(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados das consultas:", error);
            }
        }
        fetchAppointmentsCounter()
    }, [])

    return (
        <div className='bg-white shadow rounded-lg p-6 flex flex-col items-center w-60'>
            <h2 className='text-xl font-bold flex-items-center gap-2'>
                <FaStethoscope  className='text-blue-600' />
                {AppointmentsCounter}
            </h2>
            <span>Consultas</span>
        </div>
    )
}

export default AppointmentsCounter