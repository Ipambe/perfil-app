import { Header } from '../components/Header'

export const Experiencia = () => {
  return (
    <div className=''>
      {/* <h1 className='text-4xl font-bold mb-4'>Experiencia</h1> */}
      <Header title='Experiencia' />
      <div className='p-4'>
        <iframe
          className='w-full h-96 mt-4'
          src='https://www.youtube-nocookie.com/embed/_196J9yb0aA?si=vwHUCGRmZu6OHn4n'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
