import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Occasions from "./components/Occasions.jsx";
import Features from "./components/Features.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import Demo from "./components/Demo.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import AuthPage from "./components/AuthPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {


  return (
      <>

          {/*<div className="wrap">*/}
          {/*    <Nav />*/}
          {/*    <Hero />*/}
          {/*</div>*/}

          {/*<HowItWorks />*/}
          {/*<Occasions />*/}
          {/*<Demo />*/}
          {/*<Features />*/}
          {/*<Cta />*/}
          {/*<Footer />*/}

         <Routes>
             <Route path="/login" element={< AuthPage/>} />
             <Route path="/" element={<Navigate to="/login"/>} />
             <Route path="/signup" element={<AuthPage/>} />
         </Routes>

         <Routes>
             <Route path="/forgot" element={<ForgotPassword/>} />
         </Routes>



      </>

  )
}

export default App
