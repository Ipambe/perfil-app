import { Header } from '../components/Header'

export const Experiencia = () => {
  return (
    <div className=''>
      <Header title='Experiencia' />
      <div className='p-4'>
        <iframe
          className='w-full h-96 mt-4'
          src='https://www.youtube.com/embed/a1gDaN1dFIY?si=Ae3bBlRC7nSomcOS'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
