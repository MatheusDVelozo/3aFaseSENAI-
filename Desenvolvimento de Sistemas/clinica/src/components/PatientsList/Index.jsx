import {useState, useEffect, use} from 'react'
import axios from 'axios'
import {FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router'

const PatientList = () => {

    const [patients, setPatients] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [ages, setAges] = useState({})

    const calculateAge = (birthdate) => {
        if(!birthdate) return "-"
        const today = new Date()
        const birthdateDate = new Date(birthdate)
        let age = today.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = today.getMonth() - birthdateDate.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--
        }

        return age
    }


  return (
    <div>PatientList</div>
  )
}

export default PatientList