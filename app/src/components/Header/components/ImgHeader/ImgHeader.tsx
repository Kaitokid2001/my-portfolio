import { Wrapper, WrapperStyle, StyledImage } from "./ImgHeaderStyles";
import myImage from "../../../../assets/images/ImageMe.jpg"


function ImgHeader(){
    return (
        <Wrapper>
            <WrapperStyle>
                <StyledImage
                src={myImage}
                alt="Avatar"
            />
            </WrapperStyle>
        </Wrapper>
    )
}

export default ImgHeader;