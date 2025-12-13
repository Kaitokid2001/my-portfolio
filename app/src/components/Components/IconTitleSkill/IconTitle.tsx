import Image, { StaticImageData } from "next/image";

import {Body, Title} from "./StylesIconTitle";

type ServiceProps = {
    image: StaticImageData,
    title: string, 
}


function IconTitle({image, title}: ServiceProps){
    return(
        <Body>
            <Image src={image} alt={title} width={60} height={60}/>
            <Title>{title}</Title>
        </Body>
    );
}

export default IconTitle;