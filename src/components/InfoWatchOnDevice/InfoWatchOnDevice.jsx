import React from 'react';
import {
    BoxTv,
    Image,
    StyledContainer,
    MediaContainer,
    Video,
    Media,
    TextContainer
} from './InfoWatchOnDeviceStyle';
import watch from "../../images/device-pile.png"
import videoTv from "../../images/video-devices.m4v"
import {TextRoot, TextSecondary} from '../indexStyle';
import {useTranslation} from 'react-i18next';

const InfoWatchOnDevice = () => {
    const { t } = useTranslation('', { keyPrefix: 'infoWatchOnDevice'})
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

export default InfoWatchOnDevice;
