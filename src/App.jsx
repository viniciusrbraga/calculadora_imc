import { useState } from 'react'
import Calculo from "./components/Calculo"

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  return (
    <>
      <div className="titulo">
        <h1>Calculadora de IMC</h1>
      </div>

      <div className="campos">
        <input type="number" onChange={(e) => setAltura(e.target.value)} placeholder='Informe sua altura (em metros)' />
        <input type="number" onChange={(e) => setPeso(e.target.value)} placeholder='Informe seu peso (em quilos)' />
      </div>

      <Calculo altura={altura} peso={peso} />
    </>
  )
}

export default App