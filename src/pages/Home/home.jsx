import './home.css'
import players from '/players.jpg'
const home = () => {
  return (
    <>
    <section className='section1'>
          <h1>GET Sport-News on time, transfers and updates here every day !</h1>
          <p>Stay ahead with breaking sports stories, live scores, match highlights, and insider transfer rumors from your favorite leagues and teams.</p>
          <button>Subscribe Now</button>
    </section>

    <section className='section2'> 
          <div className='content'>
          <h3>BasketBall Bio</h3>
          <p>For basketball news, scores, highlights, and more, 
            check out the NBA, NBA G-League, and WNBA. Stay up-to-date 
            with the latest basketball stories and updates from around the world.
          </p>
          <button>Read More</button>
          </div>
          <div className='image'>
            <img src={players} alt="players" />
          </div>
    </section>
   <section className='section3'>
        <div className='video'>
            <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            ></video>
        </div>
    </section>

      
    </>
  )
}

export default home
