
import About from "../../components/About/About";
import Hero from "../../components/Header/Header";
import Skill from "../../components/Skills/Skills";
import { Wrapper } from "./PagePortfolioStyles";


function PagePortfolio(){
    return(
            <Wrapper>
                <Hero/>
                <About/>
                <Skill/>
            </Wrapper>
    )
}

export default PagePortfolio;