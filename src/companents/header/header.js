import './header.css'
import logo from '../../imgs/logo.svg'
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'

function header() {
  const menuNav = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Courses",
      link: '/course'
    },
    {
      title: "Webinar",
      link: "/webinar"
    },
    {
      title: "Pricing",
      link: '/pricing'
    }]
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-main row middle">
            <div className="header-logo">
              <a href="/"><img src={logo} alt="logo" width="82" height="39" /></a>
            </div>
            <nav className="header-nav">
              <ul className="header-nav-list row middle">
                {menuNav.map((navItem, index) => {
                  return(
                    <li key={index} className="header-nav-item"><a className="header-nav-link" href={navItem.link}>{navItem.title}</a></li>
                  )
                })}
              </ul>
            </nav>
            <div className="header-login-box row middle">
              <div className="header-lang">
                <p className="header-lang-text">Eng <i className='bx bx-globe'></i><i className='bx bxs-down-arrow'></i></p>
                <ul className="header-lang-list">
                  <li className="header-lang-item">Ru</li>
                  <li className="header-lang-item">Uz</li>
                  <li className="header-lang-item">Eng</li>
                </ul>
              </div>
              <button className="header-login-btn" type="button">Login</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default header

// export default function Header() {
//   return(
  //   <>
  //      <header className="site-header">
  //   <div className="container">
  //     <div className="header-main row middle">
  //       <div className="header-logo">
  //         <a href="/"><img src={logo} alt="logo" width="82" height="39" /></a>
  //       </div>
  //       <nav className="header-nav">
  //         <ul className="header-nav-list row middle">
  //           <li className="header-nav-item"><a className="header-nav-link activ" href="#">Home</a></li>
  //           <li className="header-nav-item"><a className="header-nav-link" href="#">courses</a></li>
  //           <li className="header-nav-item"><a className="header-nav-link" href="#">webinar</a></li>
  //           <li className="header-nav-item"><a className="header-nav-link" href="#">pricing</a></li>
  //         </ul>
  //       </nav>
  //       <div className="header-login-box row middle">
  //         <div className="header-lang">
  //           <p className="header-lang-text">Eng <i className='bx bx-globe'></i><i className='bx bxs-down-arrow'></i></p>
  //           <ul className="header-lang-list">
  //             <li className="header-lang-item">Ru</li>
  //             <li className="header-lang-item">Uz</li>
  //             <li className="header-lang-item">Eng</li>
  //           </ul>
  //         </div>
  //         <button className="header-login-btn" type="button">Login</button>
  //       </div>
  //     </div>
  //   </div>
  // </header>
  //   </>
//   )
// }