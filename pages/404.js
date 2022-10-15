import Link from 'next/link'
import Layout from '../components/layout'

function Page404() {
  return (
    <Layout title='Página No Encontrada'>
      <p className='error'>Página No Encontrada</p>
      <Link href={'/'}>
        <a className='error-enlace'>Ir a Inicio</a>
      </Link>
    </Layout>
  )
}

export default Page404
