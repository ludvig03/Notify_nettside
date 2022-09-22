import Hero from "../components/Hero.jsx"
import Fordeler from "../components/Fordeler.jsx"
import Stats from "../components/Stats.jsx"
import Trusted from "../components/Trusted.jsx"
import Prices from "../components/Prices.jsx"
import Footer from "../components/Footer.jsx"
import Team from "../components/Team.jsx"


function Landing (){
    return (
        <div>
            <Hero/>
            <Trusted/>
            <Stats/>
            <Fordeler/>
            <Prices/>
            <Team/>
            <Footer/>
        </div>
    )

}

export default Landing