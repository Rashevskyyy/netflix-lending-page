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
import {titleWatchOnDevice} from '../constants';
import {TextRoot, TextSecondary} from '../indexStyle';

const InfoWatchOnDevice = () => {
    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <TextContainer>
                <TextRoot gutterBottom>
                    {titleWatchOnDevice.root}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {titleWatchOnDevice.secondary}
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
