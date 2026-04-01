import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const Autores = () => {
  const [autores, setAutores] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/autores")
      .then(res => res.json())
      .then(data => {
        setAutores(data)
      })
  }, [])

  return (
    <>

      <div className='flex gap-2'>
        {
          autores.map(autor => (
            <div key={autor.id} className='card'>
              <img src={autor.foto} alt={autor.title} />
              <h2>{autor.nome}</h2>
              <h3>{autor.descricao}</h3>
              {/* <a href='#'>Leia Mais</a> */}
              <Link to={`/autor/${autor.id}`} className='text-white bg-blue-500 hover:bg-blue-700'>
                Ver mais
              </Link>
            </div>
          )
          )
        }
      </div>

    </>
  )
}

export default Autores;
