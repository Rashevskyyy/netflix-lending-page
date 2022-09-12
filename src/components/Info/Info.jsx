import React from 'react';
import {Container, Typography} from '@mui/material';
import {Watch, StyledTextField, StyledButton, TextContainer, BoxContainer} from './InfoStyle';
import {ArrowRightAltOutlined} from '@mui/icons-material';
import {TextRoot, TextSecondary} from '../indexStyle';
import {useTranslation} from 'react-i18next';


const Info = () => {
    const { t } = useTranslation('', { keyPrefix: 'info'})

    return (
        <Container disableGutters={true} sx={{margin: "0"}} maxWidth={false}>
            <BoxContainer>
                <TextContainer>
                    <TextRoot gutterBottom>
                        {t("root")}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {t("secondary")}
                    </TextSecondary>
                    <Typography sx={{fontSize: 18}} color="white" gutterBottom>
                        {t("ready")}
                    </Typography>
                </TextContainer>
                <Watch>
                    <StyledTextField
                        placeholder= {t("placeholderEmail")}
                    />
                    <StyledButton
                        endIcon={<ArrowRightAltOutlined/>}
                        size="medium"
                        variant="contained">
                        {t("goWatch")}
                    </StyledButton>
                </Watch>
            </BoxContainer>
        </Container>
    );
};

export default Info;
