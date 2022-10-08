import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
      title='Nosotros'
      description='Sobre nosotros, guitarLA, tienda de música'
    >
      <main className='contenedores'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src='/img/nosotros.jpg'
            width={1000}
            height={800}
            alt='Imagen Sobre nosotros'
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt neque nibh, nec consectetur lacus semper ut. Phasellus
              lacus augue, elementum in turpis eget, aliquet accumsan nibh.
              Donec blandit euismod purus, et dictum diam viverra vel.
            </p>
            <p>
              Donec vitae consequat lorem, ullamcorper efficitur dolor. Maecenas
              rhoncus odio sed sem finibus, at pretium mauris consectetur.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vivamus dapibus ullamcorper
              odio. Curabitur commodo consectetur est, ac pulvinar arcu
              ultricies sit amet.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
