import '../src/index.js';
import '../src/App.css'
import '../src/css/col.css'
import Header from './companents/header/header.js';
import Hero from './companents/hero/hero.js'
import MainHelp from './companents/mainhelp/mainhelp.js'
import MainWhat from './companents/mainwhat/mainwhat.js'
import MainWebinar from './companents/mainwebinar/mainwebinar.js'
import MainCourse from './companents/maincourse/maincourse.js';
import MainApps from './companents/mainapps/mainapps.js'
import Footer from './companents/footer/footer.js';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <MainHelp />
        <MainWhat />
        <MainWebinar />
        <MainCourse />
        <MainApps />
      </main>
      <Footer />
    </>
  );
}

export default App;
