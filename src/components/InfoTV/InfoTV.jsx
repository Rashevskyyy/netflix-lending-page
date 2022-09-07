import React from 'react';
import {BoxTv, Image, StyledContainer, ContainerMedia, Video, Media, TextMain} from './InfoTVStyle.js';
import watch from "../../images/tv.png"
import videoTv from "../../images/video-tv-0819.m4v"
import {titleTV} from '../constants';
import {TextRoot, TextSecondary} from '../indexStyle';

const InfoTV = () => {
    return (
        <>
            <StyledContainer disableGutters={true} maxWidth={false}>
                <TextMain>
                    <TextRoot gutterBottom>
                        {titleTV.root}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {titleTV.secondary}
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

export default InfoTV;
