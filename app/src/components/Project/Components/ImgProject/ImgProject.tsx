import { Wrapper, StyledImage } from "./StylesImgProject";

import { StaticImageData } from "next/image";

export type ProjectItem = {
  image: StaticImageData;
};

function ImgProject({image}:ProjectItem){
    return (
        <Wrapper>
            <StyledImage src={image} alt="project-image" />
        </Wrapper>
    )
}

export default ImgProject ;