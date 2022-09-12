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
import {useTranslation} from 'react-i18next';

const InfoKids = () => {
    const { t } = useTranslation('', { keyPrefix: 'infoKids'})

    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <MediaContainer>
                <Media>
                    <Image src={kids} alt="kids"/>
                </Media>
            </MediaContainer>
            <TextContainer>
                <TextRoot gutterBottom>
                    {t("root")}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {t("secondary")}
                </TextSecondary>
            </TextContainer>
        </StyledContainer>
    );
};

export default InfoKids;
