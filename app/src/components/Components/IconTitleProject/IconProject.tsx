import Image, { StaticImageData } from "next/image";

import {Body, Title, Wrapper, ButtonDemo, ButtonView, Link} from "./StylesIconProject";
import { ActivityIcon, GitIcon } from "../../Components/Icons/Icon";

type ServiceProps = {
    icons: StaticImageData[];
    title: string, 
    linkDemo: string;
    linkGit: string;
}

function IconProject({icons, title, linkDemo, linkGit}: ServiceProps){
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
            <Body>
                <Link href={linkDemo}>
                    <ButtonDemo>
                        <ActivityIcon/>
                        Live demo
                    </ButtonDemo>
                </Link>
                <Link href={linkGit}>
                    <ButtonView>
                        <GitIcon/>
                        GitHub
                    </ButtonView>
                </Link>
            </Body>
        </Wrapper>
    );
}

export default IconProject;