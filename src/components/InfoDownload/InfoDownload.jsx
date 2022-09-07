import React from 'react';
import {
    MediaContainer,
    TextContainer,
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
import mobile from "../../images/mobile.jpg"
import film from "../../images/boxshot.png"
import {TextRoot, TextSecondary} from '../indexStyle';
import {titleInfoDownload} from '../constants';

const InfoDownload = () => {
    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <MediaContainer>
                <Media>
                    <Image src={mobile} alt="mobile" />
                    <CardDownload>
                        <ImageBox src={film} alt="film" />
                        <TextBox>
                            <TextCard>{titleInfoDownload.textCard}</TextCard>
                            <TextCardDownload>{titleInfoDownload.textCardDownload}</TextCardDownload>
                        </TextBox>
                        <GifBox />
                    </CardDownload>
                </Media>
            </MediaContainer>
            <TextContainer>
                <TextRoot gutterBottom>
                    {titleInfoDownload.root}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {titleInfoDownload.secondary}
                </TextSecondary>
            </TextContainer>
        </StyledContainer>
    );
};

export default InfoDownload;
