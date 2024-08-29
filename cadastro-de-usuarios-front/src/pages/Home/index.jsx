
import './style.css'

function index() {

  return (
    <>
      <div className='container'>

        <form className='form'>
          <h1>Cadastro de Usuáros</h1>
          <input className='name' type='text' placeholder='Digite o nome' required/>
          <input className='idade' type='number' placeholder='Digite a idade' required/>
          <input className='email' type="text" placeholder='Digite o email' required/>
        </form>
        <button type='submit'>Enviar</button>
      </div>

    </>
  )
}

export default index
