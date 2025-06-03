import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonImg,
  IonCard
} from '@ionic/react'

import { useLocation } from 'react-router-dom'
import {
  languageSharp,
  languageOutline,
  homeOutline,
  calculatorOutline,
  calculatorSharp,
  homeSharp,
  starOutline,
  starSharp
} from 'ionicons/icons'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/folder/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Traductor',
    url: '/traductor',
    iosIcon: languageOutline,
    mdIcon: languageSharp
  },
  {
    title: 'Tabla de Multiplicar',
    url: '/tabla',
    iosIcon: languageOutline,
    mdIcon: languageSharp
  },
  {
    title: 'experiencia',
    url: '/folder/experiencia',
    iosIcon: starOutline,
    mdIcon: starSharp
  }
]

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu
      contentId='main'
      type='overlay'
    >
      <IonContent>
        <IonList id='inbox-list'>
          <IonCard className='profile-card mb-8'>
            <IonImg
              className='profile-image'
              src='/adolfo.png'
              alt='Imagen de Rafael Adolfo Rosa'
            />
            <div>
              <IonListHeader>Rafael Adolfo Rosa</IonListHeader>
              <IonNote>adolforosa.dev@gmail.com</IonNote>
            </div>
          </IonCard>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle
                key={index}
                autoHide={false}
              >
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}
                >
                  <IonIcon
                    className='mr-3 p-2'
                    aria-hidden='true'
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel className='p-2'>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
