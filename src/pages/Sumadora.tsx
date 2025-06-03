import { IonButton, IonInput, IonTitle } from '@ionic/react'
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

        <IonButton onClick={buttonSumaHandler}>Sumar</IonButton>
        <span>
          <h2>Resultado: </h2>
          <p>{isNaN(suma) ? 'Introduce dos números' : suma}</p>
        </span>
      </div>
    </div>
  )
}
