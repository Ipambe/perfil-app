import { useState } from 'react'
import { Header } from '../components/Header'

export const Sumadora = () => {
  const [suma, setSuma] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const buttonSumaHandler = () => {
    setSuma(num1 + num2)
  }

  return (
    <div>
      <Header title='Sumadora' />
      <div className='p-4'>
        <div className='flex flex-col gap-4 mb-6'>
          <input
            className='bg-stone-800 rounded-lg p-4 focus:outline-none ring-2 focus:ring-blue-500 ring-transparent transition'
            type='number'
            placeholder='Primer número'
            onChange={(e) => setNum1(parseInt(e.target.value, 10))}
          />
          <input
            className='bg-stone-800 rounded-lg p-4 focus:outline-none ring-2 focus:ring-blue-500 ring-transparent transition'
            type='number'
            placeholder='Segundo número'
            onChange={(e) => setNum2(parseInt(e.target.value, 10))}
          />
        </div>
        <button
          onClick={buttonSumaHandler}
          className='bg-blue-500 hover:!bg-blue-600 !text-white !font-semibold !py-2 !px-6 !rounded-lg !shadow !transition !mb-4'
        >
          Sumar
        </button>
        <div className='bg-stone-900 rounded-lg shadow-md p-6 mt-4'>
          <h2 className='text-lg font-semibold text-blue-400 mb-2'>
            Resultado:
          </h2>
          <p className='text-green-400 font-mono text-xl'>
            {isNaN(suma) ? 'Introduce dos números' : suma}
          </p>
        </div>
      </div>
    </div>
  )
}
