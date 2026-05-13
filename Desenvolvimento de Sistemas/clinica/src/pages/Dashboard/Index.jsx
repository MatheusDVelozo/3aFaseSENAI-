import React from 'react'
import PatientsCounter from '../../components/counters/PatientsCounter/Index'
import AppointmentsCounter from '../../components/counters/AppointmentsCounter/Index'
import ExamsCounter from '../../components/counters/ExamsCounter/Index'

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-cyan-800 mb-6'>Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <PatientsCounter />
                <AppointmentsCounter />
                <ExamsCounter />

            </div>

            {/* Lista de pacientes */}
            <h2>Lista de pacientes</h2>
        </div>
    )
}

export default Dashboard