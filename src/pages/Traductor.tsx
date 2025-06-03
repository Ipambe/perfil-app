import { IonButton, IonInput, IonTitle } from '@ionic/react'
import { useState } from 'react'
import { numeroALetras } from '../utils/numeroALetra'

export const Traductor = () => {
  const [num, setNum] = useState(0)

  const buttonTranslateHandler = () => {
    console.log(`Traduciendo el número: ${num}`)
  }

  const traduccion = numeroALetras(num)

  return (
    <>
      <IonTitle>
        <h1>Sumadora simple</h1>
      </IonTitle>
      <IonInput
        onIonChange={(e) => setNum(parseInt(e.detail.value!, 10))}
        labelPlacement='floating'
        label='Primer número'
        type='number'
      ></IonInput>
      <IonButton onClick={buttonTranslateHandler}>Traducir</IonButton>
      <span>
        <h2>Traducción:</h2>
        <p>{traduccion}</p>
      </span>
    </>
  )
}
