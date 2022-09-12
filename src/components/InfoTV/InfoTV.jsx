import React from 'react';
import {BoxTv, Image, StyledContainer, MediaContainer, Video, Media, TextContainer} from './InfoTVStyle.js';
import watch from "../../images/tv.png"
import videoTv from "../../images/video-tv.m4v"
import {TextRoot, TextSecondary} from '../indexStyle';
import {useTranslation} from 'react-i18next';

const InfoTV = () => {
    const { t } = useTranslation('', { keyPrefix: 'infoTV'})

    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <TextContainer>
                <TextRoot gutterBottom>
                    {t("root")}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {t("secondary")}
                </TextSecondary>
            </TextContainer>
            <MediaContainer>
                <Media>
                    <Image src={watch} alt="watch"/>
                    <BoxTv>
                        <Video autoPlay loop playsInline muted>
                            <source src={videoTv} type="video/mp4"/>
                        </Video>
                    </BoxTv>
                </Media>
            </MediaContainer>
        </StyledContainer>
    );
};

export default InfoTV;
