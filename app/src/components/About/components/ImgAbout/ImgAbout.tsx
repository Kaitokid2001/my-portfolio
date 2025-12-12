import { Wrapper, WrapperStyle, StyledImage } from "./StylesImgAbout";
import myImage from "../../../../assets/images/ImageMe.jpg"


function ImgAbout(){
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

export default ImgAbout;