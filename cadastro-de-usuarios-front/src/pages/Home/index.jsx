
import './style.css'

function index() {

  return (
    <>
      <div className='container'>

        <form>
          <h1>Cadastro de Usuáros</h1>
          <input className='name' type='text' placeholder='Digite o nome' />
          <input className='idade' type='number' placeholder='Digite a idade' />
          <input className='email' type="text" placeholder='Digite o email' />
        </form>
        <button type='button'>Enviar</button>
      </div>

    </>
  )
}

export default index
