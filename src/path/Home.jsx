import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Labs from './components/Labs'
import Promote from './components/Promote'
import Teams from './components/Teams'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div>
      <section id="Navigation">
        <Navbar />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section className='about'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
        <About />
        <svg id='lab' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fill-opacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path></svg>
      </section>
      <section className='lab'>
        <Labs />
      </section>
      <section className='promote'>
        <Promote />
      </section>
      <section className='teams py-5'>
        <Teams />
      </section>
      <section className='footer py-5'>
        <Footer />
      </section>
    </div>
  )
}
