import './mainhelp.css'
import icongr from "../../imgs/icon-gr.svg"
import iconex from "../../imgs/icon-ex.svg"
import iconheart from "../../imgs/bxs-book-heart.svg"
function mainHelp() {
  let helpArr = [
    {
      title: "Get New Friends",
      desc: `
        You will meet new friends in some of classes that you take. Say hello to them
        and make friends, it will be so much warm friendship!
      `,
      img: icongr
    },
    {
      title: "Expert and Fun Mentor",
      desc: `
        Learn with earnest and don't forget to get relax too. Learn and enjoy the
        materials or classes with our expert mentors.
      `,
      img: iconex
    },
    {
      title: "Flexible Access",
      desc: `
        You can access materials or classes easily by our website also mobile. Access it
        everywhere and everytime, no limit for you to learn!
      `,
      img: iconheart
    }
  ]

  return (
    <>
      <section className="main-help">
        <div className="container">
          <div className="main-help-main row">
            {helpArr.map((item, index) => {
              return(
                  <div key={index} className="main-help-box row">
                    <div className="main-help-img">
                      <img src={item.img} alt="icon-gr" width="21" height="18" />
                    </div>
                    <div className="main-help-desc">
                      <h2 className="main-help-title">{item.title}</h2>
                      <p className="main-help-text">{item.desc}</p>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default mainHelp