import React from 'react';
import {Container, Typography} from '@mui/material';
import {Watch, StyledTextField, StyledButton, TextContainer, BoxContainer} from './InfoStyle';
import {ArrowRightAltOutlined} from '@mui/icons-material';
import {titleInfo} from '../constants';
import {TextRoot, TextSecondary} from '../indexStyle';


const Info = () => {
    return (
        <Container disableGutters={true} sx={{margin: "0"}} maxWidth={false}>
            <BoxContainer>
                <TextContainer>
                    <TextRoot gutterBottom>
                        {titleInfo.root}
                    </TextRoot>
                    <TextSecondary gutterBottom>
                        {titleInfo.secondary}
                    </TextSecondary>
                    <Typography sx={{fontSize: 18}} color="white" gutterBottom>
                        {titleInfo.ready}
                    </Typography>
                </TextContainer>
                <Watch>
                    <StyledTextField
                        placeholder={"Адрес электронной почты"}
                    />
                    <StyledButton
                        endIcon={<ArrowRightAltOutlined/>}
                        size="medium"
                        variant="contained">
                        {titleInfo.goWatch}
                    </StyledButton>
                </Watch>
            </BoxContainer>
        </Container>
    );
};

export default Info;
