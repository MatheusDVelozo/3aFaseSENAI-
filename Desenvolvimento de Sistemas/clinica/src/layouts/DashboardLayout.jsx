import { Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import SideMenu from '../components/SideMenu/Index'

const DashboardLayout = () => {
    const { user, logout } = useAuth()


    return (
        <div className='flex min-h-screen bg-gray-100'>
            {/* barra lateral menu */}
            <SideMenu />

            {/* conteudo principal */}
            <main className='flex-1 flex flex-col'>
                <header className='flex justify-center items-center bg-white'>
                    <h1 className='text-xl font-bold text-cyan-800'>Painel
                    </h1>
                    {
                        user && (
                            <div className='flex items-center gap-4'>
                                <span className='text-grey delay-700'> Bem Vindo
                                </span>
                                <button
                                    onClick={logout}
                                    className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                                >
                                    Sair
                                </button>
                            </div>
                        )
                    }
                </header>

                {/*paginas internas do dashboard*/}
                <section className='flex-1 p-6 overflow-y-auto'>
                    <Outlet />
                </section>
            </main>

        </div>
    )
}

export default DashboardLayout