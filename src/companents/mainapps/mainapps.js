import './mainapps.css'
//images
import imggoogle from '../../imgs/google-play-icon.png'
import imgappstore from '../../imgs/appstore-icon.png'
import imgapps from '../../imgs/apps-imgs.svg'
function mainapps(){
  return(
    <>
      <section className="main-apps">
        <div className="container">
          <div className="main-apps-box">
            <div className="row">
              <div className="main-apps-main">
                <h2 className="main-apps-title">Get Our Apps, Now!</h2>
                <p className="main-apps-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
                <div className="row middle">
                  <div className="main-apps-icon">
                    <a href="#" target="_blank"><img src={imggoogle} alt="appstore" width="164"
                        height="72" /></a>
                  </div>
                  <div className="main-apps-icon">
                    <a href="#" target="_blank"><img src={imgappstore} alt="appstore" width="147"
                        height="49" /></a>
                  </div>
                  <div className="main-apps-img">
                    <img src={imgapps} alt="appstore-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
      </section>
    </>
  )
}

export default mainapps
