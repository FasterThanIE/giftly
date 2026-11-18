import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Occasions from "./Occasions.jsx";
import Demo from "./Demo.jsx";
import Features from "./Features.jsx";
import Cta from "./Cta.jsx";
import Footer from "./Footer.jsx";

function Home() {
    return (
        <>
            <div className="wrap">
                <Nav />
                <Hero />
            </div>

            <HowItWorks />
            <Occasions />
            <Demo />
            <Features />
            <Cta />
            <Footer />
        </>
    );
}

export default Home;