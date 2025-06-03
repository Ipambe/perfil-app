import { IonInput, IonTitle } from '@ionic/react'
import { useState } from 'react'

export const Tabla = () => {
  const [num, setNum] = useState(0)

  const tablaMultiplicar = Array.from({ length: 13 }, (_, i) => (i + 1) * num)

  return (
    <div className='p-4'>
      <h1>Sumadora simple</h1>
      <div className='flex flex-col gap-4 mb-6'>
        <input
          className='bg-stone-800 rounded-lg p-4 focus:outline-none ring-2 focus:ring-blue-500 ring-transparent transition'
          type='number'
          placeholder='Número para la tabla de multiplicar'
          onChange={(e) => setNum(parseInt(e.target.value, 10))}
        />
      </div>

      <div>
        {num > 0 && (
          <>
            <h2>Tabla de multiplicar del {num}:</h2>
            <ul>
              {tablaMultiplicar.map((resultado, index) => (
                <li key={index}>
                  {num} x {index + 1} = {resultado}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
