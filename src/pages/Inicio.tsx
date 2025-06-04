import {
  IonCard,
  IonCardContent,
  IonImg,
  IonListHeader,
  IonNote
} from '@ionic/react'
import { Header } from '../components/Header'

export const Inicio = () => {
  return (
    <div>
      <Header title='Página Inicial' />
      <div className='flex flex-col items-center justify-center p-6'>
        <IonCard
          className='profile-card mb-8'
          style={{ maxWidth: 350 }}
        >
          <IonImg
            className='profile-image'
            src='/adolfo.png'
            alt='Foto de Rafael Adolfo Rosa'
            style={{
              width: 128,
              height: 128,
              borderRadius: '50%',
              margin: '24px auto 0 auto'
            }}
          />
          <IonCardContent className='text-center'>
            <IonListHeader
              style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}
            >
              Rafael Adolfo Rosa
            </IonListHeader>
            <IonNote
              style={{ display: 'block', fontSize: 16, marginBottom: 8 }}
            >
              adolforosa.dev@gmail.com
            </IonNote>
            <div style={{ fontSize: 16 }}>
              <strong>Nombre:</strong> Rafael Adolfo
              <br />
              <strong>Apellido:</strong> Rosa
              <br />
              <strong>Correo:</strong> adolforosa.dev@gmail.com
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  )
}
