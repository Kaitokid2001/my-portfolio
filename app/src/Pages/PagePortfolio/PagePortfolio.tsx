
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Header/Header";
import Project from "../../components/Project/Project";
import Skill from "../../components/Skills/Skills";
import { Wrapper } from "./PagePortfolioStyles";


function PagePortfolio(){
    return(
            <Wrapper>
                <Hero/>
                <About/>
                <Skill/>
                <Project/>
                <Footer/>
            </Wrapper>
    )
}

export default PagePortfolio;