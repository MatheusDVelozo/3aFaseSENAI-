import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router'

const AutorDetail = () => {

  const { id } = useParams()
  const [autor, setAutor] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/autores/${id}`)
      .then(res => res.json())
      .then(data => setAutor(data))
  }, [id])

  if (!autor) return <div>Carregando...</div>

  return (
    <div>
      <h1>{autor.nome}</h1>
      <img src={autor.foto} alt={autor.nome} />
      <p>{autor.biografia}</p>
      <p>Especialidade: {autor.especialidade}</p>
      <p>Cidade: {autor.cidade}</p>
    </div>
  )
}

export default AutorDetail;
