import Image, { StaticImageData } from "next/image";

import {Body, Title, Wrapper} from "./StylesIconProject";

type ServiceProps = {
    icons: StaticImageData[];
    title: string, 
}

function IconProject({icons, title}: ServiceProps){
    return(
        <Wrapper>
            <Title>{title}</Title>
            <Body>
                {icons.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon}
                        alt={`${title}-${index}`}
                        width={35}
                        height={35}
                    />
                ))}
            </Body>
        </Wrapper>
    );
}

export default IconProject;