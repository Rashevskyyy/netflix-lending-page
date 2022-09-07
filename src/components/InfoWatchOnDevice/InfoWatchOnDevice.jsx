import React from 'react';
import {
    BoxTv,
    Image,
    StyledContainer,
    ContainerMedia,
    Video,
    Media,
    TextMain
} from './InfoWatchOnDeviceStyle';
import watch from "../../images/device-pile.png"
import videoTv from "../../images/video-devices.m4v"
import {titleWatchOnDevice} from '../constants';
import {TextRoot, TextSecondary} from '../indexStyle';

const InfoWatchOnDevice = () => {
    return (
        <>
            <StyledContainer disableGutters={true} maxWidth={false}>
                <TextMain>
                    <TextRoot gutterBottom>
                        {titleWatchOnDevice.root}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {titleWatchOnDevice.secondary}
                    </TextSecondary>
                </TextMain>
                <ContainerMedia>
                    <Media>
                        <Image src={watch} alt="watch"/>
                        <BoxTv>
                            <Video autoPlay loop playsInline muted>
                                <source src={videoTv} type="video/mp4"/>
                            </Video>
                        </BoxTv>
                    </Media>
                </ContainerMedia>
            </StyledContainer>
        </>
    );
};

export default InfoWatchOnDevice;
