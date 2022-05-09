import './mainwebinar.css'
//images
import prorg from '../../imgs/imac-pro-right.png'
import prolf from '../../imgs/imac-pro-Left.png'

function mainwebinar() {
  return(
    <>
      <section key={1} className="main-webinar">
        <div className="container">
          <h2 className="main-what-titles">Live Online Webinar</h2>
          <p className="main-what-text">You can stream Webinar live on our apps. Stay update on our Webinar, it's Free!</p>
          <ul className="main-webinar-list row">
            <li className="main-webinar-item"><img src={prorg} alt="imac-pro-right" width="401"
                height="270" /></li>
            <li className="main-webinar-item"><iframe width="622" height="424" src={'https://www.youtube.com/embed/EgTMEjP70Dg'}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{border: "none"}}></iframe></li>
            <li className="main-webinar-item"><img src={prolf} alt="imac-pro-right" width="408" height="270" />
            </li>
          </ul>
          <a className="main-webinar-link row middle" href="#">See more webinar videos <i
              className='bx bx-arrow-back bx-flip-horizontal'></i></a>
      </div>
    </section>
    </>
  )
}

export default mainwebinar