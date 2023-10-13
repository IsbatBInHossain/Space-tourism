import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className=' text-3xl font-bold mb-10'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='mt-5 text-gray-500'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
