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
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp
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
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Traductor',
    url: '/traductor',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'experiencia',
    url: '/folder/experiencia',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
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
          <IonCard className='profile-card'>
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
                    aria-hidden='true'
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
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
