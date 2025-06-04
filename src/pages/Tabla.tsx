import { useState } from 'react'
import { Header } from '../components/Header'

export const Tabla = () => {
  const [num, setNum] = useState(0)

  const tablaMultiplicar = Array.from({ length: 13 }, (_, i) => (i + 1) * num)

  return (
    <div>
      <Header title='Tabla de multiplicar' />
      <div className='p-4'>
        <div className='flex flex-col gap-4 mb-6'>
          <input
            className='bg-stone-800 rounded-lg p-4 focus:outline-none ring-2 focus:ring-blue-500 ring-transparent transition'
            type='number'
            placeholder='Número para la tabla de multiplicar'
            value={num > 0 ? num : ''}
            onChange={(e) => setNum(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4 text-blue-400'>
            {num > 0
              ? `Tabla de multiplicar del ${num}:`
              : 'Introduce un número mayor a 0 para ver su tabla.'}
          </h2>
          {num > 0 && (
            <ul className='bg-stone-900 rounded-lg shadow-md divide-y divide-stone-700'>
              {tablaMultiplicar.map((resultado, index) => (
                <li
                  key={index}
                  className='py-2 px-4 hover:bg-stone-800 transition flex items-center'
                >
                  <span className='font-mono text-stone-200'>
                    {num} x {index + 1} ={' '}
                    <strong className='text-green-400'>{resultado}</strong>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
