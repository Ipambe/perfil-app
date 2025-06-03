import { IonButton, IonInput, IonTitle } from '@ionic/react'
import { useState } from 'react'

export const Sumadora = () => {
  const [suma, setSuma] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const buttonSumaHandler = () => {
    setSuma(num1 + num2)
  }

  return (
    <>
      <IonTitle>
        <h1>Sumadora simple</h1>
      </IonTitle>
      <IonInput
        onIonChange={(e) => setNum1(parseInt(e.detail.value!, 10))}
        labelPlacement='floating'
        label='Primer número'
        type='number'
      ></IonInput>
      <IonInput
        onIonChange={(e) => setNum2(parseInt(e.detail.value!, 10))}
        labelPlacement='floating'
        label='Segundo número'
        type='number'
      ></IonInput>
      <IonButton onClick={buttonSumaHandler}>Sumar</IonButton>
      <span>
        <h2>Resultado: </h2>
        <p>{isNaN(suma) ? 'Introduce dos números' : suma}</p>
      </span>
    </>
  )
}
