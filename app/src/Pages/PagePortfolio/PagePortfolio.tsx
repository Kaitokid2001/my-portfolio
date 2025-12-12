
import About from "../../components/About/About";
import Hero from "../../components/Header/Header";
import { Wrapper } from "./PagePortfolioStyles";


function PagePortfolio(){
    return(
            <Wrapper>
                <Hero/>
                <About/>
            </Wrapper>
    )
}

export default PagePortfolio;