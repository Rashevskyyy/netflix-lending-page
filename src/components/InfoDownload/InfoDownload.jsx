import React from 'react';
import {
    ContainerMedia,
    TextMain,
    StyledContainer,
    Image,
    CardDownload,
    Media,
    ImageBox,
    TextBox,
    TextCard,
    TextCardDownload,
    GifBox
} from './InfoDownloadStyle.ts';
import mobile from "../../images/mobile-0819.jpg"
import film from "../../images/boxshot.png"
import {Text} from '../indexStyle.ts';
import {title} from './constants.ts';

const InfoDownload = () => {
    return (
        <>
            <StyledContainer disableGutters={true} maxWidth={false}>
                <ContainerMedia>
                    <Media>
                        <Image src={mobile} alt="mobile"/>
                        <CardDownload>
                            <ImageBox src={film} alt="film"/>
                            <TextBox>
                                <TextCard>Очень странные дела</TextCard>
                                <TextCardDownload>Идет загрузка...</TextCardDownload>
                            </TextBox>
                            <GifBox/>
                        </CardDownload>
                    </Media>
                </ContainerMedia>
                <TextMain>
                    <Text gutterBottom>
                        {title.root}
                    </Text>
                    <Text sx={{fontSize: "1.625rem", fontWeight: 'unset'}} gutterBottom>
                        {title.secondary}
                    </Text>
                </TextMain>

            </StyledContainer>
        </>
    );
};

export default InfoDownload;
