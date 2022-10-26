import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

export default function AddTodo() {
  const [title, setTitle] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    //Se tiver alguma coisa no input ele vai fazer o AddDoc de adicionar no banco do Firebase
    if (title !== '') {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false
      })
      //Zera o campo para poder adicionar outros
      setTitle('')
    }
  }
  return (
    //Retorna depois que tiver um submit a função handleSubmit
    //O Button quando é pressionado já é um Submit
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Insira sua tarefa..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Adicionar</button>
      </div>
    </form>
  )
}
