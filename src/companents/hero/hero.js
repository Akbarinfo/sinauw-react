import './hero.css'
//rasmlar
import lup from '../../imgs/icon-lup.png'
import book from '../../imgs/icon-book.png'
import imgAdd_1 from '../../imgs/imgadd-1.png'
import imgAdd_2 from '../../imgs/imgadd-2.png'
import imgAdd_3 from '../../imgs/imgadd-3.png'
import imgAdd_4 from '../../imgs/imgadd-4.png'
import imgAdd_plus from '../../imgs/plus.svg'
import backgr from '../../imgs/img-backround.png'
import imgbac from '../../imgs/hero-girl.png'


function hero() {
  let imgAdd = [
    {
      alt: "imgadd-1",
      width: "52",
      height: '52',
      img: imgAdd_1
    },
    {
      alt: "imgadd-2",
      width: "52",
      height: '52',
      img: imgAdd_2
    },
    {
      alt: "imgadd-3",
      width: "52",
      height: '52',
      img: imgAdd_3
    },
    {
      alt: "imgadd-4",
      width: "52",
      height: '52',
      img: imgAdd_4
    },
    {
      alt: "plus",
      width: "24",
      height: '24',
      img: imgAdd_plus
    },
  ]

  let sugges = [
    {
      title: "UI UX Design"
    },
    {
      title: "CSS Fundamental"
    },
    {
      title: "3D Design Illustration"
    },
    {
      title: "Website Development"
    },
    {
      title: "Logo Design"
    },
    {
      title: "Icon Design"
    },
  ]

  return(
    <>
      <section key={2} className="hero-part">
        <div className="container">
          <div className="hero-parts row">
            <div className="col-6">
              <div className="hero-img-lup"><img src={lup} alt="icon-lup" /></div>
              <div className="hero-img-book"><img src={book} alt="icon-lup" /></div>
              <div className="hero-img" style={{
                backgroundImage: "url('" + backgr + "')"
              }}>
                <img src={imgbac} alt="hero-girl" width="785" height="752" />
              </div>
              <div className="hero-imgadd">
                <ul className="hero-img-list row">
                  {imgAdd.map((item, index) => {
                    return (
                      <li key={index} className="hero-img-item"><a href="#"><img src={item.img} alt={item.alt} width={item.width}
                      height={item.height} /></a></li>
                    )
                  })
                  }
                  <li className="hero-imgadd-text">
                    <p>More than 80k+
                      Students <span className="hero-imgadd-span">joined!</span></p>
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-6">
              <div className="hero-main">
                <h2 className="hero-title">Grow Your Skills To Advance Your Career Path.</h2>
                <p className="hero-text">We have something big for you who want to level up!</p>
                <div className="hero-searchbox">
                  <input className="hero-search" type="text" id="search" placeholder="What do you want to learn..." />
                  <button className="hero-btn" type="submit"><i className='bx bx-search'></i></button>
                </div>
                <h3 className="hero-subtitle">Suggestions</h3>
                <ul className="hero-list row">
                  {sugges.map((item, index) =>
                    {
                      return (
                        <li key={index} className="hero-item"><a className="hero-link" href="#">{item.title}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default hero