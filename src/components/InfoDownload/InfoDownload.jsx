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
} from './InfoDownloadStyle';
import mobile from "../../images/mobile-0819.jpg"
import film from "../../images/boxshot.png"
import {TextRoot, TextSecondary} from '../indexStyle';
import {titleInfoDownload} from '../constants';

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
                    <TextRoot gutterBottom>
                        {titleInfoDownload.root}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {titleInfoDownload.secondary}
                    </TextSecondary>
                </TextMain>

            </StyledContainer>
        </>
    );
};

export default InfoDownload;
