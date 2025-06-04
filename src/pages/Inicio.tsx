import { Header } from '../components/Header'

export const Inicio = () => {
  return (
    <div>
      <Header title='Página Inicial' />
      <div className='flex flex-col items-center mt-8'>
        <img
          src='/adolfo.png'
          alt='Rafael Adolfo Rosa'
          className='aspect-square w-32 rounded-full object-cover mb-4 shadow-lg'
        />
        <h2 className='text-2xl font-semibold mb-2 text-center'>
          Rafael Adolfo Rosa
        </h2>
        <p className='text-gray-600 text-center break-all'>
          adolforosa.dev@gmail.com
        </p>
      </div>
    </div>
  )
}
