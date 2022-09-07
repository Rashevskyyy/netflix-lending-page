import React from 'react';
import {Typography} from '@mui/material';
import {BoxTv, Image, StyledContainer, Text, ContainerMedia, Video, Media} from './InfoTVStyle.ts';
import watch from "../../images/tv.png"
import videoTv from "../../images/video-tv-0819.m4v"
import {title} from './constants.ts';


const InfoTV = () => {
    return (
        <>
            <StyledContainer disableGutters={true} maxWidth={false}>
                <Text>
                    <Typography sx={{fontSize: "3.125rem"}} color="white" fontWeight={'bold'} gutterBottom>
                        {title.root}
                    </Typography>
                    <Typography sx={{fontSize: "1.625rem"}} color="white" gutterBottom>
                        {title.secondary}
                    </Typography>
                </Text>
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
