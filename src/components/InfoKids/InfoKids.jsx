import React from 'react';
import {
    ContainerMedia,
    TextMain,
    StyledContainer,
    Image,
    Media,
} from './InfoKidsStyle';
import mobile from "../../images/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png"
import {TextRoot, TextSecondary} from '../indexStyle';
import {titleKids} from '../constants';

const InfoKids = () => {
    return (
        <>
            <StyledContainer disableGutters={true} maxWidth={false}>
                <ContainerMedia>
                    <Media>
                        <Image src={mobile} alt="mobile"/>
                    </Media>
                </ContainerMedia>
                <TextMain>
                    <TextRoot gutterBottom>
                        {titleKids.root}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {titleKids.secondary}
                    </TextSecondary>
                </TextMain>

            </StyledContainer>
        </>
    );
};

export default InfoKids;
