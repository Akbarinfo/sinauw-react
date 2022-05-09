import './maincourse.css'
//images
import imgstar from '../../imgs/icon-star.svg'
import imgkey from '../../imgs/key-icon.svg'
import imgcrown from '../../imgs/crown-icon.svg'


function maincourse() {
  return(
    <>
      <section className="main-course">
        <div className="container">
          <h2 className="main-what-titles">Course Pricing</h2>
          <p className="main-what-text">Choose pricing that suits to your need.</p>

          <ul className="main-course-list row between">
            <li className="main-course-item">
              <div className="main-course-main row">
                <div className="main-course-icon">
                  <img src={imgstar} alt="icon-book" width="36" height="34" />
                </div>
                <div>
                  <h3 className="main-course-name">Free</h3>
                  <p className="main-course-text"><span className="main-course-dollor">$</span><span
                      className="main-course-prsing">0</span> /month</p>
                </div>
              </div>
              <ul className="main-course-list2">
                <li className="main-course-item2">Free e-book for every className</li>
                <li className="main-course-item2">Materials update every day</li>
                <li className="main-course-item2">Free download material videos</li>
                <li className="main-course-item2">Unlock 5 material videos</li>
              </ul>
              <button className="main-course-btn">Your Current Package</button>
            </li>

            <li className="main-course-item">
              <div className="main-course-main row">
                <div className="main-course-icon express">
                  <img src={imgkey}alt="icon-book" width="36" height="34" />
                </div>
                <div>
                  <h3 className="main-course-name">Express</h3>
                  <p className="main-course-text"><span className="main-course-dollor">$</span><span
                      className="main-course-prsing">75</span> /month</p>
                </div>
              </div>
              <ul className="main-course-list2">
                <li className="main-course-item2">Free e-book for every className</li>
                <li className="main-course-item2">Materials update every day</li>
                <li className="main-course-item2">Free download material videos</li>
                <li className="main-course-item2">Meeting 2 times a week</li>
                <li className="main-course-item2">Unlock 15 material videos</li>
              </ul>
              <button className="main-course-btn">Your Current Package</button>
            </li>

            <li className="main-course-item">
              <div className="main-course-main row">
                <div className="main-course-icon prem">
                  <img src={imgcrown} alt="icon-book" width="36" height="34" />
                </div>
                <div>
                  <h3 className="main-course-name">Premium</h3>
                  <p className="main-course-text"><span className="main-course-dollor">$</span><span
                      className="main-course-prsing">115</span> /month</p>
                </div>
              </div>
              <ul className="main-course-list2">
                <li className="main-course-item2">Free e-book for every className</li>
                <li className="main-course-item2">Materials update every day</li>
                <li className="main-course-item2">Free download material videos</li>
                <li className="main-course-item2">Private chat with mentor</li>
                <li className="main-course-item2">Meeting 3 times a week</li>
                <li className="main-course-item2">Unlock 5 material videos</li>
                <li className="main-course-item2">Unlimited saved className</li>
              </ul>
              <button className="main-course-btn">Your Current Package</button>
            </li>


          </ul>
        </div>
      </section>
    </>
  )
}

export default maincourse