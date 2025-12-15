"use client";
import Image, { StaticImageData } from "next/image";

import {Body, Title, Link} from "./StylesIconTitle";

type ServiceProps = {
    image: StaticImageData,
    title: string,
    link: string,
}


function IconTitle({image, title, link}: ServiceProps){
    return(
        <Body>
            <Link href={link}>
                <Image src={image} alt={title} width={60} height={60}/>
                <Title>{title}</Title>
            </Link>
        </Body>
    );
}

export default IconTitle;