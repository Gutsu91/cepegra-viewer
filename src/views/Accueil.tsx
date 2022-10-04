import React, {useState} from 'react'

const Accueil = () => {

  /* ----------- init ----------- */
  const [user, setUser] = useState([
    { name: 'JoliPseudo', image: ''}
  ])

  const [pseudalInput, setPseudalInput] = useState<string>('')

  /* ---------- react ----------- */
  const connect = (ev: React.FormEvent) => {
    ev.preventDefault()
    setPseudalInput('')
    console.log('connection')
  }



  /* ---------- render ---------- */
  return (
    <section className="flex flex-col justify-between h-screen">
      <button className="btn btn-block py-2 rounded-none btn-primary"><i className="fa-sharp fa-solid fa-download px-4"></i> Installer l'application</button>
      <h1 className="text-2xl font-bold text-center">je suis un logoooo lol</h1>
    <section className="flex flex-col my-0 mx-auto w-4/5">
      <button className="btn my-4">Scanner QR Code</button>
      

<div className="flex flex-col w-full border-opacity-50">
  <div className="divider">Se connecter</div>
</div>
      <form className="flex" onSubmit={connect}>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={pseudalInput}/>
        <button className="btn" role="submit" >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </form>
    </section>
    <footer className="flex justify-around py-6">
      <img src="./assets/logo-cepegra.png" alt="Logo du Cepegra" width="50" className="w-3/12"/>
      <img src="./assets/logo-forem.png" alt="Logo du Forem" className="w-3/12"/>
    </footer>
    </section>
  )
}

export default Accueil