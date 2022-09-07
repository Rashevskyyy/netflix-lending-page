import React from 'react';
import {
    MediaContainer,
    TextContainer,
    StyledContainer,
    Image,
    Media,
} from './InfoKidsStyle';
import kids from "../../images/kids.png"
import {TextRoot, TextSecondary} from '../indexStyle';
import {titleKids} from '../constants';

const InfoKids = () => {
    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <MediaContainer>
                <Media>
                    <Image src={kids} alt="kids"/>
                </Media>
            </MediaContainer>
            <TextContainer>
                <TextRoot gutterBottom>
                    {titleKids.root}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {titleKids.secondary}
                </TextSecondary>
            </TextContainer>
        </StyledContainer>
    );
};

export default InfoKids;
