import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaFileMedical, FaHospitalUser } from 'react-icons/fa'
import { PiExamFill } from "react-icons/pi";

const ExamsCounter = () => {

    const [ExamsCounter, setExamsCounter] = useState(0)

    useEffect(() => {
        const fetchExamsCounter = async () => {
            try {
                const response = await axios.get('http://localhost:3000/exams')
                setExamsCounter(response.data.length)
            } catch (error) {
                console.error("Erro ao obter dados dos exames:", error);
            }
        }
        fetchExamsCounter()
    }, [])

    return (
        <div className='bg-white shadow rounded-lg p-6 flex flex-col items-center w-60 flex-items-center'>
            <h2 className='text-xl font-bold flex-items-center gap-2'>
                <FaFileMedical  className='text-blue-600' />
                {ExamsCounter}                
            </h2>
            <span>Exames</span>
            
        </div>
    )
}

export default ExamsCounter