import React from 'react';
import {Container, Typography} from '@mui/material';
import {Box, Watch, StyledTextField, StyledButton, TextMain} from './InfoStyle';
import {ArrowRightAltOutlined} from '@mui/icons-material';
import {titleInfo} from '../constants';
import {TextRoot, TextSecondary} from '../indexStyle';


const Info = () => {
    return (
        <>
            <Container disableGutters={true} sx={{margin: "0"}} maxWidth={false}>
                <Box>
                    <TextMain>
                        <TextRoot gutterBottom>
                            {titleInfo.root}
                        </TextRoot>
                        <TextSecondary gutterBottom>
                            {titleInfo.secondary}
                        </TextSecondary>
                        <Typography sx={{fontSize: 18}} color="white" gutterBottom>
                            {titleInfo.ready}
                        </Typography>
                    </TextMain>
                    <Watch>
                        <StyledTextField
                            placeholder={"Адрес электронной почты"}
                            sx={{background: 'white', borderRadius: "4px", width: "500px"}}
                        />
                        <StyledButton
                            endIcon={<ArrowRightAltOutlined/>}
                            size="medium"
                            variant="contained">
                            {titleInfo.goWatch}
                        </StyledButton>
                    </Watch>
                </Box>
            </Container>
        </>
    );
};

export default Info;
