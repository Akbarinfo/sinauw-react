import './mainwhat.css'

import imgim1 from '../../imgs/what-im1.png'
import imgadd1 from '../../imgs/imgadd-1.png'
import imgwhat2 from '../../imgs/what-2.png'
import imgwhat3 from '../../imgs/what-3.png'
import imgwhat4 from '../../imgs/what-4.png'


function mainWhat(){
  return(
    <>
      <section className="main-what">
      <div className="container">
        <h2 className="main-what-titles">What Do You Want to Learn?</h2>
        <p className="main-what-text">Choose the right class as you need. Then enjoy studying.</p>
        <ul className="main-what-list row between">
          <li className="main-what-item">
            <div className="main-what-img">
              <img src={imgim1} alt="what-2" width="252" height="169" />
            </div>
            <h2 className="main-what-section">Technology</h2>
            <h3 className="main-what-title">Digital Marketing Strategy</h3>
            <p className="main-what-desc">This course aims to give you deeper understanding of core processes ...</p>

            <div className="main-what-peoples row middle">
              <div className="hero-img-item">
                <img src={imgadd1} alt="imgadd-1" width="52" height="52" />
              </div>
              <div className="main-what-people">
                <h4 className="main-what-subtitle">Joey Piere</h4>
                <p className="main-what-admin">Mentor</p>
              </div>
            </div>
            <a className="main-what-btn" href="#">Access Class</a>
          </li>

          <li className="main-what-item">
            <div className="main-what-img">
              <img src={imgwhat2} alt="what-2" width="252" height="169" />
            </div>
            <h2 className="main-what-section">Design</h2>
            <h3 className="main-what-title">Figma Fundamental</h3>
            <p className="main-what-desc">These lessons and exercises will help you start designing with...</p>

            <div className="main-what-peoples row middle">
              <div className="hero-img-item">
                <img src={imgadd1} alt="imgadd-1" width="52" height="52" />
              </div>
              <div className="main-what-people">
                <h4 className="main-what-subtitle">Araya Sheila</h4>
                <p className="main-what-admin">Mentor</p>
              </div>
            </div>
            <a className="main-what-btn" href="#">Access Class</a>
          </li>

          <li className="main-what-item">
            <div className="main-what-img">
              <img src={imgwhat3} alt="what-2" width="252" height="169" />
            </div>
            <h2 className="main-what-section">Coding</h2>
            <h3 className="main-what-title">HTML Fundamental</h3>
            <p className="main-what-desc">Well organized and easy to make you understand tutorials with lots of ...</p>

            <div className="main-what-peoples row middle">
              <div className="hero-img-item">
                <img src={imgadd1} alt="what-2" width="52" height="52" />
              </div>
              <div className="main-what-people">
                <h4 className="main-what-subtitle">Ellisa Ruth</h4>
                <p className="main-what-admin">Mentor</p>
              </div>
            </div>
            <a className="main-what-btn" href="#">Access Class</a>
          </li>

          <li className="main-what-item">
            <div className="main-what-img">
              <img src={imgwhat4} alt="what-4" width="252" height="169" />
            </div>
            <h2 className="main-what-section">Coding</h2>
            <h3 className="main-what-title">Android App Development</h3>
            <p className="main-what-desc">Take your Android coding skills to the next level, advanced Android...</p>

            <div className="main-what-peoples row middle">
              <div className="hero-img-item">
                <img src={imgadd1} alt="imgadd-1" width="52" height="52" />
              </div>
              <div className="main-what-people">
                <h4 className="main-what-subtitle">Wendy Troye</h4>
                <p className="main-what-admin">Mentor</p>
              </div>
            </div>
            <a className="main-what-btn" href="#">Access Class</a>
          </li>
        </ul>
        <button className="main-what-link" type="button">Show All Classes</button>
      </div>
    </section>
    </>
  )
}

export default mainWhat