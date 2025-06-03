import { useState } from 'react'
import { numeroALetras } from '../utils/numeroALetra'
import { Header } from '../components/Header'

export const Traductor = () => {
  const [num, setNum] = useState(0)

  const traduccion = numeroALetras(num)

  return (
    <div>
      <Header title='Traductor de números a letras' />
      <div className='p-4'>
        <div className='flex flex-col gap-4 mb-6'>
          <input
            className='bg-stone-800 rounded-lg p-4 focus:outline-none ring-2 focus:ring-blue-500 ring-transparent transition'
            type='number'
            placeholder='Primer número'
            onChange={(e) => setNum(parseInt(e.target.value, 10))}
          />
        </div>
        <span>
          <h2>Traducción:</h2>
          <p>{traduccion}</p>
        </span>
      </div>
    </div>
  )
}
