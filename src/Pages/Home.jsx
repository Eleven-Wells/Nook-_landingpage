import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>You've been consuming content. Now be part of what it becomes.</h1>
            <p>Read. Write. Engage. On Nook, attention isn't wasted, it's returned.</p>
            <a href="#" className="hero-btn">Join Nook</a>
          </div>
          <div className="hero-images">
            <div className="hero-img-top-right">
              <div className="img-placeholder"></div>
              <div className="img-placeholder small"></div>
            </div>
            <div className="hero-img-bottom-right">
              <div className="img-placeholder"></div>
              <div className="img-placeholder small"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home