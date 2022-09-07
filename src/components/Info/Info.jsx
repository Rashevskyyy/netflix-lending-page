import React from 'react';
import {Container, Typography} from '@mui/material';
import {Box, Text, Watch, StyledTextField, StyledButton} from './InfoStyle';
import {ArrowRightAltOutlined} from '@mui/icons-material';
import {titleInfo} from '../constants';


const Info = () => {
    return (
        <>
            <Container disableGutters={true} sx={{margin: "0"}} maxWidth={false}>
                <Box>
                    <Text>
                        <Typography sx={{fontSize: "3.125rem"}} color="white" fontWeight={'bold'} gutterBottom>
                            {titleInfo.root}
                        </Typography>
                        <Typography sx={{fontSize: "1.625rem"}} color="white" gutterBottom>
                            {titleInfo.secondary}
                        </Typography>
                        <Typography sx={{fontSize: 18}} color="white" gutterBottom>
                            {titleInfo.ready}
                        </Typography>
                    </Text>
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
