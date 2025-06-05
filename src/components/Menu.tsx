import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle
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
  starSharp,
  addOutline,
  addSharp
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
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: addOutline,
    mdIcon: addSharp
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
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'experiencia',
    url: '/experiencia',
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
